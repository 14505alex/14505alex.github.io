const cupCoffee = document.querySelector("img");

cupCoffee.onclick = () => {
    const mySrc = cupCoffee.getAttribute("src");
    if (mySrc === "images/coffee.png") {
        cupCoffee.setAttribute("src", "images/coffee2.png");
    } else {
        cupCoffee.setAttribute("src", "images/coffee.png")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Coffee is great, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Coffee is great, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};