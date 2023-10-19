import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yo from './assets/yo.png'
//Imagenes
const Imagen = ({ i }) => {
  let img = `./assets/iconos/${i}.ico`
  return (
    <img className="w-100" src={img} alt={i} />
  )
};
//Titulo ---------------------------
const TextoMaquinaEscribir = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i++));
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-center mb-4">
      <span className="texto-animado text-white h3">{displayText}</span>
    </div>
  );
};
export const Titulo = () => {
  return (
    <>
      <h1 className="text-center text-primary mt-2">Agustin Ahlers</h1>
      <TextoMaquinaEscribir text={'Developer'} />
    </>
  )
};
//--------------------
//Acerca de -------------------------
export const Acerca = () => {
  return (
    <>
      <h2 className="text-center text-white my-4">Acerca de mi</h2>
      <div className="row m-auto">
        <div className="col-md-5 m-auto text-center">
          <img src={yo} className="w-75 rounded-circle" alt="MiFoto" />
        </div>
        <div className="col-md-7 m-auto text-white">
          <p className="lead m-auto my-4">
            Soy de Uruguay tengo 26 años desde los 14 empecé a interesarme por la informática y completé 2 cursos uno de programación .NET Visual Basic y otro de Reparación Pc hardware/software.
            A los 16 comencé a trabajar en la empresa familiar donde aprendí muchísimo pero en la industria de la carpintería, allí trabaje con maquinas cnc donde me recordó el mundo de la programación y lo que me gustaba resolver problemas o crear herramientas.
            Gracias a esto hoy me siento preparado y estoy decidido a trabajar como desarrollador.
            <span className="row text-center">
              <p className="h4 my-3">Estas son las tecnologias que manejo</p>
              <div className="col">
                <Imagen i={'github'} />
              </div>
              <div className="col">
                <Imagen i={'html'} />
              </div>
              <div className="col">
                <Imagen i={'css'} />
              </div>
              <div className="col">
                <Imagen i={'bs'} />
              </div>
              <div className="col">
                <Imagen i={'js'} />
              </div>
              <div className="col">
                <Imagen i={'node'} />
              </div>
              <div className="col">
                <Imagen i={'react'} />
              </div>
            </span>
          </p>
        </div>
      </div>
    </>
  )
};
export const Botones = () => {
  return (
    <>
      <div className="fixed-top container d-none d-md-block">
        <div className="row">
          <div className="text-start col m-auto">
            <a className="btn" href="https://www.linkedin.com/in/agustin-ahlers/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </a>
          </div>
          <div className="text-end col m-auto">
            <Link className="btn btn-primary py-md-3" to="/Contacto">Contactame</Link>
          </div>
          <div className="text-end m-auto">
            <Link className="btn btn-primary py-md-3" to="/Proyectos">Mis Proyectos</Link>
          </div>
        </div>
      </div>
      <div className="d-md-none text-center">
        <div className="row">
          <div className="col-4 m-auto">
            <Link className="btn btn-primary py-md-3" to="/Contacto">Contactame</Link>
          </div>
          <div className="col-4 m-auto">
            <a className="btn" href="https://www.linkedin.com/in/agustin-ahlers/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </a>
          </div>
          <div className="col-4 m-auto">
            <Link className="btn btn-primary py-md-3" to="/Proyectos">Mis Proyectos</Link>
          </div>
        </div>
      </div>
    </>
  )
};
export const BotonesProye = () => {
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-4 m-auto">
          <Link className="btn btn-primary py-3 px-4" to="/">Inicio</Link>
        </div>
        <div className="col-4 m-auto">
          <a className="btn" href="https://www.linkedin.com/in/agustin-ahlers/" target="_blank">
            <svg className="w-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="100" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
          </a>
        </div>
        <div className="col-4 m-auto">
          <Link className="btn btn-primary py-3" to="/Contacto">Contactame</Link>
        </div>
      </div>
    </div>
  )
};
export const BotonesContac = () => {
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-4 m-auto">
          <Link className="btn btn-primary py-3 px-4" to="/">Inicio</Link>
        </div>
        <div className="col-4 m-auto">
          <a className="btn" href="https://www.linkedin.com/in/agustin-ahlers/" target="_blank">
            <svg className="w-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="100" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
          </a>
        </div>
        <div className="col-4 m-auto">
          <Link className="btn btn-primary py-3" to="/Proyectos">Mis Proyectos</Link>
        </div>
      </div>
    </div>
  )
};