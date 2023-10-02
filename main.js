// ex 1

// const gallery = document.querySelector(".gallery");
// const images = document.querySelectorAll(".image");
// let number = document.querySelector('.number');

// let currentIndex = 0;

// document.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowLeft") {
//         showImage(currentIndex - 1);
//     } else if (e.key === "ArrowRight") {
//         showImage(currentIndex + 1);
//     }
// });

// function showImage(index) {
//     if (index < 0) {
//         index = images.length - 1;
//     } else if (index >= images.length) {
//         index = 0;
//     }



//     currentIndex = index;
//     number.textContent = currentIndex
//     images.forEach((image, i) => {
//         if (i === index) {
//             image.style.display = "block";
//         } else {
//             image.style.display = "none";
//         }
//     });
// }

// showImage(currentIndex);




// ex 2


let inpt = document.querySelector('.number');
let btnCreate = document.querySelector('.button-create');
let btnDestroy = document.querySelector('.button-destroy');
let boxes = document.querySelector('.boxes');



btnCreate.addEventListener('click', () => {
    const amount = parseInt(inpt.value);
    createBoxes(amount)
})



function createBoxes(amount){
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomColor();
        boxes.appendChild(box);
    }
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

btnDestroy.addEventListener('click', () => {
    destroyBoxes();
});