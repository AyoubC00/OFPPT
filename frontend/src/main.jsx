import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@material-tailwind/react";
import store from "./app/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom';
import router from "./router.jsx"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={ store }>
        <RouterProvider router={ router } />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
