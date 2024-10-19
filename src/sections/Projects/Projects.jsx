import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.gif';
import freshBurger from '../../assets/fresh-Burger.gif';
import hipsster from '../../assets/hipsster.gif';
import fitLift from '../../assets/fitlift.gif';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          liveLink="https://ai-mock-interview-eight.vercel.app/"
          githubLink="https://github.com/Ketanchaudhary007/AI-Mock-Interview"
          h3="AI MOCK INTERVIEWER"
          p="Tailored interview exp."
        />
        <ProjectCard
          src={freshBurger}
          liveLink="https://calcul-ai-fe.vercel.app/"
          githubLink="https://github.com/Ketanchaudhary007/CalculAI-FE"
          h3="CalculAI"
          p="AI-powered Calculator"
        />
        <ProjectCard
          src={hipsster}
          link="https://dribbble.com/kchaudhry007"
          h3="DESIGN WORK"
          p="Web & App Design"
          buttonLabel="Dribbble"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.artstation.com/ketan007"
          h3="Illustrations"
          p="Digital Sketches"
          buttonLabel="ArtStation"
        />
      </div>
    </section>
  );
}

export default Projects;
