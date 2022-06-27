const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');
const listItem = document.querySelectorAll('.nav__link');

btn.addEventListener('click', e => {
    nav.classList.toggle('nav--hidden', !nav.classList.contains('nav--hidden'));
    //list.classList.toggle('hidden', !list.classList.contains('hidden'));
    btn.classList.toggle('btn--hidden', !btn.classList.contains('btn--hidden'));
    listItem.forEach(item => {
        //item.classList.toggle('hidden', !item.classList.contains('hidden'));
        item.classList.toggle('nav__link--hidden', !item.classList.contains('nav__link--hidden'));
    });
});