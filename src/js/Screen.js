const left = document.querySelector('.left');
const numberOfFlowers = 20;

function createFlowers() {
    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('background-flower');

        flower.style.top = `${Math.random() * 90}%`;
        flower.style.left = `${Math.random() * 90}%`;

        flower.style.animationDelay = `${Math.random() * 3}s`;

        left.appendChild(flower);
    }
}

createFlowers();


// popUp open function
function popUp(src) {
    document.getElementById("popUp-img").src = src;
    document.getElementsByClassName("popUp-content")[0].style.display = "flex";
}

// popUp Close function
function closePopup() {
    document.getElementsByClassName("popUp-content")[0].style.display = "none";
}

// img reduction function
const totalImage = 9;
const images = Array.from({ length: totalImage }, (_, index) => `food${index + 1}.jpg`);

const imgListContainer = document.querySelector('.imgList');

// 이미지 리스트에 각 이미지를 추가
images.forEach((image) => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-hover');

    const img = document.createElement('img');
    img.src = "/src/image/" + image;
    img.alt = "japan food";
    img.onclick = () => popUp(image);

    imgDiv.appendChild(img);  // imgDiv에 img를 추가

});
