import { Link } from 'react-router-dom';
import './Client.css';

export default function Client({ client }) {
  return (
    <Link to={`${client['#']}`}>
      <div className='card'>
        <h2>
          {client['#']} {client['First'] + ' ' + client['Last']}
        </h2>
        <p>
          {client['1stInsured'] !== client['Ins/Bus']
            ? client['Ins/Bus']
            : client.Business}
        </p>
        <p>{client['1stPhone']}</p>
        <p>{client.NAICS}</p>
      </div>
    </Link>
  );
}
