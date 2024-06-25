import { Form, useRouteLoaderData, json, redirect } from 'react-router-dom';
import ClientForm from '../components/ClientForm';

export default function EditClientPage() {
  const data = useRouteLoaderData('client-detail');
  const client = data.event;

  return <ClientForm client={client} method='patch' />;
}


