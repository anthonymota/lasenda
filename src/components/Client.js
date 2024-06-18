import './Client.css';

export default function Client({ onClick, client, goBack }) {
  return (
    <div onClick={(e) => onClick(client['#'] - 1)} className='card'>
      <h2>
        {client['#']} {client['1stInsured']}
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
