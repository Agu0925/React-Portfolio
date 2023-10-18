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
    let img = `src/assets//Picapalos2.png`
    let img2 = `src/assets/AhlerSolutions2.png`
    let img3 = `src/assets/iconos/js.ico`
    return (
        <div className="container text-center mt-4">
            <div className="row">
                <div className="col-6 text-white">
                    <img src={img} alt="" className="rounded-circle w-50" />
                    <h2 className="fw-normal">El Picapalos</h2>
                    <p>Pagina creada con react para Centro de Maderas que cuenta con carrusel de imagenes, categorias de sus productos, buscador de productos y apartado de contacto.</p>
                    <p><a className="btn btn-secondary" href="https://elpicapalos.com" target="_blank">Ir al Sitio »</a></p>
                </div>
                <div className="col-6 text-white">
                    <img src={img2} alt="" className="rounded-circle w-50" />
                    <h2 className="fw-normal">Stock y Producción</h2>
                    <p>
                        Sistema facil de usar y muy personalizable cuenta con vinculacion de productos, actualizacion en timpo real, gestion de producción, seguimiento de inventario y sistema de Usuarios.
                    </p>
                    <p><a className="btn btn-secondary" href="#">Ver Detalles »</a></p>
                </div>
            </div>
        </div>
    );
};
// Vinculación de Productos: Conexión de productos "hijos" a productos "padre" para un seguimiento de stock integrado.
// Actualización en Tiempo Real: Cambios en el stock reflejados automáticamente para precisión y eficiencia.
// Gestión de Producción: Generación de listas de materiales para simplificar la planificación de la fabricación.
// Seguimiento de Inventario: Detalles sobre stock disponible, alertas de stock bajo y seguimiento de movimientos.