import { months } from "./constants/constants";
import { removeMonths } from "./removeMonths";
import { addMissingMonths } from "./addMissingMonths";


export const calculateTotalPoints = (data, timeScope ) => {    
    const result = {};  

    data.forEach(monthPerUser => monthPerUser.month = months[monthPerUser.month]);
    const olderMonthsRemoved = removeMonths(data, timeScope);
    const monthsAfterAddingFillers = addMissingMonths(olderMonthsRemoved, timeScope);   

    monthsAfterAddingFillers.forEach((obj) => {
        if (!result[obj.id]) {
            result[obj.id] = {
                id: obj.id,
                totalAmountPerCustomer: 0,
                totalPointsPerCustomer: 0,
                months: [],
            };
        };

        result[obj.id].id = obj.id;
        result[obj.id].name = obj.name;
        result[obj.id].totalPointsPerCustomer += obj.points;
        result[obj.id].totalAmountPerCustomer += obj.amount;
        result[obj.id].months.push({ amount: obj.amount, month: obj.month, points: obj.points });
    });

    return Object.values(result);
};
