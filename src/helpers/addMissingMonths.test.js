import { addMissingMonths } from "./addMissingMonths";

describe('addMissingMonths', () => {
    test('check that there are 3 month for each user(event the months without transactions)', () => {
        const months = ['January', 'February', 'March'];
        const data = [
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
        ]

        expect(addMissingMonths(data, months)).toStrictEqual([
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
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "month": "February",
                "points": 0,
                "amount": 0
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "month": "March",
                "points": 0,
                "amount": 0
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": "March",
                "points": 0,
                "amount": 0
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "month": "February",
                "points": 0,
                "amount": 0
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "month": "March",
                "points": 0,
                "amount": 0
            }
        ]);
    });
});






