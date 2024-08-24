import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import './index.css';
import {TanstackQueryProvider} from "./context/TanstackQueryContext.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <TanstackQueryProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
      </TanstackQueryProvider>
  </React.StrictMode>
);
