import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';
import { rawProjectData } from '../data/rawProjectData';


const WorkPage = () => {
  var el = document.getElementById('work-btn');
  if(el){
    el.addEventListener('load', removeBtn());
  }
  function removeBtn(){
    document.getElementById('work-btn').style.visibility="hidden"
  }

  const [homeFeaturedProjects, setHomeFeaturedProjects] = useState(null);

  useEffect(() => {
    const featuredProjects = rawProjectData.filter((project) =>
      project.category.includes('all')
    );
    setHomeFeaturedProjects(featuredProjects);
  }, []);

  return (
    <motion.div
    className="work-container main-wrapper"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.3 }}
  >
    <Helmet>
      <title>Zach Imerzel | Work</title>
      <meta
        name="description"
        content="A list of projects to showcase Zach Imerzel's work as a Front-End Developer."
      />
    </Helmet>
    <section className="projects">
      <div className="projects__content">
        <h2>Projects<span>.</span></h2>
        {homeFeaturedProjects &&
          homeFeaturedProjects.map((homeFeaturedProject, index) => {
            return (
              <div className="project__card" key={index}>
                <div className="project__content">
                  <img
                    src={homeFeaturedProject.imageMock1}
                    alt={`cover of the project ${homeFeaturedProject.title}`}
                    id="imageMock1"
                  />
                  <img
                    src={homeFeaturedProject.imageMock2}
                    alt={`cover of the project ${homeFeaturedProject.title}`}
                    id="imageMock2"
                  />
                  <img
                    src={homeFeaturedProject.imageMock3}
                    alt={`cover of the project ${homeFeaturedProject.title}`}
                    id="imageMock3"
                  />
                </div>
                  <div className="project__text">
                    <a
                      href={homeFeaturedProject.livesite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>{homeFeaturedProject.title}</h3>
                    </a>
                    <p>{homeFeaturedProject.subtitle}</p>
                    <button className='button__top-bottom work__btn'><a href={homeFeaturedProject.github} target="_blank" rel="noreferrer" className='work__link'>Github</a></button>
                    <button className='button__top-bottom work__btn'><a href={homeFeaturedProject.livesite} target="_blank" rel="noreferrer" className='work__link'>Live Site</a></button>
                  </div>
              </div>
            );
          })}
      </div>
    </section>
    <Contact />
    </motion.div>
  );
};

export default WorkPage;