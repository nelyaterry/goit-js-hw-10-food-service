import dishCardTpl from './templates/foodCards.hbs';
import dishes from './menu.json';


const foodMenu = document.querySelector('.menu');
const inputElem = document.querySelector('input');
const bodyElem = document.querySelector('body');

const colorTheme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// Add templates
const markup = dishCardTpl(dishes);
foodMenu.insertAdjacentHTML('beforeend', markup);

// Change theme

function changeTheme(event) {
    const checked = event.currentTarget.checked;
        
    if (checked) {
        changeClass(colorTheme.LIGHT, colorTheme.DARK);
    } else if (!checked) {
        changeClass(colorTheme.DARK, colorTheme.LIGHT);        
    }
    
    localStorage.setItem('check-position', checked);
};

function changeClass (remove, add) {
    bodyElem.classList.remove(remove);
    bodyElem.classList.add(add);
};

function getStorageTheme() {
    let savedTheme = localStorage.getItem('check-position');

    if (savedTheme && savedTheme === 'true') {
        inputElem.checked = true;
        bodyElem.classList.add(colorTheme.DARK);
    }
};

getStorageTheme();

inputElem.addEventListener('change', changeTheme);