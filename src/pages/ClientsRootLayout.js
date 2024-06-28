import ClientsNavigation from '../components/ClientsNavigation';
import { Outlet, Link, useSubmit, json, redirect } from 'react-router-dom';

export default function ClientsRootLayout() {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <div>
      <Outlet />
      <ClientsNavigation />
      <Link to='edit'>Edit</Link>
      <button onClick={startDeleteHandler}>Delete</button>
    </div>
  );
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
