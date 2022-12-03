import React, { useEffect, useRef, useState } from "react";
import WebFont from 'webfontloader';
import Nabvar from "../components/nabvar";
import styleHome from "../styles/Home.module.css";
import Scene from "../components/scene";
import "../styles/main.css";
import BodyIndex from "../components/bodyIndex";

export default function Home() {
    const mountRef = useRef(null);
    const [view, setView] = useState(false);

    const toShowMenu = () => {
        document.querySelector('#nabvar').classList.toggle('flag');
        const hamburgesa = mountRef.current;
        hamburgesa.classList.toggle('ShowMenu');
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Lato', 'Rubik']
            }
        });
    }, []);


    return (
        <main style={{maxWidth: '100vw'}}>
            <Nabvar page="home" />
            {window.innerWidth > 800 ? null : <img className='hamburgesa' src="https://img.icons8.com/cotton/64/000000/menu.png" onClick={() => toShowMenu()} ref={mountRef} alt = "Hamburguesa"/>}
            <div className={styleHome.container}>
                {window.innerWidth > 800 ? <Scene x={-1} y={-1.5} view={setView} scale = {0.6} /> : <Scene x={0} y={-0.5} view={setView} scale = {0.4} />}
                {view ? <BodyIndex /> : null}
            </div>
        </main>
    );
}