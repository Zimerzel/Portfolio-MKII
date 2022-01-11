import React, { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { init } from 'ityped';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const AboutPage = () => {
  const topicsRef = useRef(null);

  useEffect(() => {
    if (!topicsRef.current){
      return;
    }

    init(topicsRef.current, {
      showCursor: true,
      typeSpeed: 150,
      startDelay: 800,
      strings: [
        'Coding...',
        'Web Development...',
        'Technology...',
        'Adventuring...',
        'Music...',
        'Automotive Industry...'
      ]
    });
  }, []);

    return (
      <>
        <motion.div
          className="about-container main-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.3 }}
        >
        <Helmet>
          <title>Zach Imerzel | About Me</title>
          <meta
            name="description"
            content="A summary of Zach Imerzel's background and technical skills as a Software Developer."
          />  
        </Helmet>
          <div>
          <section className="about__content">
            <article className="about__text">
              <h1 data-aos="fade-up">About Me<span>.</span></h1>
              <p data-aos="fade-up" data-aos-delay="50">
              I have lived most of my life in Boulder, CO and was taught 
              to embrace adventure. Colorado is known for being an unpredictable 
              environment as the weather and events that follow can change by 
              the minute. Growing up in an ever-changing environment has taught 
              me many things but the most important lesson was to be able to 
              adapt. As someone who loves tech and thrives in fast paced and 
              constantly adapting environments, becoming a software developer 
              felt like a natural progression. My training and hands-on projects 
              experience at the University of Texas(Austin), has allowed me to 
              further develop my passion and skill sets in the web development 
              industry. With solid fundamentals in various front-end programming 
              languages as well as web design, I mostly enjoy working with React 
              JS, HTML5, CSS3, and JavaScript. In addition to web development, 
              one of my greatest interests is building vehicles. I enjoy the 
              process of slowing down and learning how all of the components 
              work with one another… And maybe occasional throwing wrenches. 
              </p>
            </article>
          </section>
          <section className="about__skills" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              <div className="skills">
                  <h3>Development Skills</h3>
                    <ul className="skill_column">
                      <li>Bcrypt</li>
                      <li>JWT</li>
                      <li>Stripe</li>
                      <li>Node</li>
                      <li>Git/GitHub</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>NoSQL</li>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Python</li>
                      <li>Express</li>
                      <li>Redux</li>
                      <li>jQuery</li>
                      <li>Sequelize</li>
                      <li>SQL</li>
                      <li>SQLAlchemy</li>
                      <li>React</li>
                      <li>Vue</li>
                      <li>BootStrap</li>
                    </ul>
                  <h3 className="design__skills">Design Skills</h3>
                  <ul className="design__skills">
                    <li>Adobe XD</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                  </ul>
              </div>
            </div>
          </section>
          <section className="interested__topics" data-aos="fade-up" data-aos-delay="250">
            <div className="interested__topics__content">
              <h2>
                Here are the topics that I am{' '}
                <mark className="interested__topics__hightlight">interested</mark>{' '}
                in...
              </h2>
              <p className="topics__text">
                <span ref={topicsRef}></span>
              </p>
            </div>
          </section>
        </div>
        <Contact />
        </motion.div>
      </>
    );
}

export default AboutPage;