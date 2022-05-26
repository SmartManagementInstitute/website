import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <section className="landing__container">
            <div className="landing__container-content">
                <div className="landing__container-content--text">
                    <h1>Lorem ipsum, dolor sit <span>lorem</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est tempore enim, velit, eligendi
                        deserunt impedit, similique facilis non sed fuga ducimus voluptatum? Aperiam atque magni modi! Eius,
                        et ipsa?
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