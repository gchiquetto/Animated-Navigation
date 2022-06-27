const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');
const listItem = document.querySelectorAll('.nav__link');

btn.addEventListener('click', e => {
    nav.classList.toggle('nav--active', !nav.classList.contains('nav--active'));
    //list.classList.toggle('hidden', !list.classList.contains('hidden'));
    // btn.classList.toggle('btn--active', !btn.classList.contains('btn--active'));
    // listItem.forEach(item => {
    //     //item.classList.toggle('hidden', !item.classList.contains('hidden'));
    //     item.classList.toggle('nav__link--active', !item.classList.contains('nav__link--active'));
    // });
});