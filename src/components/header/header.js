import React, {useState} from 'react';
import {Link as LinkScroll} from 'react-scroll'

export const Header = ({pageChanger, isMobile}) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };

    const handleNavClick = (e) => {
        e.preventDefault();
        const number = e.target.getAttribute("href");
        pageChanger(number);
        handleOpenMenu();
    };


    return (
        <>
            <header className={"header"}>
                <div className={"header__menuIcon"} onClick={handleOpenMenu} style={{color: `${openMenu ? "white" : "black"}`}}>
                    <span className={"header__menuIcon__elem"} style={{opacity: `${openMenu ? "0" : "1"}`}}/>
                    <span className={"header__menuIcon__elem"} style={{transform: `${openMenu ? "translate(0%, 175%) rotate(-45deg)" : "none"}`}}/>
                    <span className={"header__menuIcon__elem"} style={{transform: `${openMenu ? "rotate(45deg)" : "none"}`}}/>
                    <span className={"header__menuIcon__elem"} style={{opacity: `${openMenu ? "0" : "1"}`}}/>
                </div>
                <div className={`menuBg ${openMenu && "bgShow"}`}/>


                {!isMobile ? <div className={`header__menu ${openMenu && "show"}`}>
                    <a className={"header__menu__elem"} href={"0"}
                       onClick={e => {
                           handleNavClick(e, e.target)
                       }}>
                        Start
                    </a>
                    <a className={"header__menu__elem"} href={"1"}
                       onClick={e => {
                           handleNavClick(e, e.target)
                       }}>
                        About
                    </a>
                    <div className={"header__menu__elem project"}>Projects
                        <a className={"header__menu__elem projectName"} href={"2"}
                           onClick={e => {
                               handleNavClick(e, e.target)
                           }}>
                            No one's shoes
                        </a>
                        <a className={"header__menu__elem projectName"} href={"3"}
                           onClick={e => {
                               handleNavClick(e, e.target)
                           }}>
                            Follow the Alpha
                        </a>
                        <a className={"header__menu__elem projectName"} href={"4"}
                           onClick={e => {
                               handleNavClick(e, e.target)
                           }}>
                            Portfolio Page
                        </a>
                    </div>
                    <a className={"header__menu__elem"} href={"5"}
                       onClick={e => {
                           handleNavClick(e, e.target)
                       }}>
                        Contact
                    </a>
                </div>
                    : <div className={`header__menu ${openMenu && "show"}`}>
                        <LinkScroll className={"header__menu__elem"} spy={true} smooth={true} to={"start"} containerId={"mobileTemplate"} onClick={handleOpenMenu}>Start</LinkScroll>
                        <LinkScroll className={"header__menu__elem"} spy={true} smooth={true} to={"about"} containerId={"mobileTemplate"} onClick={handleOpenMenu}>About</LinkScroll>
                        <div className={"header__menu__elem project"}>Projects
                            <LinkScroll className={"header__menu__elem projectName"} spy={true} smooth={true} to={"noOnesShoes"} containerId={"mobileTemplate"} onClick={handleOpenMenu}>No one's Shoes</LinkScroll>
                            <LinkScroll className={"header__menu__elem projectName"} spy={true} smooth={true} to={"followTheAlpha"} containerId={"mobileTemplate"} onClick={handleOpenMenu}>Follow the Alpha</LinkScroll>
                            <LinkScroll className={"header__menu__elem projectName"} spy={true} smooth={true} to={"portfolioPage"} containerId={"mobileTemplate"} onClick={handleOpenMenu}>Portfolio Page</LinkScroll>
                        </div>
                        <LinkScroll className={"header__menu__elem"} to={"contact"} spy={true} smooth={true} containerId={"mobileTemplate"} onClick={handleOpenMenu}>Contact</LinkScroll>
                    </div>
                }
            </header>
        </>
    )
};
