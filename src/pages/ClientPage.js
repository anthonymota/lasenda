import {
  useParams,
  Link,
  NavLink,
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
      <ul className='top-header'>
        <li>Customer ID: {client.CustID}</li>
      </ul>
      <div className='client-page-details'>
        <div className='left-column'>
          <ul className='client-details'>
            <li>
              Corporation:{' '}
              {client['1stInsured'] !== client['Ins/Bus']
                ? client['Ins/Bus']
                : client.Business}
            </li>
            <li>Contact 1: {' ' + client.Last + ', ' + client['First']}</li>
            <li>
              Mailing Address: {client.Address + ','} {client.City}
            </li>
          </ul>
        </div>
        <div className='right-column'>
          <ul className='client-details'>
            <li>Producer: {client['C-Producer']}</li>
            <li>Cell Phone: {client['1stPhone']}</li>
            <li>Work Email: {client['1stEmail']}</li>
          </ul>
        </div>
      </div>
      <nav>
        <ul className='policies'>
          <li>
            <NavLink
              to='bookkeeping'
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Bookkeeping
            </NavLink>
          </li>
          <li>Corporation</li>
          <li>Trucking</li>
        </ul>
      </nav>
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

export async function action({ params, request }) {
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
