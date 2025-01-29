export const getFruits = () => {
    return fetch("http://localhost:3000/fruits").then((data) => {
        return data.json()
    });
};