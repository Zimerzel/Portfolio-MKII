import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';
import { rawProjectData } from '../data/rawProjectData';


const WorkPage = () => {
  document.getElementById('work-btn').addEventListener("load", removeBtn())
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
        <h2>Projects.</h2>
        {homeFeaturedProjects &&
          homeFeaturedProjects.map((homeFeaturedProject, index) => {
            return (
              <div className="project__card" key={index}>
                <div className="project__card__content">
                  <img
                    src={homeFeaturedProject.image}
                    alt={`cover of the project ${homeFeaturedProject.title}`}
                  />
                </div>
                  <div className="project__card__text">
                    <a
                      href={homeFeaturedProject.livesite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>{homeFeaturedProject.title}</h3>
                    </a>
                    <p>{homeFeaturedProject.subtitle}</p>
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