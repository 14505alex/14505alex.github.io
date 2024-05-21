/* Welcome to JavaScript, if you don't know what you're doing, the coding done in code.org is all done with a JS proxy, but very old
End every commands with ";", otherwise you will cry during debugging(trust me)
*/

/* Declaring variables, my favorite. I'll explain all variable types real quick
"const" - This value cannot be changed in any way(useful for saying "This is a button, and it always will be"
"let" - This value can openly be changed, I recommend using this one for any changeable variable
"var" - This is basically "let", but this is the only one to exist in Code.org(old JS version)

Now onto explaining that querySelector, first off, in HTML/webdev, your scripts aren't stupid, they can understand that "document" refers to an html file
Once you declare that you use the built in function "querySelector", word to the wise, don't put all your elements in one type of query, use div tags
The querySelector will scrape the HTML file for any instances of the provided tag, in this case "img"
*/
const cupCoffee = document.querySelector("img");

/* Shortening functions is a good practice, this "() => {}" is just a very quick shortcut for declaring an unnamed function
.onClick is a function built in to any querySelector item, be careful if you set it to HTML, you will not enjoy debugging
If statements are fun, "===" is the same as "==" in practice, but it basically just translates to "absolutely equals"
setAttribute is another built in function on queries, the unique part of this is that it effects the tags inside of each element, so for this one it hunts the "src" tag
setAttribute uses the params ([TAG], [NEW STATE]), in this example it uses file paths
*/
cupCoffee.onclick = () => {
    const mySrc = cupCoffee.getAttribute("src");
    if (mySrc === "images/coffee.png") {
        cupCoffee.setAttribute("src", "images/coffee2.png");
    } else {
        cupCoffee.setAttribute("src", "images/coffee.png")
    }
};

// "let" statements, unlike me I recommend declaring all variables at the top
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* This is a named function
The magic of named functions is that they can be called in your code again, I recommend using camelCase to name them
Params needed for the function sit in the () at the beginning, ask the teacher for more info abt setting params :)
Using const with a built in command, "prompt" is kind of like "console.log" but it gives a window prompt, then it will set the const to that value
This is one of the few instances where you change a const
localStorage, one of the fun ones, is how you locally store(duh) someone's information on their client, this does not send anything back to the host
localStorage is a fun concept, check the mozilla docs for all the params, I use setItem and getItem, which just modifies a few simple values
.textContext is a fun one, it modifies the text existing there
*/
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
