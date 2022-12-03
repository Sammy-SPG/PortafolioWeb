import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WebFont from 'webfontloader';

export default function Nabvar({ page }) {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu']
            }
        });

        return () => (
            <>
            </>
        )
    }, []);

    return (
        <div className="nabvar" id="nabvar">
            <img src="/logo.jpg" alt="Logo CodeSam" className="logo" />
            <div className="nabvar-items">
                <h4 className="nabvar-text"> <Link to="/" className={page === 'home' ? page : null} >Inicio</Link></h4>
                <h4 className="nabvar-text"> <Link to="/about" className={page === 'about' ? page : null} >Sobre mi</Link></h4>
                <h4 className="nabvar-text"> <Link to="/contact" className={page === 'contact' ? page : null} >Contacto</Link></h4>
                <h4 className="nabvar-text"> <Link to="/projects" className={page === 'projects' ? page : null} >Proyectos</Link></h4>
            </div>
        </div>
    );
}