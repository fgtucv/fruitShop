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
    }).catch(error => ("Error:", error))

    getFruitsApi().then((data) => {
        createMarkup(data)
    })
}