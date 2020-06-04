import React, {useState} from 'react';

export const Header = ({pageChanger}) => {
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
                <div className={`header__menu ${openMenu && "show"}`}>
                    <a className={"header__menu__elem"} href={"0"} onClick={e => {handleNavClick(e, e.target)}}>Start</a>
                    <a className={"header__menu__elem"} href={"1"} onClick={e => {handleNavClick(e, e.target)}}>About</a>
                    <a className={"header__menu__elem"} href={"2"} onClick={e => {handleNavClick(e, e.target)}}>Project</a>
                    <a className={"header__menu__elem"} href={"4"} onClick={e => {handleNavClick(e, e.target)}}>Contact</a>
                </div>
            </header>
        </>
    )
}