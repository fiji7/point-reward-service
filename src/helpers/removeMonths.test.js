import { removeMonths } from "./removeMonths";

describe('removeMonths', () => {
    test('check that there are only data from the last 3 months', () => {
        const months = ['January', 'February', 'March'];
        const data = [
            {
                "id": 1,
                "name": "Zia Lawson",
                "month": "December",
                "points": 0,
                "amount": 10
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "month": "January",
                "points": 10,
                "amount": 60
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "month": "December",
                "points": 78,
                "amount": 178
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": "January",
                "points": 99,
                "amount": 199
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": "February",
                "points": 80,
                "amount": 115
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": "August",
                "points": 49,
                "amount": 99
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": "October",
                "points": 50,
                "amount": 100
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "month": "January",
                "points": 700,
                "amount": 500
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "month": "June",
                "points": 27,
                "amount": 77
            }
        ]

        expect(removeMonths(data, months)).toStrictEqual([
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "month": "January",
                "points": 10,
                "amount": 60
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": "January",
                "points": 99,
                "amount": 199
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": "February",
                "points": 80,
                "amount": 115
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "month": "January",
                "points": 700,
                "amount": 500
            }
        ]);
    });
});






