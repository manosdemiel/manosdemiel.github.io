// ---------- Variables editables ----------
const titulo = "Catálogoooo";
const numero_de_paginas = 6;
const nombre_de_imagen = "imgp";
const tipo_de_imagen = "jpg";
// -----------------------------------------

const previewer = document.getElementById("previewer");
const viewer = document.getElementById("viewer");
const title = document.getElementById("title");
const viewerInfo = viewer.getBoundingClientRect();

title.innerText = titulo;

title.addEventListener("click", function() {
    console.log(previewer.style.maxWidth)
    if (previewer.style.maxWidth){
      previewer.style.maxWidth = null;
    } else {
      previewer.style.maxWidth = "30%";
    }
});

["touchstart", "click", "scroll"].forEach((event) => {
    viewer.addEventListener(event, () => {
        if (previewer.style.maxWidth) {
            previewer.style.maxWidth = null;
        }
    })
});

const addImage = (id, src, container) => {
    let img = new Image();
    img.src = src;
    // img.style.maxHeight = viewerInfo.height + "px";
    img.id = nombre_de_imagen + id;
    container.appendChild(img);
}

const addPreviewImage = (id, src, container) => {
    let a = document.createElement("a");
    a.href = "#" +  nombre_de_imagen + id;
    a.classList.add("prev-card");

    let img = new Image();
    img.src = src;
    a.appendChild(img);

    let p = document.createElement("p");
    p.innerText = id + 1;
    a.appendChild(p);

    container.appendChild(a);
}


for (let i=0; i<numero_de_paginas; i++) {
    let src = "./paginas/" + nombre_de_imagen + i + "." + tipo_de_imagen;

    addImage(i, src, viewer);

    addPreviewImage(i, src, previewer);
}
