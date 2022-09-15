console.log(1);
let el = document.getElementsByClassName('header__menu__link');
let url = document.location.href;
console.log(2);
for (var i = 0; i < el.length; i++) {
    if (url == el[i].href) {
        el[i].className += ' is-active';
    };
}