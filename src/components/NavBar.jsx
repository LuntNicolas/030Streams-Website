import {navLinks} from "../constants/index.js";
import {useEffect, useState} from "react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    <div className="logo-wrapper">
                        <img src="./images/030-logo.svg " alt="logo" className="h-full w-auto"/>
                    </div>
                    030 Sessions
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn">
                    <div className="inner">
                        <span>
                            Contact us
                        </span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar
