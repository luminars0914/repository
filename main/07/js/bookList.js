const title = document.querySelector('#title');
const author = document.querySelector('#author');
const save = document.querySelector('#save');
const bookList = document.querySelector('#bookList');
save.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `
    ${title.value} - ${author.value}
    <span class="delButton">삭제</span>
    `;
    bookList.appendChild(li);

    title.value = '';
    author.value = '';

    const delButtons = document.querySelectorAll(".delButton");
    for (let delButton of delButtons) {
        delButton.addEventListener('click', function () {
            this.parentNode.remove(this);
        });
    }
});
