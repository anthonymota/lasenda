import Client from './Client';
import './ClientList.css';

export default function ClientList({ clients }) {
  return (
    <div className='clients'>
      {clients.map((c) => (
        <Client key={c['#']} client={c} />
      ))}
    </div>
  );
}
