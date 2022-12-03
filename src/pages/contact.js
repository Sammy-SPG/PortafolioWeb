import React, { useEffect, useRef } from "react";
import Nabvar from "../components/nabvar";
import styleContact from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import WebFont from 'webfontloader';
import "../styles/main.css";

export default function Contact() {

    const form = useRef();
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ks0q5v8', 'template_owyo1rp', form.current, 'id_9eibnHDGsY8QPh')
            .then((result) => {
                const { status } = result;
                if (status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensaje enviado con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    text: error.text + ':c',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (

        <main className={styleContact.main}>
            <Nabvar page="contact" />
            {window.innerWidth > 800 ? null : <img className='hamburgesa' src="https://img.icons8.com/cotton/64/000000/menu.png" onClick={() => toShowMenu()} ref={mountRef} alt = "Hamburguesa"/>}
            <div className={styleContact.container}>
                <h2 className={styleContact.title}>Contactame</h2>
                <form className={styleContact.form} onSubmit={sendEmail} ref={form}>
                    <div className={styleContact.containerGroup}>
                        <div className={styleContact.formGroup}>
                            <label>Nombre</label>
                            <input type="text" className={styleContact.formControl} name="form_name" autoComplete="off" />
                        </div>
                        <div className={styleContact.formGroup}>
                            <label>Email</label>
                            <input type="text" className={styleContact.formControl} name="form_email" autoComplete="off" />
                        </div>
                    </div>
                    <div className={styleContact.formGroup}>
                        <label>Mensaje</label>
                        <textarea className={styleContact.formControl} name="form_message" ></textarea>
                    </div>
                    <button className={styleContact.btn} type="submit">Enviar</button>
                </form>
                <div className={styleContact.contact}>
                    <h3>Mis redes sociales</h3>
                    <div>
                        <div className={styleContact.contactItem}><a href="https://www.linkedin.com/in/samuel-palomares-38b804253/" target='_blank' rel='noopener noreferrer' ><img src="https://img.icons8.com/fluency/48/000000/linkedin-2.png" alt="Linkedin"/>  <span style={{ paddingTop: '8px' }}>linkedin</span></a></div>
                        <div className={styleContact.contactItem}><a href="https://github.com/Sammy-SPG" target='_blank' rel='noopener noreferrer' ><img src="https://img.icons8.com/sf-regular-filled/48/000000/github.png" alt="Github"/>  <span>Github</span></a></div>
                        <div className={styleContact.contactItem}><a href="https://www.youtube.com/channel/UC3htGF9aIZPdPCCHO6sTQLg" target='_blank' rel='noopener noreferrer' ><img src="https://img.icons8.com/external-prettycons-flat-prettycons/48/000000/external-youtube-multimedia-prettycons-flat-prettycons.png" alt="Youtube"/>  <span>Youtube</span></a></div>
                        <div className={styleContact.contactItem}><a href="https://www.facebook.com/alenwalker.spjv" target='_blank' rel='noopener noreferrer' ><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="Facebook"/>  <span>Facebook</span></a></div>
                    </div>
                </div>
            </div>
        </main>
    );
}