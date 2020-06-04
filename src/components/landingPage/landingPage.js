import React from 'react';

export const LandingPage = () => {
    return (
        <>
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
                    <div className={"landingPage__content__arrow"}>
                        <span className={"arrowPart"}/>
                    </div>
                </div>
            </main>
        </>
    )
}