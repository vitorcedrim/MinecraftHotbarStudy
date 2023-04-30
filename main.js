let scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    countUp();
  } else {
    countDown();
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

let slots = document.querySelectorAll(".slot")

// Contador de Scroll nos slots 1-9 (0-8)

let currentSlot = 0

function countUp() {
    if (currentSlot == 0) {
        currentSlot = 8
    } else {
        currentSlot = currentSlot - 1;
    }
    updateStyles();
}

function countDown() {
    if (currentSlot == 8) {
        currentSlot = 0
    } else {
        currentSlot = currentSlot + 1;
    }
    updateStyles();
}

// Atualizar o estilo dos slots

function updateStyles() {
    for (slot of slots) {
        slot.classList.remove("selectedSlot");
    }
    document.querySelectorAll(".slot")[currentSlot].classList.add("selectedSlot");
}

updateStyles();

//Troca de slot com o teclado numérico

document.onkeydown = function (e) {
    e = e || window.event;
    let keyCode = e.code;
    
    switch(keyCode) {
        case "Digit1":
            currentSlot = 0
            updateStyles();
            break;
        case "Digit2":
            currentSlot = 1
            updateStyles();
            break;
        case "Digit3":
            currentSlot = 2
            updateStyles();
            break;
        case "Digit4":
            currentSlot = 3
            updateStyles();
            break;
        case "Digit5":
            currentSlot = 4
            updateStyles();
            break;
        case "Digit6":
            currentSlot = 5
            updateStyles();
            break;
        case "Digit7":
            currentSlot = 6
            updateStyles();
            break;
        case "Digit8":
            currentSlot = 7
            updateStyles();
            break;
        case "Digit9":
            currentSlot = 8
            updateStyles();
            break;
        case "KeyQ":
            dropItem();
            break;
        case "KeyE":
            pickItem();
            break;
    }
}

// Dropa o item do slot atual

function dropItem() {
    let itemCount = parseInt(slots[currentSlot].querySelector(".count").innerText) || 0

    if (itemCount >= 2) {
        itemCount = itemCount - 1;
        slots[currentSlot].querySelector(".count").innerText = itemCount;
    } else {
        console.log("Slot vazio.");
        slots[currentSlot].querySelector(".count").innerText = "";
        slots[currentSlot].querySelector(".item").setAttribute("src", "");
    }
}

function pickItem() {
    let itemCount;
    
    if (slots[currentSlot].querySelector(".count").innerText == "") {
        itemCount = 0
    } else {
        itemCount = parseInt(slots[currentSlot].querySelector(".count").innerText)
    }

    if (itemCount < 64) {
        itemCount = parseInt(itemCount + 1);
        slots[currentSlot].querySelector(".count").innerText = itemCount;
        slots[currentSlot].querySelector(".item").setAttribute("src", "src/stone.png");
        console.log(itemCount)
    } else {
        console.log("Slot cheio.");
        slots[currentSlot].querySelector(".count").innerText = itemCount;
        slots[currentSlot].querySelector(".item").setAttribute("src", "src/stone.png");
    }
}