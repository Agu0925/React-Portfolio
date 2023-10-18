import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import {Titulo, Acerca} from './Index'
import { TitProyectos, Pro } from './proyectos';

const router = createBrowserRouter([
  {path:'/', element: <> <Titulo/> <Acerca/> </>},
  {path:'/Proyectos', element: <> <TitProyectos/> <Pro/> </>},
  {path:'*', element: <h1 className='text-danger text-center my-5'>Sector no encontrado</h1>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
