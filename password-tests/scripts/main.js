const secretButton = document.querySelector("h1");
let versionString = document.querySelector("h2");
const swatch = document.querySelector("img");
let textString = document.querySelector("p");
let bg = document.querySelector("html");

secretButton.onclick = () => {
    versionCode();
}

swatch.onclick = () => {
    const crntImg = swatch.getAttribute("src")
    if(localStorage.vCode === "december" && crntImg === "images/food.png") {
        swatch.setAttribute("src", "images/betterfood.png");
        textString.textContent = "Welcome to the show";
        bg.style.backgroundColor = 'red';
    } else if(crntImg === "images/betterfood.png") {
        swatch.setAttribute("src", "images/food.png");
        textString.textContent = "The menu is empty.."
        bg.style.backgroundColor = '#88bebc';
    }
}

function versionCode () {
    const v = prompt("What is the current version")
    if (!v) {
        versionCode ();
    } else {
        localStorage.setItem("vCode", v);
        versionString.textContent = `Menu is version ${v}`;
    }
}

if(!localStorage.getItem("vCode")) {

} else {
    const storedVersion = localStorage.getItem("vCode");
    versionString.textContent = `Menu is version ${storedVersion}`
}
