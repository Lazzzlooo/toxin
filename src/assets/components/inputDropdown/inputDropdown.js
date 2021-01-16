const inputDropdown = document.querySelector('.inputDropdown')
const input = inputDropdown.querySelector('#inputDropdown');

class Container {
    constructor(selector) {
        this.$el = inputDropdown.querySelector(selector);
        this.title = this.$el.dataset.title
        this.$btnPlus = this.$el.querySelector('#plus');
        this.$btnMinus = this.$el.querySelector('#minus');
        this.$input = this.$el.querySelector('[data-attribute="input-count"]')
        this.value = this.$input.value
    }

    handleButtonPlusClick() {
        this.value++;
        this.$btnMinus.disabled = false;
        this.$input.value = this.value.toString();
    }

    handleButtonMinusClick() {
        this.value--;
        if (this.value <= 0) {
            this.$btnMinus.disabled = true
        }
        return this.$input.value = this.value.toString()
    }
}

const roomList = ['спальни', 'кровати', 'ванные комнаты']
const roomsContainer = roomList.map(room => {
    room = new Container(`[data-title="${room}"]`)
    initListener(room)
    return room
})

function initListener(container) {
    container.$btnPlus.addEventListener('click', () => {
        container.handleButtonPlusClick();
        input.value = limitStr(`${roomsContainer[0].value} ${roomsContainer[0].title}, ${roomsContainer[1].value} ${roomsContainer[1].title}, ${roomsContainer[2].value} ${roomsContainer[2].title}`, 23)
    })
    container.$btnMinus.addEventListener('click', () => {
        container.handleButtonMinusClick();
        input.value = limitStr(`${roomsContainer[0].value} ${roomsContainer[0].title}, ${roomsContainer[1].value} ${roomsContainer[1].title}, ${roomsContainer[2].value} ${roomsContainer[2].title}`, 23)
    })
}


function limitStr(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}

