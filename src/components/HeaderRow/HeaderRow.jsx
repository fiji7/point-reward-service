import './HeaderRow.css';


export const HeaderRow = ({ columns }) =>
    <table className="header-table">
        <tbody>
            <tr >
                {columns.map((header, i) => (
                    <th className='header-row-element' key={i}>{header}</th>
                ))}
            </tr>
        </tbody>
    </table>;
