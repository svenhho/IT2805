var modalRoot = document.querySelector(".modal-root")
var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modal-content");
Array.from(document.querySelectorAll(".img")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});
document.querySelector(".modal-root").addEventListener("click", () => {
   modalEle.style.display = "none";
});

modalImage.addEventListener('click', modalClick);

function modalClick(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}
