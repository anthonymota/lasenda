import {
  useParams,
  Link,
  useRouteLoaderData,
  json,
  redirect,
  useSubmit,
} from 'react-router-dom';
import '../components/Client.css';

export default function ClientPage() {
  const submit = useSubmit();
  const data = useRouteLoaderData('client-detail');
  const client = data.event;

  console.log(client);

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <div className='client-page'>
      <h1>{client['First'] + ' ' + client.Last}</h1>

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
        <li>FEIN: {client['Fein #']}</li>
      </ul>

      <div className='card'>
        <h2>Logs</h2>
      </div>

      <Link to='edit'>Edit</Link>
      <button onClick={startDeleteHandler}>Delete</button>
    </div>
  );
}

export async function loader({ request, params }) {
  const id = params.clientId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({ message: 'Could not fetch client details' }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({params, request}) { 
  const clientID = params.clientId;
  console.log('clientID', clientID);
  const response = await fetch('http://localhost:8080/events/' + clientID, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete client' }, { status: 500 });
  }
  return redirect('/clients');
}
