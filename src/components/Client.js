import { Link } from 'react-router-dom';
import './Client.css';

export default function Client({ client, goBack }) {
  return (
    <div className='card'>
      <h2>
        <Link to={`clients/5`}>
          {client['#']} {client['1stInsured']}
        </Link>
      </h2>
      <p>
        {client['1stInsured'] !== client['Ins/Bus']
          ? client['Ins/Bus']
          : client.Business}
      </p>
      <p>{client['#']}</p>
      <p>{client.CellPhone}</p>
      <p>{client.NAICS}</p>
    </div>
  );
}
