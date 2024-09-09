export default async function AsyncServerComponent() {
  const sleep = (time) => new Promise(resolve=>setTimeout(resolve, time));  
  const data = await fetch('https://monkfish-app-kfd4z.ondigitalocean.app/users?filter=username:elouise_hilll');
  const result = await data.json();

  await sleep(2000);
  
  return <div>
    {
      result.map(item=>(
        <pre key={item?._id}>
          {JSON.stringify(item, null, 4)}
        </pre>
      ))
    }
  </div>;
}