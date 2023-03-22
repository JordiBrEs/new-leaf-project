const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

const buttonServices = document.querySelector(".display");
const buttonCloseServices = document.querySelector(".btn-secondaryb");
const hiddenDiv = document.querySelector(".hidden");




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

const buttonGallery = document.querySelector(".display2");
const buttonShowLessGallery = document.querySelector(".btn-secondaryc");
const hiddenDiv2 = document.querySelector(".hidden2");

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