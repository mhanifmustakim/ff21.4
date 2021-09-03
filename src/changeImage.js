const headerImg = document.querySelector("#header-img");
const images = [
    "ori.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
]
let counter = 0;
function changeHeaderImg() {
    if (counter == images.length - 1) {
        counter = 0;
    } else {
        counter += 1;
    }
    headerImg.src = "Assets/" + images[counter];
}

export default changeHeaderImg;
setInterval(changeHeaderImg, 2000);