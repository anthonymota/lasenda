import { useParams, Link } from 'react-router-dom';
import '../components/Client.css';
const client = {
  '#': 1,
  CustID: 3434,
  Last: 'Hansen',
  First: 'John',
  Business: 'John Hansen INC',
  State: 'CA',
  Zip: 92341,
  'C-Producer': '',
  'C-CSR': '',
  AnnCliPrem: 0,
  'Ins/Bus': 'John Hansen INC',
  Insureds: 'John and Betty Hansen',
  FirstNames: 'John and Betty',
  PrefNames: 'John and Betty',
  'AllIns/Bus': 'John Hansen INC',
  AllInsured: 'Edgar and Esthela Corona',
  AllFirstNa: 'John and Betty',
  AllPrefNam: 'John and Betty',
  '1stInsured': 'John Hansen',
  Middle: '',
  Middle2: '',
  BusDBA: '',
  Address: '11112 Compand DR',
  'Address 2': '',
  City: 'Ontario',
  PAddres2: '',
  '1stPhone': '(909)811-5222',
  'Hm Phone': '',
  CellPhone: '',
  MsgPhone: '',
  'Oth Phone': '',
  Fax: '',
  Pager: '',
  'C1 1st Ph': '',
  'C1 HmPhone': '',
  'C1 WkPhone': '',
  'C1 C Phone': '',
  'C1 M Phone': '',
  'C1 OtPhone': '',
  'C1 Fax': '',
  'C1 Pager': '',
  'C2 HmPhone': '',
  'C2 C Phone': '',
  'C2 M Phone': '',
  'C2 OtPhone': '',
  'C2 Fax': '',
  'C2 Pager': '',
  '1stEmail': 'johnhansen@yahoo.com',
  'Hm Email': '',
  'Wk Email': 'johnhansen@yahoo.com',
  OthEmail: '',
  BillEmail: '',
  'C1 Email': '',
  'C1 HmEmail': '',
  'C1 WkEmail': '',
  'C1 OtEmail': '',
  'C1 B Email': '',
  'C2 HmEmail': '',
  'C2 OtEmail': '',
  'C2 B Email': '',
  HmEmails: '',
  OtEmails: '',
  BillEmails: '',
  'Social Med': '',
  Website: '',
  'Client URL': '',
  'Other URL': '',
  Policies: 1,
  'Active Pol': 1,
  'Inact. Pol': 0,
  ClientPrem: 0,
  CliSince: '1/23/2022',
  CliType: 'Customer',
  CustType: 'Commercial',
  CliStat: 'Active',
  'C-Office': '',
  'C-Source': 'Referral',
  'Fein #': '21-6879843',
  'License #': '',
  'NAICS CD': '',
  NAICS: '',
  '1stLogDate': '3/25/2022',
  LastContac: '',
  CILastUpda: '4/12/2022',
  'Spanish On': '',
  'English On': '',
  IPTitle: '',
  IPMiddle: '',
  IPSuffix: '',
  IPDob: '',
  IPAge: 0,
  IPSex: '',
  IPMStat: '',
  IPRelation: '',
  IPSS: '',
  IPDLNum: '',
  IPDLState: '',
  IPOccup: '',
  IPEmployer: '',
  IPUIncome: '',
  IPInterest: '',
  IPComments: 'The account is under his name',
  IPAnniver: '',
  IPEducatio: '',
  IPResidenc: '',
  IPDeceased: 'FALSE',
  IP2Title: '',
  IP2Middle: '',
  IP2Suffix: '',
  IP2Dob: '',
  IP2Age: 0,
  IP2MStat: '',
  IP2SS: '333-43-9090',
  IP2DLNum: '',
  IP2DLState: '',
  IP2Occup: 'Secretary',
  IP2Employe: '',
  IP2UIncome: '',
  IP2Interes: '',
  IP2Comment: 'She is in charge for all the renewals',
  IP2Anniver: '',
  IP2Educati: '',
  IP2Residen: '',
  IP2Decease: 'FALSE',
};

export default function ClientPage() {
  const params = useParams();
  return (
    <div className='client-page'>
      <h1>{params.clientId}</h1>
      <h1>{client['1stInsured']}</h1>

      <ul className='client-details'>
        <li>Customer ID: {client.CustID}</li>

        <li>
          Business:{' '}
          {client['1stInsured'] !== client['Ins/Bus']
            ? client['Ins/Bus']
            : client.Business}
          <button>Edit</button>
        </li>
        <li>NAICS: {client['NAICS']}</li>
        <li>Emails: {client['1stEmail']}</li>
        <li>1st Phone: {client['1stPhone']}</li>
        <li>
          Address: {client.Address + ','} {client.City}
        </li>
        <li>C-Producer: {client['C-Producer']}</li>
        <li>FEIN: {client.Fein}</li>
      </ul>

      <div className='card'>
        <h2>Logs</h2>
      </div>

      <Link to='/'>Home</Link>
    </div>
  );
}
