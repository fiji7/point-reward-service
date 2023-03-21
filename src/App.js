import { useEffect, useState } from 'react';
import './App.css';
import { customerTable } from './api/mock';
import { scoreCalculationConfig, tableHeaderConfig } from './config/config';
import { calculateTransactionPoints } from './helpers/calculateTransactionPoints';
import { calculateTotalPointsPerMonth } from './helpers/calculatePointsPerMonth';
import { getPreviousMonths } from './helpers/getPreviousMonths';
import { calculateTotalPoints } from './helpers/calculateTotalPoints';
import { HeaderRow } from './components/HeaderRow/HeaderRow';
import { TableRow } from './components/TableRow/TableRow';
import { Table } from './components/Table/Table';
import { LoadingSpinner } from './components/Spinner/Spinner';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';


export const App = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [months, setMonths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const timeScope = getPreviousMonths(new Date(), 3)

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await customerTable();
        setTransactionData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    setMonths(timeScope);
    fetchData();
  }, [])

  const transactionWithPoints = calculateTransactionPoints(transactionData, scoreCalculationConfig);
  const transactionsTotalPointsPerMonth = calculateTotalPointsPerMonth(transactionWithPoints);
  const customerData = calculateTotalPoints(transactionsTotalPointsPerMonth, timeScope);

  return (
    <div className="App">
      <HeaderRow columns={tableHeaderConfig(months)} />
      {
        error ? <ErrorMessage />
          :
          <>
            {!isLoading ? (
              <Table>
                {customerData.map(row =>
                  <TableRow
                    key={row.id}
                    name={row.name}
                    totalPointsPerCustomer={row.totalPointsPerCustomer}
                    months={row.months}
                  />)}
              </Table>
            )
              : <LoadingSpinner />}
          </>
      }
    </div>
  );
};