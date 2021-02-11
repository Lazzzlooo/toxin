import Iqdropdown from "../iqdropdown/iqdropdown";

const defaultData = {
    placeholder: 'Сколько гостей',
    guests: {id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей']},
    babies: {id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев']},
};

class GuestDropdown extends Iqdropdown {
    constructor($rootElement, data) {
        super($rootElement, data);
        this._data = data
        this._initMembers(data)
        this._bindThis()
        this._addEventListeners()
    }

    _initMembers({guests, babies}) {
        this._guests = guests;
        this._babies = babies;
        this._$buttonClear = this._$root.find('[data-button="clear"]')
        this._$buttonApply = this._$root.find('[data-button="apply"]')
    }

    _setSelectText(data, itemCount, totalItems) {
        this._initMembers(data)
        let result = this._placeholder;
        let babiesCount = itemCount[this._babies.id];
        const guestsCount = totalItems - babiesCount;
        if (totalItems > 0) {
            this._$buttonClear.removeClass('button-hidden')
            let wordGuest = this._setWord(guestsCount, this._guests)
            let wordBabies = this._setWord(babiesCount, this._babies)
            if (guestsCount > 0) {
                let babies = babiesCount > 0 ? `, ${babiesCount} ${wordBabies}` : ''
                result = `${guestsCount} ${wordGuest}${babies}`
            }
        } else this._$buttonClear.addClass('button-hidden')
        return result
    }

    _bindThis() {
        super._bindThis()
        this._handleButtonClearClick = this._handleButtonClearClick.bind(this);
        this._handleButtonApplyClick = this._handleButtonApplyClick.bind(this);
    }

    _addEventListeners(data) {
        super._addEventListeners()
        this._$buttonClear.on('click.buttonClear', this._handleButtonClearClick);
        this._$buttonApply.on('click.buttonApply', this._handleButtonApplyClick);
    }

    _handleButtonClearClick(event) {
        const $button = $(event.currentTarget);
        const $iqdropdown = $button.closest('.iqdropdown');
        $iqdropdown.find('.iqdropdown-content').removeClass('iqdropdown-content');
        $iqdropdown.find('.iqdropdown-item-controls').remove();
        $iqdropdown.off();
        $iqdropdown.find('.iqdropdown-menu-option').removeData('defaultcount');
        $iqdropdown.find('.iqdropdown-menu-option').removeAttr('data-defaultcount');
        this._init($iqdropdown,  this._data);
    }

    _handleButtonApplyClick(event) {
        const $button = $(event.currentTarget);
        const $iqdropdown = $button.closest('.iqdropdown');
        $iqdropdown.removeClass('menu-open');
    }
}

new GuestDropdown('.js-guest-input', defaultData)




