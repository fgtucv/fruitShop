import { deleteFruitApi } from "../services/deletFruitApi.js";
import { getFruitsApi } from "../services/getFruitApi.js";
import { createMarkup } from "./createMarkup.js"

export const deletFruit = function(event){

    const element = event.target.parentNode;

    const elementId = element.id

    if(event.target.classList.contains('openUpdateButton')){
        return;
    }

    deleteFruitApi(elementId).then((data) => {
    })
    // .catch(error => ("Error:", error)) тепер ми відловлюємо помилку в конструкції try

    getFruitsApi().then((data) => {
        createMarkup(data)
    })
    // .catch(error => ("Error:", error)) тепер ми відловлюємо помилку в конструкції try
}