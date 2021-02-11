import 'item-quantity-dropdown/lib/item-quantity-dropdown.min'

const defaultData = {
    placeholder: 'Сколько гостей',
    guests: {id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей']},
    babies: {id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев']},
};

const defaultDataRoom = {
    placeholder: '2 спальни, 2 кровати...',
    bedroom: {id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален']},
    bed: {id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей']},
    bathroom: {id: 'bathroom', singular: 'ванная комната', plurals: ['ванные комнаты', 'ванных комнат']},
};

class GuestDropdown {
    constructor($rootElement, data) {
        this._$root = $($rootElement)
        this._initMembers(data)
        this._init(this._$iqdropdowns)
        this._bindThis()
        this._addEventListeners()
    }

    _initMembers({guests, babies, placeholder}) {
        this._guests = guests;
        this._babies = babies;
        this._placeholder = placeholder;
        this._$buttonClear = this._$root.find('[data-button="clear"]')
        this._$buttonApply = this._$root.find('[data-button="apply"]')
        this._$iqdropdowns = this._$root.find('.iqdropdown')
    };

    _init($iqdropdowns) {
        $iqdropdowns.each((_, $iqdropdown) => {
            $($iqdropdown).iqDropdown({
                setSelectionText: (itemCount, totalItems) => this._guestPlaceholder(itemCount, totalItems)
            })
        })
    };

    _guestPlaceholder(itemCount, totalItems) {
        let result = this._placeholder
        let babiesCount = itemCount[this._babies.id];
        const guestsCount = totalItems - babiesCount;
        if (totalItems > 0) {
            this._$buttonClear.removeClass('button-hidden')
            let wordGuest = this._setGuestWord(guestsCount, this._guests)
            let wordBabies = this._setGuestWord(babiesCount, this._babies)
            if (guestsCount > 0) {
                let babies = babiesCount > 0 ? `, ${babiesCount} ${wordBabies}` : ''
                result = `${guestsCount} ${wordGuest}${babies}`
            }
        } else this._$buttonClear.addClass('button-hidden')
        return result

    }

    _setGuestWord(count, guestWords) {
        let guest = guestWords.singular
        if (count > 0) {
            const [number2, number5] = guestWords.plurals
            if (count > 4) guest = number5
            else if (count > 1) guest = number2
        }
        return guest
    }

    _bindThis() {
        this._handleButtonClearClick = this._handleButtonClearClick.bind(this);
        this._handleButtonApplyClick = this._handleButtonApplyClick.bind(this);
        this._handleDocumentMouseUp = this._handleDocumentMouseUp.bind(this);
    }

    _addEventListeners() {
        this._$buttonClear.on('click.buttonClear', this._handleButtonClearClick);
        this._$buttonApply.on('click.buttonApply', this._handleButtonApplyClick);
        this._$iqdropdowns.find('.iqdropdown-menu').on('click.iqdropdown', this._handleIqdropdownMenuClick);
        $(document).on('mouseup.document', this._handleDocumentMouseUp);
    }

    _handleDocumentMouseUp(event) {
        if (!this._$iqdropdowns.is(event.target)
            && this._$iqdropdowns.has(event.target).length === 0) {
            this._$iqdropdowns.removeClass('menu-open');
        }
    }


    _handleIqdropdownMenuClick(event) {
        event.stopPropagation();
    }

    _handleButtonClearClick(event) {
        const $button = $(event.currentTarget);
        const $iqdropdown = $button.closest('.iqdropdown');
        $iqdropdown.find('.iqdropdown-content').removeClass('iqdropdown-content');
        $iqdropdown.find('.iqdropdown-item-controls').remove();
        $iqdropdown.off();
        $iqdropdown.find('.iqdropdown-menu-option').removeData('defaultcount');
        $iqdropdown.find('.iqdropdown-menu-option').removeAttr('data-defaultcount');
        this._init($iqdropdown);
    }

    _handleButtonApplyClick(event) {
        const $button = $(event.currentTarget);
        const $iqdropdown = $button.closest('.iqdropdown');
        $iqdropdown.removeClass('menu-open');
    }
}

new GuestDropdown('.iqdropdown-container', defaultData)

