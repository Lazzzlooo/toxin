import 'paginationjs'

function simpleTemplating(data) {
    let html = '<ul>';
    $.each(data, function (index, item) {
        html += '<li>' + item + '</li>';
    });
    html += '</ul>';
    return html;
}

$('#pagination-container').pagination({
    dataSource: function (done) {
        let result = [];
        for (let i = 1; i <= 195; i++) {
            result.push(i);
        }
        done(result);
    },
    pageRange: 1,
    pageSize: 12,
    autoHidePrevious: true,
    autoHideNext: true,
    className: "pagination",
    classPrefix: "pagination",
    ulClassName: "pagination__list",
    prevText: `<span class="material-icons">arrow_back</span>`,
    nextText: `<span class="material-icons">arrow_forward</span>`,
    callback: function (data, pagination) {
        let html = simpleTemplating(data);
        $('#data-container').html(html);
    },
    footer: function (currentPage, totalPage, totalNumber) {
        let pageSize = Math.ceil(totalNumber / totalPage)
        let secondNum = pageSize * currentPage;
        secondNum >= totalNumber ? secondNum = totalNumber : secondNum;
        let firstNum = 1
        if (currentPage > 1) {
            firstNum = 1 + pageSize * (currentPage - 1)
        }
        let html = `${firstNum} – ${secondNum} из ${totalNumber} вариантов аренды`
        $('#pagination-footer').html(html)
    }
})