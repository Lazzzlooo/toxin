import {itemContainer} from "./common";

const roomList = ['спальни', 'кровати', 'ванные комнаты']
const guestList = ['взрослые', 'дети', 'младенцы']

function initListener(list, selector, id, outputText) {
    const nodeList = document.querySelector(selector)
    if (nodeList) {
        const input = nodeList.querySelector(id)
        return itemContainer(list, input, nodeList, outputText)
    }
    return undefined
}

initListener(roomList, '.room', '#room', 'string')
initListener(guestList, '.guest', '#guest', 'string')
