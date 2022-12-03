import Typed from 'react-typed';
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import LazyLoad from 'react-lazyload';
import styleHome from "../styles/Home.module.css";

export default function BodyIndex() {

    let flexContainerSkill = useRef(null);
    let containerAboutSkill = useRef(null);
    let logo = useRef(null);

    useEffect(() => {
        observer.observe(flexContainerSkill);
        observerAboutSkill.observe(containerAboutSkill);
        observeLogo.observe(logo);
    }, []);

    const animationSkill = (entries) => {
        if (entries[0].isIntersecting) {
            TweenMax.from(flexContainerSkill, 3, { opacity: 1, x: 150, ease: Power3.easeOut });
            observer.unobserve(flexContainerSkill);
        }
    }

    const animationAboutSkill = (entries) => {
        if (entries[0].isIntersecting) {
            TweenMax.from(containerAboutSkill, 3, { opacity: 1, x: -200, ease: Power3.easeOut });
            observerAboutSkill.unobserve(containerAboutSkill);
        }
    }

    const animationLogo = (entries) => {
        if (entries[0].isIntersecting) {
            TweenMax.from(logo, 2, { opacity: 1, y: -200, ease: Power3.easeOut });
            observeLogo.unobserve(logo);
        }
    }

    const observer = new IntersectionObserver(animationSkill, { rootMargin: "10%" });
    const observerAboutSkill = new IntersectionObserver(animationAboutSkill, { rootMargin: "5%" });
    const observeLogo = new IntersectionObserver(animationLogo, { rootMargin: "20%" });


    return (
        <>
            <div className={styleHome.textStart}>
                <h2 className={styleHome.textRedStart}><Typed strings={['Hola!']} typeSpeed={80} showCursor={false} /></h2>
                <h2 className={styleHome.textWhiteStart}><Typed strings={['Soy Samuel', 'Soy un desarrollador web full-stack']} typeSpeed={60} backSpeed={100} loop /></h2>
            </div>

            <div className={styleHome.containerSkill}>
                <h2 className={styleHome.titleSkill}>Mis objetivos</h2>
                <div className={styleHome.flexContainerSkill} ref={el => { flexContainerSkill = el }}>
                    <div className={styleHome.skill}>
                        <div><LazyLoad height="100%" once={true}><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/72/000000/external-Performance-business-and-marketing-bearicons-outline-color-bearicons.png" alt="Performance" /></LazyLoad></div>
                        <p>Buen rendimiento</p>
                    </div>
                    <div className={styleHome.skill}>
                        <div><LazyLoad height="100%" once={true}><img src="https://img.icons8.com/external-filled-outline-lima-studio/72/000000/external-adaptive-user-experience-filled-outline-lima-studio.png" alt="Adaptative" /></LazyLoad></div>
                        <p>Diseño adaptativo</p>
                    </div>
                    <div className={styleHome.skill}>
                        <div><LazyLoad height="100%" once={true}><img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/72/000000/external-head-design-thinking-xnimrodx-lineal-color-xnimrodx-3.png" alt="intuitivo" /></LazyLoad></div>
                        <p>Intuitivo</p>
                    </div>
                    <div className={styleHome.skill}>
                        <div><LazyLoad height="100%" once={true}><img src="https://img.icons8.com/color/72/FA5252/launched-rocket--v1.png" alt="Dinamico" /></LazyLoad></div>
                        <p>Dinamico</p>
                    </div>
                </div>
                <div className={styleHome.containerAboutSkill} ref={el => { containerAboutSkill = el }}>
                    <div className={styleHome.aboutSkillIMG}>
                        <LazyLoad height="100%" once={true} offset={200} className={styleHome.imgLazy}><img src="./YoFacherito.png" alt="Yo mero" className={styleHome.Aboutimg} /></LazyLoad>
                        <div className={styleHome.aboutSkillDescription}>
                            <p>Soy un apacionado por el conocimiento y la creatividad todas mis habilidades y conocimientos estan validados por distintos <Link to="/projects" >Proyectos</Link> que eh realizado a lo largo del tiempo <br /> <Link to="/contact" >!Creemos algo especial!</Link></p>
                        </div>
                    </div>
                    <div className={styleHome.containerSkillTecno}>
                        <div className={styleHome.skillTecno}>
                            <h2>Tecnologias</h2>
                            <div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" /><div><span style={{ width: '90%' }}></span>90%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" /><div><span style={{ width: '90%' }}></span>90%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" /><div><span style={{ width: '90%' }}></span>90%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="NodeJS" /><div><span style={{ width: '80%' }}></span>80%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/000000/external-sql-computer-programming-flaticons-lineal-color-flat-icons.png" alt="SQL" /><div><span style={{ width: '80%' }}></span>80%</div></div>
                            </div>
                        </div>
                        <div className={styleHome.skillTecno}>
                            <h2>Bibliotecas</h2>
                            <div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" /><div><span style={{ width: '90%' }}></span>90%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/plasticine/48/000000/react.png" alt="React.js" /><div><span style={{ width: '80%' }}></span>80%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/ios/48/000000/express-js.png" alt="Express" /><div><span style={{ width: '70%' }}></span>70%</div></div>
                                <div className={styleHome.tecno}><img src="./three-js-seeklogo.com.svg" width="48px" height="48px" alt="Three.js" /><div><span style={{ width: '60%' }}></span>60%</div></div>
                            </div>
                        </div>
                        <div className={styleHome.skillTecno}>
                            <h2>Otras tecnologias</h2>
                            <div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt="Java" /><div><span style={{ width: '60%' }}></span>60%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/officel/48/000000/php-logo.png" alt="PHP" /><div><span style={{ width: '50%' }}></span>50%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="Python" /><div><span style={{ width: '50%' }}></span>50%</div></div>
                                <div className={styleHome.tecno}><img src="https://img.icons8.com/color/48/000000/c-plus-plus.png" alt="c++" /><div><span style={{ width: '40%' }}></span>40%</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styleHome.containerLogo}>
                    <img src="/logo.jpg" alt="Logo CodeSam" className={styleHome.logo} ref={el => { logo = el }} />
                    <p>Palomares Gonzalez Samuel</p>
                </div>
            </div>
        </>
    )
}