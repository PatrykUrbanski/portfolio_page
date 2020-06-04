import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade'

export const ContactSection = () => {
    return (
        <>
            <section className={"contact"}>
                <div className={"contact__content"}>
                    <h2 className={"contact__content__title"}>Contact me.</h2>
                    <Fade bottom>
                    <div className={"contact__content__details"}>
                        <a className={"contact__content__details__elem"} href={"#"}>pat.urbanski@gmail.com</a>
                        <a className={"contact__content__details__elem"} href={"#"}>GitHub</a>
                        <a className={"contact__content__details__elem"} href={"#"}>Facebook</a>
                        <a className={"contact__content__details__elem"} href={"#"}>LinkedIn</a>
                    </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}