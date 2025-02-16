import { closeModal } from "./closeEditModal.js"
const form = document.querySelector(".updateForm");
const modal = document.querySelector(".updateModal");

export const openModal = function openModal(event) {
    const element = event.target.parentNode;

    const id = element.id 
    console.log(element.id)

    if(event.target.classList.contains('delet')){
        return;
    }

    modal.classList.remove("is-hidden");

    form.addEventListener("submit", (event) => {
        const postToUpdate = {
            title: event.target.elements.updateNameInput.value,
            photo: event.target.elements.updatePhotoInput.value,
            price: event.target.elements.updatePriceInput.value,
            id: Number(id),
        }
        closeModal(event, postToUpdate);
    });

}