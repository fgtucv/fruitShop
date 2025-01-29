export const addFruitApi = (newFruit) => {

    const options = {
        method: "POST",
        body: JSON.stringify(newFruit),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
    }

    return fetch("http://localhost:3000/fruits", options).then((data) => {
        return data.json()
    })
};