import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import "./Layout.css";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

export default function Layout() {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
