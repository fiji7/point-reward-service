import { getPreviousMonths } from "./getPreviousMonths";

describe('getPreviousMonths', () => {
    test('check if it return only the last 3 months', () => {
        const date = '03-10-2023';
        const months = ['January', 'February', 'March'];
        expect(getPreviousMonths(date, 3)).toStrictEqual(months);
    });
});






