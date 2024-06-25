import {
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from 'react-router-dom';

export default function ClientForm({ client, method }) {
  //return server data in action
  const data = useActionData();

  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method={method}>
      {/* this code is for outputting server validation errors but i havent done server validation yet
      
       {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
        
      )} */}
      <p>
        <label htmlFor='#'>#</label>
        <input
          type='number'
          name='#'
          required
          defaultValue={client ? client['#'] : ''}
        />
      </p>
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
        <label htmlFor='business'>Business Name</label>
        <input
          type='text'
          name='business'
          required
          defaultValue={client ? client['Ins/Bus'] : ''}
        />
      </p>
      <p>
        <label htmlFor='fein'>FEIN</label>
        <input
          type='text'
          name='fein'
          required
          defaultValue={client ? client['Fein #'] : ''}
        />
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea
          type='description'
          name='description'
          rows='5'
          required
          defaultValue={client ? client.IPComments : ''}
        />
      </p>
      <p>
        <label htmlFor='1st_phone'>Phone Number</label>
        <input
          type='tel'
          name='1st_phone'
          required
          defaultValue={client ? client['1stPhone'] : ''}
        />
      </p>
      <p>
        <label htmlFor='1st_email'>Email</label>
        <input
          type='email'
          name='1st_email'
          required
          defaultValue={client ? client['1stEmail'] : ''}
        />
      </p>
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Save'}
      </button>
    </Form>
  );
}

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const clientData = {
    ['#']: data.get('#'),
    First: data.get('first_name'),
    Last: data.get('last_name'),
    ['Ins/Bus']: data.get('business'),
    ['Fein #']: data.get('fein'),
    ['1stPhone']: data.get('1st_phone'),
    ['1stEmail']: data.get('1st_email'),
    IPComments: data.get('description'),
  };

  let url = 'http://localhost:8080/events';
  if (method === 'PATCH') {
    const clientId = params.clientId;
    url = 'http://localhost:8080/events/' + clientId;
  }
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clientData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save client ' }, { status: 500 });
  }

  return redirect('/clients');
}
