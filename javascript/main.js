const userProfile = document.querySelector('.user-profile');
const popupMenu = document.querySelector('.popup-menu');
const searchIcon = document.querySelector('.fa-search');
const searchBox = document.querySelector('.header__nav-input');
const navButton = document.querySelector('.nav-responsive');
const navMenu = document.querySelector('.nav-responsive-pages');

console.log(searchIcon)

searchIcon.addEventListener('click', ()=> {
    searchBox.classList.toggle('active');
})

userProfile.addEventListener('mouseover', ()=> {
    popupMenu.classList.toggle('teste');
})

navButton.addEventListener('mouseover', ()=> {
    navMenu.classList.toggle('active')    
})








