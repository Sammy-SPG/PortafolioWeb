import React, { useEffect, useRef } from "react";
import Nabvar from "../components/nabvar";
import styleAbout from "../styles/About.module.css";
import WebFont from 'webfontloader';
import "../styles/main.css";
import LazyLoad from 'react-lazyload';
import { TweenMax, Power3 } from "gsap";

export default function About() {
    const mountRef = useRef(null);
    let title1 = useRef(null);
    let title2 = useRef(null);
    let title3 = useRef(null);

    const animationTitle1 = (entries) => {
        if (entries[0].isIntersecting) {
            TweenMax.from(title1, 3, { opacity: 1, y: -300, ease: Power3.easeOut });
            observer.unobserve(title1);
        }
    }

    const animationTitle2 = (entries) => {
        if (entries[0].isIntersecting) {
            TweenMax.from(title2, 3, { opacity: 1, x: -300, ease: Power3.easeOut });
            observer2.unobserve(title2);
        }
    }
    const animationTitle3 = (entries) => {
        if (entries[0].isIntersecting) {
            TweenMax.from(title3, 3, { opacity: 1, y: 300, ease: Power3.easeOut });
            observer3.unobserve(title3);
        }
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Anton', 'DM Sans']
            }
        });

        observer.observe(title1);
        observer2.observe(title2);
        observer3.observe(title3);
    }, []);

    const toShowMenu = () => {
        document.querySelector('#nabvar').classList.toggle('flag');
        const hamburgesa = mountRef.current;
        if (hamburgesa.style.right === '62%') {
            hamburgesa.style.right = '5px';
        } else {
            hamburgesa.style.right = '62%';
        }
    }

    const observer = new IntersectionObserver(animationTitle1, { rootMargin: '0px' });
    const observer2 = new IntersectionObserver(animationTitle2, { rootMargin: '0px' });
    const observer3 = new IntersectionObserver(animationTitle3, { rootMargin: '0px' });

    return (
        <main className={styleAbout.main}>
            <Nabvar page="about" />
            {window.innerWidth > 800 ? null : <img className='hamburgesa' src="https://img.icons8.com/cotton/64/000000/menu.png" onClick={() => toShowMenu()} ref={mountRef} alt="Hamburguesa" />}

            <div className={styleAbout.containerAbout}>
                <div className={styleAbout.containerAboutTitle}>
                    <div className={styleAbout.containerTitle}>
                        <h2 className={styleAbout.aboutTitle} ref={el => { title1 = el }}>Creo aplicaciones web reales</h2>
                        <h2 className={styleAbout.aboutTitle} ref={el => { title2 = el }}>usando las</h2>
                        <h2 className={styleAbout.aboutTitle} ref={el => { title3 = el }}>ultimas tecnologias</h2>
                    </div>
                </div>
                <div className={styleAbout.AboutImg}><LazyLoad height="100%" once={true} offset={200}><img src="./yoNormalito.jpg" alt="Yo mero" className={styleAbout.img} /></LazyLoad></div>
                <div className={styleAbout.AboutDescription}>
                    <p>Hola, soy <span>Samuel Palomares</span>. Soy una persona con múltiples talentos en busca de una oportunidad.</p>
                    <p>Impulsado por altos niveles de energía y entusiasmo, nunca estoy satisfecho con un solo pensar de ideas. Tengo nuevos oídos para una nueva música; nuevos ojos para las cosas más lejanas: nueva conciencia para verdades hasta ahora mudas.</p>
                    <p>Mi exuberante energía me impulsa a la búsqueda de muchos intereses, pasatiempos y áreas de estudio. Aprendo rápido, soy capaz de adquirir nuevas habilidades de manera autodidacta ya que me gusta seguir desafiando me y hacer cosas interesantes que importen.</p>
                    <p>Me defino como una persona proactiva. Siempre tengo la iniciativa de ir mejorando día a día, realizando actos encaminados a generar mejoras en función de las circunstancias. Tengo compromiso e implicación con las cosas y además soy perseverante.</p>
                </div>
            </div>
        </main>
    );
}