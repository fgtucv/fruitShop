const list = document.querySelector(".list");

export const createMarkup = (arr) => {
    // let html;

    // list.innerHTML = "";
    // html = "";

    const html = arr.map((obj) => {
        return `        <li id="${obj.id}">
            <img src="${obj.photo}" alt="${obj.title}">
            <h2>${obj.title}</h2>
            <span>${obj.price}</span>
            <button class="openUpdateButton" type="button">Редагувати</button>
            <button class="delet" type="button">Видалити</button>
        </li>`;
    }).join("");

    // list.innerHTML = html;

    list.insertAdjacentHTML("beforeend", html)
};