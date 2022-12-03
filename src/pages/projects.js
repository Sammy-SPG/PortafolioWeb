import React, { useEffect, useRef, useState } from "react";
import Nabvar from "../components/nabvar";
import styleProject from "../styles/Projects.module.css";
import { UseModal } from "../hooks/useModal";
import WebFont from 'webfontloader';
import Modal from "../components/modal";
import "../styles/main.css";
import LazyLoad from 'react-lazyload';


export default function Projects() {

    const [url, setUrl] = useState(null);
    const mountRef = useRef(null);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Lato', 'Rubik']
            }
        })
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

    const { isOpen, openModal, closeModal } = UseModal(false);

    return (
        <main className={styleProject.main}>
            <Nabvar page="projects" />
            {window.innerWidth > 800 ? null : <img className='hamburgesa' src="https://img.icons8.com/cotton/64/000000/menu.png" onClick={() => toShowMenu()} ref={mountRef} alt = "Hamburguesa"/>}
            <div className={styleProject.container}>
                <div className={styleProject.containerProjectGrid}>
                    <div className={styleProject.project}>
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_planetario.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Inmercion en un recorrido virtual con modelos 3D, echo en React y three.js</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/RecorridoVirtual_Planetario" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://planetariodigitalchimalhuacan.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/o3NtulvPscY') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_templatePortafolio.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Plantilla web de un portafolio, responsiva con HTML, CSS y JavaScript</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/TemplatePortafolio" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://comfy-tapioca-8bf087.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/lkN0HWLsEsQ') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_canvas.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Aplicacion web para dibijar tipo paint, echa con JavaScript canvas. Ponte creativo!</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/canvas.github.io" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://sweet-froyo-fb3c15.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/6zxHcE9OW0g') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_lazyLoading.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Proyecto con carga progresiva, echo con JavaScript y API rick and morty</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/lazyLoadingJavaScript" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://rococo-axolotl-6f45c1.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/20Nb6NM38Hw') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_carousel.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Plantilla de carousel de imagenes responvivo echo con JavaScript y Glider</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/Carousel" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://extraordinary-bonbon-e164ec.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/dL4ac1pF_T8') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_animacionThree.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Animacion de plano en movimiento con efecto al pasar el mouse echo con React y Three.js</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/animacionThree" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://storied-speculoos-a28a3a.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/DVlZGWLrz7Q') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_carrito.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Carrito de compras con localStorage y JavaScript DOM y peticiones asyncronas</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/CarritoDeCompras" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://carritodecomprasspg.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/5_oAfe21vgw') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_tiendaOnline.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Tienda en linea con NodeJs y Stripe, distintos metodos de pagos y responsiva a distintos dispositivos</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/tienedaOnline" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://tiendaonlinespg.herokuapp.com/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/LNb_PAOO38s') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/Proyecto_procesadorTextos.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Procesador de texto para comentarios echo con javaScript. <br /> Prueba escribiendo algo :) </p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/ProcesadorTextoJS" target='_blank' rel='noopener noreferrer' >Github</a>
                                <a href="https://guileless-tarsier-ba6394.netlify.app/" target='_blank' rel='noopener noreferrer' >link</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/zwKL3wxpgJ4') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_cecyHub.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Proyecto tipo red social para subir videos y archivos, con cuenta personal para cada usuario. echo con PHP y JavaScript <br /> Este fue un proyecto escolar y no cuento con el codigo, ver el video para saber mas</p>
                            <div className={styleProject.projectFoother}>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/o3NtulvPscY') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/Proyecto_robot.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Proyecto de automatizacion de robot Takeshi para ir a unas coordenadas aleatorias evitando colisiones, echo en python y ROS Noetic</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/Etapa02_TESCHI_Espacial" target='_blank' rel='noopener noreferrer' >Github</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/zbk6qlVYo-0') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleProject.project} >
                        <LazyLoad height="100%" once={true}><img src="./img/proyecto_Java.png" alt="imagen ilustrativa del proyecto" className={styleProject.imgProject} /></LazyLoad>
                        <div className={styleProject.projectBody}>
                            <p>Programa bitacora de estudio con Java y conexion a base de datos</p>
                            <div className={styleProject.projectFoother}>
                                <a href="https://github.com/Sammy-SPG/ProyectoJava" target='_blank' rel='noopener noreferrer' >Github</a>
                                <button onClick={() => { openModal(); setUrl('https://www.youtube.com/embed/H8RNM9AGPtM') }}>Ver video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} close={() => closeModal()} >
                {isOpen ? <iframe style={{ width: '90vw', height: '90vh' }} src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : null}
            </Modal>
        </main>
    );
}