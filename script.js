// ---------- Variables editables ----------
const numero_de_paginas = 6;
const nombre_de_imagen = "imgp";
const tipo_de_imagen = "jpg";
// -----------------------------------------

const previewer = document.getElementById("previewer");
const viewer = document.getElementById("viewer");
const gallery_icon = document.getElementById("gallery");

gallery_icon.addEventListener("click", () => {
    previewer.style.width = "8rem";
    gallery_icon.style.display = "none";
});

["touchstart", "click", "scroll"].forEach((event) => {
    viewer.addEventListener(event, () => {
        if (previewer.style.width == "8rem") {
            previewer.style.width = null;
            gallery_icon.style.display = "flex";
        }
    });
});

// const addImage = (id, src, container) => {
//     let div = document.createElement("div");
//     div.classList.add("img-container");

//     let diva = document.createElement("div");
//     diva.classList.add("img-anchor");
//     diva.id = nombre_de_imagen + id;

//     div.appendChild(diva);

//     let img = new Image();
//     img.src = src;
//     img.style.maxHeight = viewerInfo.height + "px";
//     // img.id = nombre_de_imagen + id;

//     div.appendChild(img);

//     container.appendChild(div);
// }

// const addPreviewImage = (id, src, container) => {
//     let a = document.createElement("a");
//     a.href = "#" +  nombre_de_imagen + id;
//     a.classList.add("prev-card");

//     let img = new Image();
//     img.src = src;
//     a.appendChild(img);

//     let p = document.createElement("p");
//     p.innerText = id + 1;
//     a.appendChild(p);

//     container.appendChild(a);
// }


// for (let i=0; i<numero_de_paginas; i++) {
//     let src = "./paginas/" + nombre_de_imagen + i + "." + tipo_de_imagen;

//     addImage(i, src, viewer);

//     addPreviewImage(i, src, previewer);
// }
