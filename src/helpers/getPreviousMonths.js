import { months } from "./constants/constants";

export const getPreviousMonths = (initialDate, monthsToGoBack) => {
  const currentDate = new Date(initialDate);
  const lastThreeMonths = [];

  for (let i = 0; i < monthsToGoBack; i++) {
    const monthIndex = currentDate.getMonth() - i;
    const monthName = months[(monthIndex + 12) % 12];
    lastThreeMonths.push(monthName);
  }

  return lastThreeMonths.reverse();
};
