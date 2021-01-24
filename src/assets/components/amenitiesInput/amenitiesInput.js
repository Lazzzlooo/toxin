import {itemContainer} from "./common";

const roomList = ['спальни', 'кровати', 'ванные комнаты']
const guestList = ['взрослые', 'дети', 'младенцы']

function initListener(list, selector, id, outputText) {
    document.querySelectorAll(selector).forEach(el => {
        if (el) {
            const input = el.querySelector(id)
            return itemContainer(list, input, el, outputText)
        }
    })
}

    initListener(roomList, '.room', '#room', 'string')


    initListener(guestList, '.guest', '#guest', 'string')