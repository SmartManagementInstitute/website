import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <section className="landing__container">
            <div className="landing__container-content">
                <div className="landing__container-content--text">
                    <h1>Smart Management Institute <span>SAC</span></h1>
                    <p>Es una sociedad conformada por un equipo multidisciplinario de profesionales con reconocida trayectoria, con especialización en diferentes áreas como el desarrollo de proyectos de inversión pública y privada.
                    </p>
                    <Link href='/page/contacto'>
                        <a className="btn">Contacto</a>
                    </Link>
                </div>
                <div className="landing__container-content--img">
                    <img src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg" alt="" />
                </div>
            </div>
        </section>

    )
}