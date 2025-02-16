import { getFruitsApi } from "../services/getFruitApi";
import { createMarkup } from "./createMarkup.js";
// import { deleteFruitApi } from "./services/deletFruitApi.js";
// import { closeModal } from "./addModal.js";
import { deletFruit } from "./deletFruit.js";
import { openModal } from "../modals/openEditModal.js"

export const getFruit = (page) => {
    getFruitsApi(page).then((data) => {
        createMarkup(data)
    
        const deletButton = document.querySelector(".list");
        deletButton.addEventListener("click", deletFruit);
    
        const list = document.querySelector(".list");
        list.addEventListener("click", openModal);
    });
}