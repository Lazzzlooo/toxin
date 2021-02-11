import 'item-quantity-dropdown/lib/item-quantity-dropdown.min'

export default class Iqdropdown {
    constructor($rootElement, data) {
        this._$root = $($rootElement)
        this._placeholder = data.placeholder;
        this._$iqdropdowns = this._$root.find('.iqdropdown')
        this._init(this._$iqdropdowns, data)
    }

    _setWord(count, item) {
        let word = item.singular
        if (count > 0) {
            const [number2, number5] = item.plurals
            if (count > 4) word = number5
            else if (count > 1) word = number2
        }
        return word
    }

    _bindThis() {
        this._handleDocumentMouseUp = this._handleDocumentMouseUp.bind(this);
    }

    _init($iqdropdowns, data) {
        $iqdropdowns.each((_, $iqdropdown) => {
            $($iqdropdown).iqDropdown({
                setSelectionText: (itemCount, totalItems) => this._setSelectText(data, itemCount, totalItems)
            })
        })
    }

    _setSelectText() {}

    _addEventListeners() {
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

}
