export const deleteFruitApi = async (id) => {
    try {
        const data = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products/${id}`, { method: "DELETE" }).then((data) => {
            return data.json()
        });

        return data
    } catch(error){
        return error;
    }
};