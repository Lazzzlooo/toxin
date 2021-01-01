(function () {
    document.querySelectorAll('[data-attribute="button"]').forEach(el => {
        el.addEventListener('click', function (e) {
            e.target.closest('[data-attribute="dropdown"]').classList.toggle('opened')
        }, true)
    })
})();