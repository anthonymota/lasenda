export default function Policy({ client, policy }) {
  let content = <div>no policy selected</div>;
  if (policy) {
    console.log('POLICY', policy);
    content = <div>{client[`${policy}`].logs}</div>;
  }

  return <div>{content}</div>;
}
