import React from "react";
import Nav from './Nav'

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="header__info">
                <div className="header__title">
                    <h1>I'm Zach Imerzel</h1>
                    <p> A <mark>front-end developer</mark> based in Berthoud, CO</p>
                </div>
            </div>
            <div className="header__nav">
                <Nav />
            </div>
            <div className="arrow bounce">
                <p><i class='bx bx-mouse bx-md'></i></p>
                <i className='bx bxs-down-arrow'></i>
            </div>
        </div>  
        </>
    )
}

export default Header;