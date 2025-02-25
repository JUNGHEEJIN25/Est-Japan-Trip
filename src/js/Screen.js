// flower animation function
const left = document.querySelector('.left');

const numberOfFlowers = 20;

function createFlowers() {
    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('background-flower');

        // 랜덤 위치 설정
        flower.style.top = `${Math.random() * 90}%`;
        flower.style.left = `${Math.random() * 90}%`;

        // 랜덤 애니메이션 딜레이 추가
        flower.style.animationDelay = `${Math.random() * 3}s`;

        left.appendChild(flower);
    }
}

createFlowers();  // 꽃 생성 함수 호출

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
const images = Array.from({length: totalImage}, (_, index) => `food${index + 1}. jpg`);
console.log(images);

const imgListContainer = document.querySelector('.imgList');

images.forEach((image) => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-hover');

    const img = document.createElement('img');
    img.src = image;
    img.alt = "japan food";
    img.onclick = () => popUp(image);

    imgDiv = appendChild(img);
    imgListContainer.appendChild('imgDiv');
});