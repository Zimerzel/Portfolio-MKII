import React from "react";

function Footer(){
    return(
        <>
            <div className="footer__container">
                <p>
                    <a href="https://www.linkedin.com/in/zach-imerzel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSAYjSaisReulAOjRufhl%2Bg%3D%3D" target="_blank" rel="noreferrer" ><i className='bx bxl-linkedin bx-md'></i></a>
                    <a href="https://github.com/Zimerzel" target="_blank" rel="noreferrer"><i className='bx bxl-github bx-md' ></i></a>
                    {/* <a href="" target="_blank" rel="noreferrer"><i class='bx bxl-netlify bx-md'></i></a> */}
                </p>
                <h1>© 2022 Zach Imerzel</h1>
            </div>
        </>
    )
}

export default Footer;