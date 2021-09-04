function renderContent(contentObject) {
    const main = document.querySelector("#main-content");
    main.innerHTML = "";
    if (contentObject.link) {
        main.innerHTML += `<div class="yt-vid"><iframe src="https://www.youtube.com/embed/${contentObject.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    }
    if (contentObject.url) {
        main.innerHTML += `<video width="320" height="240" autoplay><source src="${contentObject.url}" type="video/mp4">Your browser does not support the video tag.</video>`;
    }
    if (contentObject.image) {
        main.innerHTML += `<img class="content-img" src="${contentObject.image}">`
    }
    main.innerHTML += `<div class="desc">${contentObject.desc}</div>`;
}

export { renderContent }