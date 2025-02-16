import { updateFruitApi } from "../services/updateFruitApi";

const modal = document.querySelector(".updateModal");

export const closeModal = function(event, newInfo) {
    event.preventDefault()
    modal.classList.add("is-hidden");

    updateFruitApi(newInfo, newInfo.id);
};