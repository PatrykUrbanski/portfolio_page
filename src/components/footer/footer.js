import React from 'react';

export const Footer = () => {
    return (
        <>
            <footer className={"footer"}>
                <a href={"https://github.com/PatrykUrbanski"}
                   target="_blank" rel="noopener noreferrer"
                   className={"footer__elem"}>
                    <i className="fab fa-github-square"/>
                </a>
                <a href={"https://www.facebook.com/patryk.urbansky/"}
                   target="_blank" rel="noopener noreferrer"
                   className={"footer__elem"}>
                    <i className="fab fa-facebook-square"/>
                </a>
                <a href={"https://www.linkedin.com/in/patryk-urbanski"}
                   target="_blank" rel="noopener noreferrer"
                   className={"footer__elem"}>
                    <i className="fab fa-linkedin"/>
                </a>
            </footer>
        </>
    )
}