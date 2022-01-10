import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HomeFeaturedProjects from '../components/FeaturedPortfolio';
import Contact from '../components/Contact';



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
                    <div className='home__about'>
                        <h2>One step at a time<span>.</span></h2>
                        <p> 
                            A self-motivated front-end developer with hands on experience
                            designing and building websites from scratch. My goal is to build 
                            websites with both visually appealing and user experience-oriented 
                            functionality.
                        </p>
                    </div>
                </section>
                <section className='home__featured__container'>
                </section>
                <HomeFeaturedProjects />
                <br />
                <Contact />
                <section>

                </section>
            </div>
        </motion.div>
        </>
    )
}

export default Home;