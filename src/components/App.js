import Layout from './Layout';
import Search from './Search';
import ClientList from './ClientList';
import Client from './Client';
import clients from '../data/clients.json';
import { useState, useEffect } from 'react';
const clientslist = clients.clients;

function App() {
  const [clientSearch, setclientSearch] = useState('');


  function handleInput(e) {
    setclientSearch(e.target.value);
  }

  console.log(clientslist);
  return (
    <Layout>
      <div>
        <div>
          <Search OnInput={handleInput} searchvalue={clientSearch} />
          <ClientList  clients={clientslist} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
