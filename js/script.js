var btnHotelsPopup=document.querySelector("#btn-hotels-popup");
var popup = document.querySelector(".form-hotels");
var arrival=document.querySelector("[name=arrival]");

btnHotelsPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-hide")) {
    popup.classList.remove("modal-hide");
    arrival.focus();
  }
  else {
    popup.classList.add("modal-hide");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("modal-hide")) {
      evt.preventDefault();
      popup.classList.add("modal-hide");
    }
  }
});