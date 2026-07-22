import { printHome } from "./home.js";
import { printMenu } from "./menu.js";
import { printContact } from "./contact.js";
import "./style.css"

const container = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");


homeButton.addEventListener("click", function () {
    const content = document.querySelector("#content");
    const containerChildren = [...content.children];
    containerChildren.forEach(el => el.remove());

    printHome();
})

menuButton.addEventListener("click", function () {
    const content = document.querySelector("#content");
    const containerChildren = [...content.children];
    containerChildren.forEach(el => el.remove());

    printMenu();
})

contactButton.addEventListener("click", function () {
    const content = document.querySelector("#content");
    const containerChildren = [...content.children];
    containerChildren.forEach(el => el.remove());

    printContact();
})