const previewer = document.getElementById("previewer");
const title = document.getElementById("title");

title.addEventListener("click", function() {
    if (previewer.style.maxWidth){
      previewer.style.maxWidth = null;
    } else {
      previewer.style.maxWidth = 100 + "px";
    }
  });