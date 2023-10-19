import ReactPlayer from "react-player";
//Titulo
export const TitProyectos = () => {
    return (
        <p className="h1 text-primary text-center mt-2">Proyectos</p>
    )
};
//Carousel
export const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.1</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.2</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.3</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
};
//Proyectos
export const Pro = () => {
    let img = `/React-Portfolio/src/assets//Picapalos2.png`
    let img2 = `/React-Portfolio/src/assets/AhlerSolutions2.png`
    return (
        <div className="container text-center text-white mt-4">
            <div className="row my-4">
                <div className="col-md-6 m-auto">
                    <img src={img} alt="" className="rounded-circle w-50" />
                    <h2 className="fw-normal">El Picapalos</h2>
                    <p>Pagina creada con react para Centro de Maderas que cuenta con carrusel de imagenes, categorias de sus productos, buscador de productos y apartado de contacto.</p>
                    <p><a className="btn btn-primary" href="https://elpicapalos.com" target="_blank">Ir al Sitio »</a></p>
                </div>
                <div className="col-md-6 m-auto">
                    <img src={img2} alt="" className="rounded-circle w-50" />
                    <h2 className="fw-normal">Stock y Producción</h2>
                    <p>
                        Sistema facil de usar y muy personalizable cuenta con vinculacion de productos, actualizacion en tiempo real, gestion de producción, seguimiento de inventario y sistema de Usuarios.
                    </p>
                    <p><a className="btn btn-primary" href="#stock">Ver Detalles</a></p>
                </div>
            </div>
            <hr />
            <div className="row my-4" id='stock'>
                <div className="mb-3">
                    <ReactPlayer className='w-100' controls loop playing={true} url='/React-Portfolio/src/assets/Stock.mp4' />
                </div>
                <div className="">
                    <p className="lead">El Sistema de Gestión de Stock y Producción es una herramienta versátil y eficiente diseñada para optimizar el control de inventario y facilitar la gestión de productos en su empresa. Una de las características sobresalientes de este programa es la capacidad de vincular productos "hijos" a productos "padres", lo que permite un control más preciso y sencillo del stock. Cuando se realiza una venta o un ajuste en el inventario de un producto "padre", automáticamente se refleja en los productos "hijos", garantizando una actualización precisa del stock en tiempo real.
                        Además de la gestión de stock, el programa incluye una potente función de producción. Al ingresar los productos que desea fabricar, el sistema generará una lista detallada de todos los materiales necesarios para completar la producción. Esto simplifica el proceso de planificación y abastecimiento de insumos, evitando pérdidas de tiempo y recursos innecesarios.</p>
                </div>
            </div>
        </div>
    )
};