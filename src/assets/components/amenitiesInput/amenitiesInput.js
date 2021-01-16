import {itemContainer} from "../../js/common";

const roomList = ['спальни', 'кровати', 'ванные комнаты']
const room = document.querySelector('.room')
const roomInput = room.querySelector('#room');


const guestList = ['взрослые', 'дети', 'младенцы']
const guest = document.querySelector('.guest')
const guestInput = guest.querySelector('#guest');

itemContainer(roomList, roomInput, room,  'string')
itemContainer(guestList, guestInput, guest,  'string')