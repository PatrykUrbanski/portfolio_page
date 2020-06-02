import React, {useState} from 'react';

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
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
                <div className={`header__menu ${openMenu && "show"}`}>
                    <a className={"header__menu__elem"} href={"#"}>Logo</a>
                    <a className={"header__menu__elem"} href={"#"}>Project</a>
                    <a className={"header__menu__elem"} href={"#"}>Contact</a>
                    <a className={"header__menu__elem"} href={"#"}>Something</a>
                </div>
            </header>
        </>
    )
}