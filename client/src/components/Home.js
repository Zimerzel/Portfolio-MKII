import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum'


function Home (){
    return(
        <>
            <div id="home">
                <h1>Home</h1>
                <p><LoremIpsum p={3} /></p>
            </div>
        </>
    )
}

export default Home;