import { getFruit } from "./fruitOperation/getFruits.js"

const button = document.querySelector(".moreFruit");

let page = 1;

button.addEventListener("click", () => {
    page += 1;

    getFruit(page);
})

getFruit(page);