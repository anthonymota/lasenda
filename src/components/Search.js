export default function Search({ OnInput, searchvalue }) {
  console.log('Search Component Loaded');
  console.log(searchvalue);
  return (
    <>
      <input
        placeholder='Search for a client.'
        type='search'
        id='clientsearch'
        value={searchvalue}
        onChange={OnInput}
      ></input>
    </>
  );
}
