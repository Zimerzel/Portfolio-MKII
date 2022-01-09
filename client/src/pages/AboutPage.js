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
        'Art...',
        'Automotive Industry...',
        'Meeting New People...'
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
              <h1 data-aos="fade-up">About Me.</h1>
              <p data-aos="fade-up" data-aos-delay="50">
                I have lived most of my life in Boulder, CO and was taught to
                embrace adventure. Colorado is known for being an unpredictable
                environment as the weather and events that follow can change by
                the minute. Growing up in an ever-changing environment has taught
                me many things but the most important lesson was to be able to
                adapt. Initially, I had no desire to enter the world of tech and I
                refused to accept it’s increasing integration in our lives. Being
                young and growing up alongside the social media era, I had a
                narrow view on technology. I wanted people to socialize instead of
                tweet, to call instead of text, and for people to eat their food
                without taking another #mylunch photo. That’s exactly where I was
                wrong, software is so much larger than just media. Adaptation
                doesn't always have to be an alteration of your person or the
                thing itself, but it can also be a change in perspective. Once my
                perspective changed, I saw just how many opportunities there were
                to personally or indirectly create positive change in the world
                through software development. Software could be and often is
                developed for hospitals, research facilities, prosthetics and
                environmental needs. The applications are limitless. While I've
                just begun my adventure into software development, I can say I am
                extremely proud to be a part of this field. Feel free to browse my
                work and don't hesitate to reach out with any questions/comments!
              </p>
            </article>
          </section>
          <section className="about__skills" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              <div className="skills column">
                  <h3>Development Skills</h3>
                    <div className="row">
                      <ul className="skill_column">
                        <li>Bcrypt</li>
                        <li>JWT</li>
                        <li>Stripe</li>
                        <li>Node</li>
                        <li>Git/GitHub</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                      </ul>
                      <ul className="skill_column">
                        <li>NoSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Python</li>
                        <li>Express</li>
                        <li>Redux</li>
                      </ul>
                      <ul className="skill_column">
                        <li>jQuery</li>
                        <li>Sequelize</li>
                        <li>SQL</li>
                        <li>SQLAlchemy</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>BootStrap</li>
                      </ul>
                    </div>
              </div>
              <div className="design column">
                <h3>Design Skills</h3>
                <ul>
                  <li>Adobe XD</li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="interested-topics">
            <div className="interested-topics-content">
              <h2>
                Here are the topics that I am{' '}
                <mark className="interested-topics-hightlight">interested</mark>{' '}
                in...
              </h2>
              <p className="topics-text">
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