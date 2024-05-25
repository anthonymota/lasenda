import client_list from '../data/clients.json';
import Client from './Client';

export default function RandomClient({ onClick }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const random_client = client_list.clients[getRandomInt(724)];

  return <Client client={random_client} />;
}
