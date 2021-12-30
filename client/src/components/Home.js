import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum'
import PIC from '../assets/Images/2.svg'


function Home (){
    return(
        <> 
        <div>
            <section>
                <div id="home-intro">
                    <img src={PIC} alt="" width="100%"/>
                </div>
            </section>
            <section>
                <div>
                    <h2>One step at a time.</h2>
                    <p> 
                        A self-motivated front-end developer with hands on experience
                        designing and building websites from scratch. My goal is to build 
                        websites with both visually appealing and user experience-oriented 
                        functionality.
                    </p>
                    <p><LoremIpsum p={3} /> </p>
                </div>
            </section>
            <section>
                <div>
                    <h2>Featured Projects.</h2>
                    <div>
                        <p>project cards here</p>
                    </div>
                    <button>All Projects</button>
                </div>
            </section>
            <section>
                <h2>Get in Touch.</h2>
                <p>I'm ready for challenges and opportunities. Please send me an email if you want to chat with me.</p>
                <button>View Work</button>
                <button>Email Me</button>
            </section>
            <section>
                <h3>Footer things</h3>
                <p>Links to media</p>
            </section>
        </div>
        </>
    )
}

export default Home;