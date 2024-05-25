import Client from './Client';
import './ClientList.css';

export default function Test({ clients, onClick }) {
  return (
    <div className='clients'>
      {clients.map((c) => (
        <Client key={c['#']} client={c} onClick={onClick} />
      ))}
    </div>
  );
}
