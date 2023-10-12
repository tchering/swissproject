const hamburger = document.querySelector(".btn-hamburger");
const navigation =document.querySelector(".nav");
const content =document.querySelector(".card");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    content.classList.toggle("hide");
})