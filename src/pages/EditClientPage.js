import { Form, useRouteLoaderData } from 'react-router-dom';

export default function EditClientPage() {
  const data = useRouteLoaderData('client-detail');
  const client = data.event;

  return (
    <form>
      <p>
        <label htmlFor='first_name'>First Name</label>
        <input
          type='text'
          name='first_name'
          required
          defaultValue={client ? client.First : ''}
        />
      </p>
      <p>
        <label htmlFor='last_name'>Last Name</label>
        <input
          type='text'
          name='last_name'
          required
          defaultValue={client ? client.Last : ''}
        />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input type='url' name='image' required />
      </p>
    </form>
  );
}
