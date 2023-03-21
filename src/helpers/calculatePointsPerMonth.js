export const calculateTotalPointsPerMonth = (data) => {
    
    const transactionWithAMonth = data.map(transaction => ({
        ...transaction,
        month: new Date(transaction.date).getMonth()
    }));
    
    const sortByMonthData = {};
    transactionWithAMonth.forEach(transaction => {
        const { id, name, month, points, amount } = transaction;

        if (!sortByMonthData[name]) {
            sortByMonthData[name] = [];
        }

        if (sortByMonthData[name][month]) {
            sortByMonthData[name][month].points += points;
            sortByMonthData[name][month].month = month;
            sortByMonthData[name][month].amount += amount
        }
        else {
            sortByMonthData[name][month] = {
                id,
                name,
                month: month,
                points,
                amount
            }
        }
    });

    const sortedCustomerArray = [];

    for (let id in sortByMonthData) {
        sortByMonthData[id].forEach((customer) => sortedCustomerArray.push(customer));
    };

    return sortedCustomerArray;

};
