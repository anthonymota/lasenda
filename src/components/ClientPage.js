import { useParams } from 'react-router-dom';
import './Client.css';

export default function ClientPage() {
  const params = useParams();
  return (
    <div className='client-page'>
      <h1>{params.clientId}</h1>
      <h1>{client['1stInsured']}</h1>

      <ul className='client-details'>
        <li>Customer ID: {client.CustID}</li>

        <li>
          Business:{' '}
          {client['1stInsured'] !== client['Ins/Bus']
            ? client['Ins/Bus']
            : client.Business}
          <button>Edit</button>
        </li>
        <li>NAICS: {client['NAICS']}</li>
        <li>Emails: {client['1stEmail']}</li>
        <li>1st Phone: {client['1stPhone']}</li>
        <li>
          Address: {client.Address + ','} {client.City}
        </li>
        <li>C-Producer: {client['C-Producer']}</li>
        <li>FEIN: {client.Fein}</li>
      </ul>

      <div className='card'>
        <h2>Logs</h2>
      </div>

      <button onClick={goBack}>Home</button>
    </div>
  );
}
