import data from './data.json'


export const customerTable = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(data);
    }, 3000);
});
