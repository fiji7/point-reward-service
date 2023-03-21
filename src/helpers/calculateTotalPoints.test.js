import { calculateTotalPoints } from "./calculateTotalPoints";

describe('calculateTotalPoints', () => {
    test('check that points are earned for each user who has made a transaction in the last three months', () => {
        const months = ['January', 'February', 'March'];
        const data = [
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
        ]

        expect(calculateTotalPoints(data, months)).toStrictEqual([
            {
                "id": 2,
                "totalAmountPerCustomer": 60,
                "totalPointsPerCustomer": 10,
                "months": [
                    {
                        "amount": 60,
                        "month": "January",
                        "points": 10
                    },
                    {
                        "amount": 0,
                        "month": "February",
                        "points": 0
                    },
                    {
                        "amount": 0,
                        "month": "March",
                        "points": 0
                    }
                ],
                "name": "Ezekiel Franklin"
            },
            {
                "id": 3,
                "totalAmountPerCustomer": 314,
                "totalPointsPerCustomer": 179,
                "months": [
                    {
                        "amount": 199,
                        "month": "January",
                        "points": 99
                    },
                    {
                        "amount": 115,
                        "month": "February",
                        "points": 80
                    },
                    {
                        "amount": 0,
                        "month": "March",
                        "points": 0
                    }
                ],
                "name": "Yoko Sampson"
            },
            {
                "id": 5,
                "totalAmountPerCustomer": 500,
                "totalPointsPerCustomer": 700,
                "months": [
                    {
                        "amount": 500,
                        "month": "January",
                        "points": 700
                    },
                    {
                        "amount": 0,
                        "month": "February",
                        "points": 0
                    },
                    {
                        "amount": 0,
                        "month": "March",
                        "points": 0
                    }
                ],
                "name": "Kay Gomez"
            }
        ]);
    });
  });

  
  
  
  
  
  