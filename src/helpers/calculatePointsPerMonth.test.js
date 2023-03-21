import { calculateTotalPointsPerMonth } from "./calculatePointsPerMonth";

describe('calculateTotalPointsPerMonth', () => {
    test('check if points are calculated for each month', () => {
        const data = [
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
        ]

        expect(calculateTotalPointsPerMonth(data)).toStrictEqual([
            {
                "id": 1,
                "name": "Zia Lawson",
                "month": 11,
                "points": 0,
                "amount": 10
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "month": 0,
                "points": 10,
                "amount": 60
            },
            {
                "id": 2,
                "name": "Ezekiel Franklin",
                "month": 11,
                "points": 78,
                "amount": 178
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": 0,
                "points": 99,
                "amount": 199
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": 1,
                "points": 80,
                "amount": 115
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": 7,
                "points": 49,
                "amount": 99
            },
            {
                "id": 3,
                "name": "Yoko Sampson",
                "month": 9,
                "points": 50,
                "amount": 100
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "month": 0,
                "points": 700,
                "amount": 500
            },
            {
                "id": 5,
                "name": "Kay Gomez",
                "month": 5,
                "points": 27,
                "amount": 77
            }
        ]);
    });
  });

  
  
  
  
  
  