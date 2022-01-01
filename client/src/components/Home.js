import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { LoremIpsum } from 'react-lorem-ipsum'
import Contact from './Contact'
import HomeFeaturedProjects from './FeaturedProjects';



function Home (){
    

    return(
        <> 
        <motion.div
        className="home-container main-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            <Helmet>
                <title>Zach Imerzel | Web Developer</title>
                <meta
                name="description"
                content="A portfolio site built in React by Zach Imerzel, a Front-End Developer based in Austin, TX. He has hands-on experience building websites from scratch, with a mobile-first approach. He likes React, JavaScript, HTML, CSS."
                />
            </Helmet>
            <div>
                <section id="title-bg">
                    <div className="banner">
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
                            <HomeFeaturedProjects />
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
                <Contact />
                <section>
                    <h3>Footer things</h3>
                    <p>Links to media</p>
                </section>
            </div>
        </motion.div>
        </>
    )
}

export default Home;