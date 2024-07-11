import { useParams, useRouteLoaderData, json } from 'react-router-dom';
import '../components/Client.css';
import Policy from '../components/Policy';
import { useState } from 'react';

export default function ClientPage() {
  const [policy, setPolicy] = useState('');
  const data = useRouteLoaderData('client-detail');
  const client = data.event;

  console.log(client);

  function handleSelect(policy) {
    setPolicy(policy);
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
        <ul className='client-header'>
          <li>
            <button
              onClick={(e) => {
                handleSelect('Bookkeeping');
              }}
            >
              Bookkeeping
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                handleSelect('Trucking');
              }}
            >
              Trucking
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                handleSelect('Corporation');
              }}
            >
              Corporation
            </button>
          </li>
        </ul>
      </nav>
      <Policy client={client} policy={policy} />
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
