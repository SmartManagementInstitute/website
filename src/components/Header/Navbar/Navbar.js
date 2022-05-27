import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import logo from '../../../assets/img/ICONO.png'


export default function Navbar() {
    function openMenu() {
        let menu = document.querySelector("#menu-bars");
        let navbar = document.querySelector(".navbar__items");
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");

    };
    return (
        <header>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <Image src={logo} width={30} height={30} />
                    <Link href='/'>
                        <a href="">Smart Management Institute</a>
                    </Link>
                    <a className="invisible">SMI</a>
                </div>
                <div className="navbar__items" id="menu">
                    <ul>
                        <Link href='/'>
                            <a className="">Home</a>
                        </Link>
                        <Link href='/page/contacto'>
                            <a className="">Contacto</a>
                        </Link>
                    </ul>
                </div>
                <div className="navbar__icon">
                    <FontAwesomeIcon className="i color1" icon={faBars} id="menu-bars" onClick={openMenu} />

                </div>
            </div>
        </header>
    )
}


