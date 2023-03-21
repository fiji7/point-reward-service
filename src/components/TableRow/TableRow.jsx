import './TableRow.css';

export const TableRow = ({ name, totalPointsPerCustomer, months, hasError = false }) =>
    <tr>
        <td>{name}</td>
        {months.map((month, i) => (
            <td key={i}>{month.points}</td>
        ))}
        <td>{totalPointsPerCustomer}</td>
    </tr>;