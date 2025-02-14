const list = document.querySelector(".list");

export const createMarkup = (arr) => {
    let html;

    list.innerHTML = "";
    html = "";

    html = arr.map((obj) => {
        return `        <li id="${obj.id}">
            <img src="${obj.photo}" alt="1">
            <h2>${obj.title}</h2>
            <span>${obj.price}</span>
            <button class="delet" type="button">Редагувати</button>
            <button class="edit" type="button">Видалити</button>
        </li>`;
    }).join("");

    list.innerHTML = html;
};