import {DatepickerContainer, dataDatepicker} from "./init";

class Datepicker {
    constructor($rootElement, dataDatepicker) {
        this._$root = $($rootElement)
        this._initDatepicker(dataDatepicker)
        this._updateDatepicker()
        this._bindThis()
        this._addEventListeners()
        return this._datepicker;
    }

    _initDatepicker(dataDatepicker) {
        this._$inputs = this._$root.find('[data-datepicker = "input"]')
        this._datepicker = new DatepickerContainer(this._$inputs[0], dataDatepicker)
    }

    _updateDatepicker() {
        this._datepicker.update('onSelect', ((formattedDate) => {
            [this._$inputs[0].value, this._$inputs[1].value = ''] = formattedDate.split(dataDatepicker.multipleDatesSeparator);
        }))
    }

    _bindThis() {
        this._handleDatePickerInputClick = this._handleDatePickerInputClick.bind(this);
    }

    _addEventListeners() {
        this._$inputs[1].addEventListener('click', this._handleDatePickerInputClick);
    }

    _handleDatePickerInputClick() {
        this._datepicker.show();
    }

}

new Datepicker("#datepicker", dataDatepicker)
