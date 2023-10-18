import { useState, useEffect } from "react";
import imgreac from './assets/react.svg'
//Imagenes
const Imagen = ({ i }) => {
  let img = `src/assets/iconos/${i}.ico`
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
          <img src={imgreac} className="img-fluid w-75" alt="MiFoto" />
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
