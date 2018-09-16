var btnHotelsPopup=document.querySelector("#btn-hotels-popup");
var popup = document.querySelector(".form-hotels");

btnHotelsPopup.addEventListener("click", function(evt){
  evt.preventDefault();
  if(popup.classList.contains("modal-hide")) popup.classList.remove("modal-hide");
  else popup.classList.add("modal-hide");
});