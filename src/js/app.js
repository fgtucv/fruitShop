import { getFruits } from "./services/getFruitApi.js";
import { createMarkup } from "./createMarkup.js";
import { addFruitApi } from "./services/addFruitApi.js";
import { closeModal } from "./modal.js";

getFruits().then((data) => {
    createMarkup(data)
});

