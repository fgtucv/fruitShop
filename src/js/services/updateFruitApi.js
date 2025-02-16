import { getFruitsApi } from "./getFruitApi.js"
import { createMarkup } from "../fruitOperation/createMarkup.js";

export const updateFruitApi = function (obj, elementId) {
    console.log(elementId)

  const options = {
    method: "PATCH",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  console.log(options)

  fetch(
    `https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products/${elementId}`, options).then((data) => {return data.json();}); //.then(() => getFruitsApi()).then((data) => createMarkup(data))
};
