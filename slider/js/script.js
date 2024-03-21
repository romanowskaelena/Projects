// слайдер 

let imageCount = 1; // Начинаем с первого изображения

let totalImages = 5; // Общее количество изображений

let currentImg = document.querySelector(".gallery img");

function next() {
    imageCount++;

    if (imageCount > totalImages) {
        imageCount = 1; // Если достигнут предел, переход к первому изображению
    }
   
    currentImg.src = `./images/${imageCount}.jpg`;
}

function prev() {
    imageCount--;

    if (imageCount < 1) {
        imageCount = totalImages; // Если достигнуто первое изображение, переход к последнему
    }
   
    currentImg.src = `./images/${imageCount}.jpg`;
}

