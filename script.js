// ---------- Variables editables ----------
const numero_de_paginas = 23;
const nombre_de_imagen = "";
const tipo_de_imagen = "png";
// -----------------------------------------

const previewer = document.getElementById("previewer");
const previewer_container = document.getElementById("prev-container");
const viewer = document.getElementById("viewer");
const gallery_icon = document.getElementById("gallery");
const viewportInfo = document.getElementById("viewport").getBoundingClientRect();

gallery_icon.addEventListener("click", () => {
    previewer.style.width = "8rem";
    gallery_icon.style.display = "none";
});

const closePreviewer = () => {
    if (previewer.style.width == "8rem") {
        previewer.style.width = null;
        gallery_icon.style.display = "flex";
    }
}

["touchstart", "click"].forEach((event) => {
    viewer.addEventListener(event, closePreviewer);
});

previewer.addEventListener("click", closePreviewer);

// const addImage = (id, src, container) => {
//     let div = document.createElement("div");

//     let img = new Image();
//     img.src = src;
//     // img.style.height = viewportInfo.height + "px";
//     img.id = nombre_de_imagen + id;

//     div.appendChild(img);
//     container.appendChild(div);
// }

const addImage = (id, src, container) => {
    let img = new Image();
    img.src = src;
    img.id = nombre_de_imagen + id;

    // img.style.alignSelf = "center";
    // a = img.width / img.height;
    // iw = viewportInfo.height + "px";
    // ih =  viewportInfo.height * a + "px";
    // img.style.maxHeight = iw;
    // img.style.maxWidth = ih;

    container.appendChild(img);
}

const addPreviewImage = (id, src, container) => {
    let div = document.createElement("div");
    div.classList.add("prev-card");

    let a = document.createElement("a");
    a.href = "#" +  nombre_de_imagen + id;
    a.classList.add("prev-link");

    let img = new Image();
    img.src = src;
    img.classList.add("prev-img");

    a.appendChild(img);
    div.appendChild(a);
    container.appendChild(div);
}


for (let i=1; i<=numero_de_paginas; i++) {
    let src = "./paginas/" + nombre_de_imagen + i + "." + tipo_de_imagen;

    addImage(i, src, viewer);

    addPreviewImage(i, src, previewer_container);
}
