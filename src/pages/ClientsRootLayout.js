import ClientsNavigation from "../components/ClientsNavigation";
import {
  Outlet,
  Link,
  useSubmit,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import { getAuthToken } from "../util/auth";

export default function ClientsRootLayout() {
  const submit = useSubmit();
  const token = useRouteLoaderData("root");
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <div>
      <Outlet />
      <ClientsNavigation />
      <Link to="edit">Edit</Link>
      <button onClick={startDeleteHandler}>Delete</button>
    </div>
  );
}

export async function action({ params, request }) {
  const clientID = params.clientId;

  const token = getAuthToken();
  console.log("clientID", clientID);
  const response = await fetch("http://localhost:8080/events/" + clientID, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not delete client" }, { status: 500 });
  }
  return redirect("/clients");
}
