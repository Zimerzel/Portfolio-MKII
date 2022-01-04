import React from "react";
import Nav from './Nav'

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="four">
                <h1>I'm Zach Imerzel</h1>
                <p> A <mark>front-end developer</mark> based in Berthoud, CO</p>
            </div>
            <div className="header__nav">
                <Nav />
            </div>
            <div className="arrow bounce">
                <i class='bx bxs-down-arrow'></i>
            </div>
        </div>  
        </>
    )
}

export default Header;