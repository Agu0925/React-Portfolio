export const Contacto = () => {
    return (
            <div className="container vh-100">
                <div className="row h-100">
                    <div className="m-auto">
                        <p className="h1 text-white text-center mb-3">Contactame desde este formulario!!!</p>
                        <form id="msj" action="https://formsubmit.co/AhlerSolutions@hotmail.com" method="POST" className="col-md-6 m-auto text-white">
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombre" pattern="^\S*$" maxlength="50" required="" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="email@ejemplo.com" pattern="^\S*$" maxlength="254" required="" />
                            </div>
                            <div className="mb-3">
                                <label for="mensaje" className="form-label">Mensaje</label>
                                <textarea className="form-control" name="mensaje" id="mensaje" placeholder="Deja tu mensaje aqui!!!" rows="3" pattern="^\S*$" maxlength="250" required=""></textarea>
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" id="btn-mail" className="btn btn-primary p-3">Enviar</button>
                            </div>
                            <input type="hidden" name="_next" value="http://127.0.0.1:5173/contacto/enviado" />
                        </form>
                        <p className="h1 text-white text-center">AhlerSolutions@hotmail.com</p>
                    </div>
                </div>
            </div>
    )
};
