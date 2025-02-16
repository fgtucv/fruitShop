export const deleteFruitApi = function (id) {
    return fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products/${id}`, {method: "DELETE"}).then((data) => {
        return data.json()
    });
};