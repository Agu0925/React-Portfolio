import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import {Titulo, Acerca,Botones, BotonesProye, BotonesContac} from './Index'
import { TitProyectos, Pro } from './proyectos';
import { Contacto } from './contactos';

const router = createHashRouter([
  {path:'/', element: <> <Titulo/> <Acerca/> <Botones/> </>},
  {path:'/Proyectos', element: <> <BotonesProye/> <TitProyectos/> <Pro/> </>},
  {path:'/Contacto', element: <> <BotonesContac/> <Contacto/> </>},
  {path:'*', element: <h1 className='text-danger text-center my-5'>Sector no encontrado</h1>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
