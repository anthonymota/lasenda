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
import Bookkeeping from './Bookkeeping';

export default function ClientPage() {
  const submit = useSubmit();
  const data = useRouteLoaderData('client-detail');
  const client = data.event;

  console.log(client);

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
        <ul className='client-header'>
          <li>
            <button className={({ isActive }) => (isActive ? 'active' : '')}>
              Bookkeeping
            </button>
          </li>
          <li>
            <NavLink
              to='trucking'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Trucking
            </NavLink>
          </li>
          <li>
            <NavLink
              to='corporation'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Corporation
            </NavLink>
          </li>
        </ul>
      </nav>
      <Bookkeeping client={client}>{client.Bookkeeping.logs}</Bookkeeping>
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
