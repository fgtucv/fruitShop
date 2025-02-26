import { updateFruitApi } from "../services/updateFruitApi";
import { getFruit } from "../fruitOperation/getFruits.js"

const modal = document.querySelector(".updateModal");

export const closeModal = async(event, newInfo) => {
    event.preventDefault()

    await updateFruitApi(newInfo, newInfo.id);
    await getFruit()

    modal.classList.add("is-hidden");
};