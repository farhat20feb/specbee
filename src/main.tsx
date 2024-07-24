import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from './Notfound'; 

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    errorElement: <Notfound />
  }
])
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>,
  );
} else {
  throw new Error("Root element with id 'root' not found in the document.");
}