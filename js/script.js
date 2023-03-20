const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const buttonServices = document.querySelector(".display");
const buttonCloseServices = document.querySelector(".btn-secondaryb");
const hiddenDiv = document.querySelector(".hidden");

console.log(hiddenDiv);


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