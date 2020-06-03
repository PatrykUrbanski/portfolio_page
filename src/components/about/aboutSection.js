import React, {useEffect, useState} from 'react';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade'

export const About = () => {


    return (
        <>
            <section className={"about"}>
                <div className={"about__content"}>
                    <h2 className={"about__content__title"}>About</h2>
                    <div className={"about__content__subtitle"}>
                        <h3 className={"about__content__subtitle__head"}>Junior Front-end Developer based in Wroclaw, PL</h3>
                        <div className={"about__content__subtitle__head"}>Driven by:</div>
                        <div className={"subtitles"}>
                            <Reveal effect={"subtitlesBg"}>
                                <span className={"subtitles__elem e1"}>new challenges</span>
                                <span className={"subtitles__elem e2"}>results</span>
                                <span className={"subtitles__elem e3"}>ambition</span>
                                <span className={"subtitles__elem e4"}>good food</span>
                            </Reveal>
                        </div>
                    </div>
                    <Fade bottom cascade>
                    <div className={"about__content__info"}>
                        <ul className={"techList"}>FRONT-END DEVELOPMENT
                            <li className={"techList__elem"}>React</li>
                            <li className={"techList__elem"}>JS/ES6</li>
                            <li className={"techList__elem"}>HTML5</li>
                            <li className={"techList__elem"}>CSS3</li>
                            <li className={"techList__elem"}>SASS</li>
                            <li className={"techList__elem"}>RWD</li>
                        </ul>

                        <ul className={"techList"}>TOOLS
                            <li className={"techList__elem"}>WebPack</li>
                            <li className={"techList__elem"}>Gulp</li>
                            <li className={"techList__elem"}>Git and GitHub</li>
                            <li className={"techList__elem"}>Adobe XD</li>
                        </ul>
                    </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}