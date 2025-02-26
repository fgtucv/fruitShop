// export const getFruitsApi = (page) => {
//     return fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products?page=${page}&limit=2`).then((data) => {
//         return data.json()
//     });
// };

export const getFruitsApi = async(page) => {
    try{
       const data = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products?page=${page}&limit=2`).then((data) => {
        return data.json()
    });
    return data;
    } catch(error){
        return error;
    }
    
};