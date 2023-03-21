import { calculateTransactionPoints } from "./calculateTransactionPoints";

describe('calculateTransactionPoints', () => {
    test('check if points are calculated based on amount', () => {
        const scoreCalculationConfig = {
            firstBreakpoint: 50,
            secondBreakpoint: 100,
            extraScoreMultiplier: 2
        };

        const data = [
            {
                "id": 1,
                "name": "Zia Lawson",
                "amount": 10,
                "date": "12-12-2022"
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "amount": 60,
                "date": "01-01-2023"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 115,
                "date": "02-02-2023"
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "amount": 89,
                "date": "12-22-2022"
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "amount": 250,
                "date": "01-15-2023"
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "amount": 250,
                "date": "01-18-2023"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 99,
                "date": "01-05-2023"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 100,
                "date": "01-03-2023"
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "amount": 89,
                "date": "12-22-2022"
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "amount": 77,
                "date": "06-15-2022"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 99,
                "date": "08-05-2022"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 100,
                "date": "10-03-2022"
            }
        ]

        expect(calculateTransactionPoints(data, scoreCalculationConfig)).toStrictEqual([
            {
                "id": 1,
                "name": "Zia Lawson",
                "amount": 10,
                "points": 0,
                "date": "12-12-2022"
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "amount": 60,
                "points": 10,
                "date": "01-01-2023"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 115,
                "points": 80,
                "date": "02-02-2023"
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "amount": 89,
                "points": 39,
                "date": "12-22-2022"
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "amount": 250,
                "points": 350,
                "date": "01-15-2023"
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "amount": 250,
                "points": 350,
                "date": "01-18-2023"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 99,
                "points": 49,
                "date": "01-05-2023"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 100,
                "points": 50,
                "date": "01-03-2023"
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "amount": 89,
                "points": 39,
                "date": "12-22-2022"
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "amount": 77,
                "points": 27,
                "date": "06-15-2022"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 99,
                "points": 49,
                "date": "08-05-2022"
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "amount": 100,
                "points": 50,
                "date": "10-03-2022"
            }
        ]);
    });
});






