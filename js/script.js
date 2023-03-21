const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const buttonServices = document.querySelector(".display");
const buttonCloseServices = document.querySelector(".btn-secondaryb");
const hiddenDiv = document.querySelector(".hidden");

const buttonGallery = document.querySelector(".display2");
const buttonShowLessGallery = document.querySelector(".btn-secondaryc");
const hiddenDiv2 = document.querySelector(".hidden2");




toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

buttonServices.addEventListener("click", function(){
    hiddenDiv.classList.add("show-hidden");
    buttonServices.classList.add("hide");
    buttonCloseServices.classList.add("show");

})

buttonCloseServices.addEventListener("click", function(){
    hiddenDiv.classList.remove("show-hidden");
    buttonServices.classList.remove("hide");
    buttonCloseServices.classList.remove("show");

})

buttonGallery.addEventListener("click", function(){
    hiddenDiv2.classList.add("show-hidden");
    buttonGallery.classList.add("hide");
    buttonShowLessGallery.classList.add("show");

})

buttonShowLessGallery.addEventListener("click", function(){
    hiddenDiv2.classList.remove("show-hidden");
    buttonGallery.classList.remove("hide");
    buttonShowLessGallery.classList.remove("show");
})