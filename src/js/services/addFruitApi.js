export const addFruitApi = async (newFruit) => {

    try{
        const options = {
            method: "POST",
            body: JSON.stringify(newFruit),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
        }

        const data = await fetch("https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products", options).then((data) => {
            return data.json()
        })

        return data;
    } catch(error){
        return error;
    }
};