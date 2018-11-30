let btntout = document.getElementById("filtre-portfolio-all");
let btndev = document.getElementById("filtre-portfolio-dev");
let btnfonda = document.getElementById("filtre-portfolio-fonda");

let dev = document.getElementById("colcarre1");
let fonda = document.getElementById("colcarre2");
let ftg = document.getElementById("tg");
let ftg2 = document.getElementById("tg2");

btntout.addEventListener("click", () => {
    dev.classList.remove("d-none");
    fonda.classList.remove("d-none");
    ftg.classList.remove("d-none");
    ftg2.classList.remove("d-none");
});

btndev.addEventListener("click", () => {
    dev.classList.remove("d-none");
    fonda.classList.add("d-none");
    ftg.classList.add("d-none");
    ftg2.classList.add("d-none");
});

btnfonda.addEventListener("click", () => {
    dev.classList.add("d-none");
    fonda.classList.remove("d-none");
    ftg.classList.add("d-none");
    ftg2.classList.add("d-none");
});