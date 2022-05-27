import React from 'react'

export default function CardContainer({ children }) {
    return (
        
                <section className="contacto__container">
                    <div className="contacto__container-box">
                        <div className="contacto__container-box__img">
                        </div>
                        <div className="contacto__container-box__form">
                            <h2>Contactanos</h2>
                            <form action="https://formsubmit.co/smmainstitute@gmail.com" method="POST">
                                <input type="text" className="" name="nombre" placeholder="Nombre" required/>
                                <input type="text" className="" name="email" placeholder="Email" required/>
                                <textarea name="mensaje" placeholder="Mensaje"></textarea>
                                <button className="">Enviar</button>
                            </form>
                        </div>
                    </div>
                </section>
       
    )
}