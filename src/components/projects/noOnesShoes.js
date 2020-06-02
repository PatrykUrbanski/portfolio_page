import React, {useState} from 'react';

export const NoOnesShoes = () => {
    const [fullPageTeaser, setFullPageTeaser] = useState(false);

    const handleToggleFullPage = () => {
        setFullPageTeaser(!fullPageTeaser);
    };

    return (
        <>
            <div className={"projects"}>
                <div className={"projects__content"}>
                    <div className={"projects__content__teaser"}>
                        <div className={`box`} style={{height: `${fullPageTeaser ? "90vh" : "300px"}`, width: `${fullPageTeaser ? "90vw" : "210px"}`}}>
                            <div className={"box__bgSlider"}/>
                            <div className={"box__imageInfo"} style={{display: `${fullPageTeaser ? "none" : "flex"}`}}>
                                <span className={"box__imageInfo__text"} onClick={handleToggleFullPage}>Follow the Alpha</span>
                            </div>
                            <div className={"box__content"} style={{display: `${fullPageTeaser ? "block" : "none"}`, opacity: `${fullPageTeaser ? "1" : "0"}`}}>
                                <div className={"box__content__icons"}>
                                    <a href={"#"} className={"box__content__icons__elem"}>
                                        <i className="fab fa-github" />
                                    </a>
                                    <a href={"#"} className={"box__content__icons__elem"}>
                                        <i className="fas fa-globe" />
                                    </a>
                                </div>
                                <div className={"title"}>Follow the Alpha</div>
                                <div className={"title__details"}>
                                    <div className={"title__details__elem"}>
                                        Equity portfolio management and Trader Journal
                                        App. The project included Alpha Strategies, which
                                        are an example of asset allocations with real end-of-
                                        day prices. Trader’s Journal App is the place to save
                                        your traders and it also helps to track the
                                        investment portfolio. It supports all US stocks and
                                        ETF’s.
                                    </div>
                                    <ul className={"title__details__elem list"}>Tech stack & tools:
                                        <li>React (with React Router, hooks)</li>
                                        <li>CSS3 / SASS</li>
                                        <li>fetch API</li>
                                        <li>Webpack</li>
                                    </ul>
                                </div>
                            </div>
                            <button className={"box__backBtn"} style={{display: `${fullPageTeaser ? "block" : "none"}`}} onClick={handleToggleFullPage}>
                                <i className="fas fa-arrow-circle-left"/>
                            </button>
                        </div>
                        <div className={"projects__number"}>.02</div>
                    </div>
                </div>
            </div>
        </>
    )
}