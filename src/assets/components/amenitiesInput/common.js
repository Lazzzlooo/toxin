function addedContainerClass(inputSelector, selector) {
    class Container {
        constructor(selector) {
            this.$el = inputSelector.querySelector(selector);
            this.title = this.$el.dataset.title
            this.$btnPlus = this.$el.querySelector('[data-button="plus"]');
            this.$btnMinus = this.$el.querySelector('[data-button="minus"]');
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

    return new Container(selector)
}

function initListener(container, input, outputText) {
    container.$btnPlus.addEventListener('click', () => {
        container.handleButtonPlusClick();
        input.value = limitStr(outputText, 23)
    })
    container.$btnMinus.addEventListener('click', () => {
        container.handleButtonMinusClick();
        input.value = limitStr(outputText, 23)
    })
}

function limitStr(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}

export function itemContainer(list, input, inputSelector, outputText) {
    list.map((item => {
        item = addedContainerClass(inputSelector, `[data-title="${item}"]`)
        initListener(item, input, outputText)
        return item
    }))
    return list

}

