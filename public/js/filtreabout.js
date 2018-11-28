let btnall = document.getElementById("filtre-about-all");
let btnlanguage = document.getElementById("filtre-about-language");
let btndesign = document.getElementById("filtre-about-design");

let lang = document.getElementById("language");
let des = document.getElementById("design");

btnall.addEventListener("click", () => {
    lang.classList.remove("d-none");
    des.classList.remove("d-none");
});

btnlanguage.addEventListener("click", () => {
    lang.classList.remove("d-none");
    des.classList.add("d-none");
});

btndesign.addEventListener("click", () => {
    lang.classList.add("d-none");
    des.classList.remove("d-none");
});