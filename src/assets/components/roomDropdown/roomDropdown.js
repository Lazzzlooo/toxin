import Iqdropdown from "../iqdropdown/iqdropdown";

const defaultDataRoom = {
    placeholder: '2 спальни, 2 кровати...',
    rooms: [
        {
            id: 'bedrooms',
            singular: 'спальня',
            plurals: ['спальни', 'спален']

        },
        {
            id: 'beds',
            singular: 'кровать',
            plurals: ['кровати', 'кроватей']
        },
        {
            id: 'bathroom',
            singular: 'ванная комната',
            plurals: ['ванные комнаты', 'ванных комнат']
        }
    ]
};


class RoomDropdown extends Iqdropdown {
    constructor($rootElement, data) {
        super($rootElement, data);
        this._initMembers(data)
    }

    _initMembers({rooms}) {
        this._items = rooms
    }

    _setSelectText(data, itemCount, totalItems) {
        this._initMembers(data)
        let result = this._placeholder;
        if (totalItems > 0) {
            result = ''
            this._items.forEach(value => {
                const number = itemCount[value.id]
                let word = this._setWord(number, value)
                result += `${number} ${word}, `
            })
            result = limitStr(result, 23);

        }
        return result
    }
}

function limitStr(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}

new RoomDropdown('.js-room-input', defaultDataRoom)