import React from 'react';
import { Element } from "react-scroll"

export const LandingPage = () => {
    return (
        <>
            <Element name={"start"}/>
            <main className={"landingPage"}>
                <div className={"landingPage__content"}>
                    <div className={"title"}>
                        <div className={"title__name"}>
                            <div className={"title__name__slider"}/>
                            <div className={"title__name__text"}>Patryk Urbański</div>
                        </div>
                        <div className={"title__profession"}>
                            <div className={"title__profession__text"}>Front-end developer</div>
                            <div className={"title__profession__subSlider"} />
                            <div className={"title__profession__slider"} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}