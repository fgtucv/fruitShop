import { addFruitApi } from "./services/addFruitApi.js";

const openButton = document.querySelector(".openButton");
const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
// const name = document.querySelector(".nameInput");
// const price = document.querySelector(".priceInput");
// const photo = document.querySelector(".photoInput");

openButton.addEventListener("click", openModal);
form.addEventListener("submit", closeModal);

function openModal() {
    modal.classList.remove("is-hidden");
}

function closeModal(event) {
    event.preventDefault()
    modal.classList.add("is-hidden");

    const postToAdd = {
        title: event.target.elements.nameInput.value,
        price: event.target.elements.priceInput.value,
        photo: event.target.elements.photoInput.value
    }

    addFruitApi(postToAdd);
}