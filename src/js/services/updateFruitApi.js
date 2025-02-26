export const updateFruitApi = async (obj, elementId) => {

  try {
    const options = {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    const data = await fetch(
      `https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products/${elementId}`, options).then((data) => { return data.json() });

    return data;
  } catch (error) {
    return error;
  }

};
