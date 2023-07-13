const card = document.querySelector("#sobre");
const modalButton = document.querySelector('.modal-overlay')

function handleOpenModal() {
document.querySelector(".modal").classList.add("modal--open");
document.querySelector(".modal-overlay").classList.add("modal-overlay--show");
}
function handleCloseModal() {
document.querySelector(".modal").classList.remove("modal--open");
document.querySelector(".modal-overlay").classList.remove("modal-overlay--show");
}

card.addEventListener("click", handleOpenModal);
modalButton.addEventListener("click", handleCloseModal);



