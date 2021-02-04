import 'air-datepicker/dist/js/datepicker'


export class DatepickerContainer {
    constructor($rootElement, dataDatepicker) {
        this._$root = $($rootElement)
        this._initDatepicker(dataDatepicker)
        this._initButton()
        this._bindThis()
        this._addEventListener()
        return this._datepicker
    }

    _initButton() {
        this._buttonContiner = `<div class="datepicker__buttons">
                                    <span class="datepicker__button js-datepicker-clear">Очистить</span>
                                    <span class="datepicker__button js-datepicker-apply">Применить</span>
                                </div>`
        this._datepicker.$content.append(this._buttonContiner)
        this.$clear = this._datepicker.$content.find('.js-datepicker-clear')
        this.$apply = this._datepicker.$content.find('.js-datepicker-apply')
    }

    _initDatepicker(dataDatepicker) {
        this._datepicker = this._$root.datepicker(dataDatepicker).data('datepicker')
    }

    _bindThis() {
        this._handleDatepickerButtonClearClick = this._handleDatepickerButtonClearClick.bind(this);
        this._handleDatepickerButtonApplyClick = this._handleDatepickerButtonApplyClick.bind(this);
    }

    _addEventListener() {
        this.$clear.on('click.clear', this._handleDatepickerButtonClearClick)
        this.$apply.on('click.apply', this._handleDatepickerButtonApplyClick)
    }

    _handleDatepickerButtonClearClick() {
        this._datepicker.clear();
    }

    _handleDatepickerButtonApplyClick() {
        this._datepicker.hide();
    }

}


export const dataDatepicker = {
    multipleDates: 2,
    range: true,
    minDate: new Date(),
    disableNavWhenOutOfRange: true,
    multipleDatesSeparator: '-',
    prevHtml: `<span class="material-icons">arrow_back</span>`,
    nextHtml: `<span class="material-icons">arrow_forward</span>`,
    navTitles: {
        days: `<h2>MM yyyy</h2>`,
    }
}
