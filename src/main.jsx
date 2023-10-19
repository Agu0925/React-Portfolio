import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import {Titulo, Acerca, Botones, Botones2} from './Index'
import { TitProyectos, Pro } from './proyectos';
import { Contacto } from './contactos';

const router = createBrowserRouter([
  {path:'/', element: <> <Titulo/> <Acerca/> <Botones/> </>},
  {path:'/Proyectos', element: <> <Botones2/> <TitProyectos/> <Pro/> </>},
  {path:'/Contacto', element: <> <Botones2/> <Contacto/> </>},
  {path:'*', element: <h1 className='text-danger text-center my-5'>Sector no encontrado</h1>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
