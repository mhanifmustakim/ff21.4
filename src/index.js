import { changeHeaderImg } from "./changeImage";
import { getObject, checkForCode } from "./ContentManager";
import { renderContent } from './DisplayMaster';

setInterval(changeHeaderImg, 2000);

const form = document.querySelector("#special-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target[0].value;
    if (checkForCode(input)) {
        const content = getObject(input);
        renderContent(content);
    } else {
        alert("Oops! salah la, cuba lagi :)")
    }
    e.target[0].value = "";
})
