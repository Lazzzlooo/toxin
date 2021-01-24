const buttons = document.querySelectorAll('[data-attribute="like"]').forEach(button => {
    button.onclick = function (e) {
        const liked = e.target.closest('[data-attribute="like"]').classList.toggle('liked')
        let count = 10;
        if (liked) {
            count += 1;
        } else {
            count;
        }
        button.querySelector('p').innerHTML = count.toString();
    }
})
