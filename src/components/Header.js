import React from "react";
import { NavLink, Form, useRouteLoaderData } from "react-router-dom";
import company_image from "../images/la-senda-image.png";
export default function Header() {
  const token = useRouteLoaderData("root");

  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <img src={company_image} />
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Clients
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink
                to="/clients/new"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                New Client
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profile
              </NavLink>
            </li>
          )}

          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
