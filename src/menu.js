export { printMenu };

const divId = [
    "name",
    "beverages",
    "sides",
    "maindishes"
]

const divTitles = [
    "Menu",
    "Beverages",
    "Sides",
    "Main Dishes"
]

const divBody = [
    "",
    "",
    "",
    ""
]

const beverages = [
    "Coca-Cola",
    "Sprite",
    "Iced Tea",
    "Sweet Tea",
    "Water",
    "Lemonade",
]

const sides = [
    "Moz Sticks",
    "Garlic Rolls",
    "Salad",
]

const mainDishes = [
    "Spaghetti",
    "Lasagna",
    "Ravioli",
    "Chicken Alfredo",
    "Fettuccine Alfredo",
    "Baked Ziti",
    "Pizza",
]


function printBeverages() {
    const queryHours = document.querySelector("#beverages");

    for (let i = 0; i < beverages.length; i++) {
        const makeBev = document.createElement("p");
        makeBev.id = "beverage";
        makeBev.textContent = beverages[i];
        queryHours.appendChild(makeBev);
    }
}

function printSides() {
    const queryHours = document.querySelector("#sides");

    for (let i = 0; i < sides.length; i++) {
        const makeSide = document.createElement("p");
        makeSide.id = "beverage";
        makeSide.textContent = sides[i];
        queryHours.appendChild(makeSide);
    }
}

function printMainDishes() {
    const queryHours = document.querySelector("#maindishes");

    for (let i = 0; i < mainDishes.length; i++) {
        const makeDish = document.createElement("p");
        makeDish.id = "beverage";
        makeDish.textContent = mainDishes[i];
        queryHours.appendChild(makeDish);
    }
}


function printTitles() {
    for (let k = 0; k < divTitles.length; k++) {
        if (divTitles[k] === "") continue;

        let container = document.querySelector(`#${divId[k]}`);
        let title = document.createElement("div");
        title.className = "title"
        title.textContent = divTitles[k];
        container.appendChild(title);
    }
}

function printBodies() {

    for (let b = 0; b < divBody.length; b++) {
        if (divBody[b] === "") continue;

        let container = document.querySelector(`#${divId[b]}`);
        let body = document.createElement("div");
        body.className = "body";
        body.textContent = divBody[b];
        container.appendChild(body);
    }
}

function printMenu() {
    const container = document.querySelector("#content");

    for (let j = 0; j < divId.length; j++) {
        const makeSection = document.createElement("div");
        makeSection.id = divId[j];
        container.appendChild(makeSection);
    }

    printTitles();
    printBodies();
    printBeverages();
    printMainDishes();
    printSides();
}