import React, {useState} from 'react';
import Reveal from 'react-reveal/Reveal';
import { Element } from "react-scroll"

const uniqid = require('uniqid');



export const Project = ({project}) => {
    const [fullPageTeaser, setFullPageTeaser] = useState(false);
    const handleToggleFullPage = () => {
        setFullPageTeaser(!fullPageTeaser);
    };


    return (
        <>
            <Element name={"projects"} />
            <div className={"projects"}>
                <div className={"projects__content"}>
                    <Reveal effect={"opacityAnimationSliders"}>
                    <div className={"projects__content__teaser"}>
                        <div className={`box`} style={{height: `${fullPageTeaser ? "90vh" : "400px"}`, width: `${fullPageTeaser ? "90vw" : "280px"}`, backgroundImage: `url(${project.image})`}}>
                            <Reveal effect={"heightSlider"}>
                            <div className={`box__bgSlider`} />
                            </Reveal>
                            <div className={"box__imageInfo"} style={{display: `${fullPageTeaser ? "none" : "flex"}`}}>
                                <span className={"box__imageInfo__text"} onClick={handleToggleFullPage}>{project.name}</span>
                            </div>
                            <div className={`box__content ${fullPageTeaser ? "opacityAnimation" : "none"}`} style={{display: `${fullPageTeaser ? "block" : "none"}`}}>
                                <div className={"box__content__icons"}>
                                    <a href={project.github} className={"box__content__icons__elem"}>
                                        <i className="fab fa-github" />
                                    </a>
                                    <a href={project.live} className={"box__content__icons__elem"}>
                                        <i className="fas fa-globe" />
                                    </a>
                                </div>
                                <div className={"title"}>{project.name}</div>
                                <div className={"title__details"}>
                                    <div className={"title__details__elem"}>
                                        {project.description}
                                    </div>
                                    <ul className={"title__details__elem list"}>Tech stack & tools:
                                        {project.tech.map(el => <li key={uniqid()}>{el}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <button className={"box__backBtn"} style={{display: `${fullPageTeaser ? "block" : "none"}`}} onClick={handleToggleFullPage}>
                                <i className="fas fa-arrow-circle-left"/>
                            </button>
                        </div>
                        <div className={"projects__titles"}>
                            <Reveal effect={"widthSlider"}>
                            <div className={"projects__titles__slider"} />
                            </Reveal>
                            <div className={"name"}>
                                {project.logo.map(el => <span key={uniqid()} className={"name__elem"}>{el}</span> )}
                            </div>
                            <div className={"number"}>{project.number}</div>
                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>
        </>
    )
};