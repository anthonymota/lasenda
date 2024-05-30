import Layout from './Layout';
import RandomClient from './RandomClient';
import Search from './Search';
import ClientList from './ClientList';
import Client from './Client';
import clients from '../data/clients.json';
import { useState } from 'react';
const clientslist = clients.clients;

function App() {
  const [clientSearch, setclientSearch] = useState('');
  const [activeClient, setactiveClient] = useState(null);


  function handleInput(e) {
    setclientSearch(e.target.value);
  }

  function handleClick(clientid) {
    if (activeClient) {
      setactiveClient(null);
    } else setactiveClient(clientid);
  }

  const result = clientslist.filter((client) => {
    return (
      client['1stInsured'].toLowerCase().includes(clientSearch) ||
      client.Business.toLowerCase().includes(clientSearch) ||
      client['Ins/Bus'].toLowerCase().includes(clientSearch)
    );
  });


  return (
    <Layout>
      <div>
        {activeClient | (activeClient === 0) ? (
          <Client
            client={clientslist[activeClient]}
            activeclient={activeClient}
            goBack={handleClick}
          />
        ) : (
          <div>
            
            <Search OnInput={handleInput} searchvalue={clientSearch} />
            <ClientList
              onClick={handleClick}
              clients={clientSearch ? result : clientslist}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
