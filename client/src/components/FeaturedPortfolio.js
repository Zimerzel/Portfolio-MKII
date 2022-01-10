import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { rawProjectData } from '../data/rawProjectData';

const HomeFeaturedProjects = () => {
  const [homeFeaturedProjects, setHomeFeaturedProjects] = useState(null);

  useEffect(() => {
    const featuredProjects = rawProjectData.filter((project) =>
      project.category.includes('featured-home')
    );
    setHomeFeaturedProjects(featuredProjects);
  }, []);

  return (
    <section className="__projects">
      <div className="home__featured__projects__content">
        <h2>Featured Projects</h2>
        {homeFeaturedProjects &&
          homeFeaturedProjects.map((homeFeaturedProject, index) => {
            return (
              <div className="featured__project__card" key={index}>
                <div className="project__card__content">
                  <img
                    src={homeFeaturedProject.image}
                    alt={`cover of the project ${homeFeaturedProject.title}`}
                  />
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
              </div>
            );
          })}
        <Link className="all__works__btn button__top-bottom" to="/work">
          All Projects
          <div className="overlay"></div>
        </Link>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;