export { printContact };

const divId = [
    "name",
    "owner",
    "chef",
    "front"
]

const divTitles = [
    "Contact Us",
    "Owner",
    "Chef",
    "Front"
]

const divBody = [
    "",
    "P: 777-777-7777 / E: owner@restaurant.com",
    "P: 888-888-8888 / E: chef@restaurant.com",
    "P: 999-999-9999 / E: front@restaurant.com",
]

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

function printContact() {
    const container = document.querySelector("#content");

    for (let j = 0; j < divId.length; j++) {
        const makeSection = document.createElement("div");
        makeSection.id = divId[j];
        container.appendChild(makeSection);
    }

    printTitles();
    printBodies();
}