export const removeMonths = (sortedCustomerArray, timeScope) =>
    sortedCustomerArray.filter(obj => timeScope.includes(obj.month));