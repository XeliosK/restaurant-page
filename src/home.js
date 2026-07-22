export { printHome };

const divId = [
    "name",
    "description",
    "hours",
    "address"
]

const divTitles = [
    "Ordinary Italian Restaurant",
    "",
    "Hours",
    "Address"
]

const divBody = [
    "",
    "We make the most ordinary italian food. Ordinary but good. Exactly what you're looking for!",
    "",
    "1234 NE 123RD ST, XX, XX, 123456"
]

function printShifts() {
    const queryHours = document.querySelector("#hours");

    const shifts = [
        "Monday: 8am - 10pm",
        "Tuesday: 8am - 10pm",
        "Wednesday: 8am - 10pm",
        "Thursday: 8am - 10pm",
        "Friday: 8am - 10pm",
        "Saturday: 8am - 10pm",
        "Sunday: 8am - 6pm"
    ]

    for (let i = 0; i < shifts.length; i++) {
        const makeShift = document.createElement("p");
        makeShift.id = "shift";
        makeShift.textContent = shifts[i];
        queryHours.appendChild(makeShift);
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

function printHome () {
    const container = document.querySelector("#content");

    for (let j = 0; j < divId.length; j++) {
        const makeSection = document.createElement("div");
        makeSection.id = divId[j];
        container.appendChild(makeSection);
    }

    printTitles();
    printBodies();
    printShifts();
}
