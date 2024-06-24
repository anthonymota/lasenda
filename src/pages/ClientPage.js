import { useParams, Link, useRouteLoaderData, json } from 'react-router-dom';
import '../components/Client.css';

export default function ClientPage() {
  const data = useRouteLoaderData('client-detail');
  const client = data.event;
  console.log(client);
  return (
    <div className='client-page'>
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

      <Link to='edit'>Edit</Link>
    </div>
  );
}

export async function loader({ request, params }) {
  const id = params.clientId;
  console.log('id', id);
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({ message: 'Could not fetch client details' }, { status: 500 });
  } else {
    return response;
  }
}
