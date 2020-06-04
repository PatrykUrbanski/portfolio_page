import React from 'react';
import Fade from 'react-reveal/Fade'

export const ContactSection = () => {
    return (
        <>
            <section className={"contact"}>
                <div className={"contact__content"}>
                    <h2 className={"contact__content__title"}>Contact me.</h2>
                    <Fade bottom>
                    <div className={"contact__content__details"}>
                        <a className={"contact__content__details__elem"}
                           href={"#"} onClick={event => event.preventDefault()}>
                            pat.urbanski@gmail.com
                        </a>
                        <a className={"contact__content__details__elem"}
                           target="_blank" rel="noopener noreferrer"
                           href={"https://github.com/PatrykUrbanski"}>
                            GitHub
                        </a>
                        <a className={"contact__content__details__elem"}
                           target="_blank" rel="noopener noreferrer"
                           href={"https://www.facebook.com/patryk.urbansky/"}>
                            Facebook
                        </a>
                        <a className={"contact__content__details__elem"}
                           target="_blank" rel="noopener noreferrer"
                           href={"https://www.linkedin.com/in/patryk-urbanski"}>
                            LinkedIn
                        </a>
                    </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}