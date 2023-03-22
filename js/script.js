// navbar hamburguer
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Services button
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


// Gallery button
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

// Gallery functions

const images = [...document.querySelectorAll('.image')];
//  popup
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const arrowRight = document.querySelector('.right-arrow');
const arrowLeft = document.querySelector('.left-arrow');

let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
        

    })
})

const updateImage = (i) => {
    let path = `img/job${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = `Our job #${i+1}`;
    index = i;

}


closeButton.addEventListener("click", () => {
    popup.classList.toggle('active');

})


arrowLeft.addEventListener("click", () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

arrowRight.addEventListener("click", () => {
    if(index < images.length -1){
        updateImage(index + 1);
    }
})