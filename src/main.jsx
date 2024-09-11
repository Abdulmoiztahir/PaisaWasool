// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import AppRouter from "./Route.jsx";
import UserContextProvider from "./context/userAuthentication.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <AppRouter />
  </UserContextProvider>
);
