// src/sections/Projects.jsx
import styles from "./Projects.module.css";
import ProjectCard from "../components/ProjectCard";

function Projects({ visible, darkMode, language }) {
  // Translations
  const headings = {
    en: "My Labs & Projects",
    fr: "Mes Labs & Projets",
  };

  const labs = [
    {
      title: { en: "Lab 7: Kanban Board", fr: "Lab 7 : Tableau Kanban" },
      desc: {
        en: "Task management app for organizing projects",
        fr: "Application de gestion de tâches pour organiser les projets",
      },
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/lab7-kanban",
      demo: "https://lab7-kanban.vercel.app",
    },
    {
      title: { en: "Lab 6: Portfolio", fr: "Lab 6 : Portfolio" },
      desc: {
        en: "Personal portfolio website showcasing skills",
        fr: "Site portfolio personnel présentant mes compétences",
      },
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/portfolio",
    },
    {
      title: { en: "Lab 2: Git & GitHub/GitLab", fr: "Lab 2 : Git & GitHub/GitLab" },
      desc: {
        en: "Hands-on practice with Git for version control and code management using GitHub/GitLab.",
        fr: "Pratique avec Git pour le contrôle de version et gestion du code via GitHub/GitLab.",
      },
      tech: "Version Control System (Git), GitHub, GitLab",
      github: "https://github.com/anfelrihem/caw_labs",
    },
    {
      title: { en: "Lab 3: Node.js & NPM", fr: "Lab 3 : Node.js & NPM" },
      desc: {
        en: "Using Node.js and NPM to run JavaScript applications and manage external packages.",
        fr: "Utilisation de Node.js et NPM pour exécuter des applications JS et gérer des packages externes.",
      },
      tech: "Node.js, NPM, JavaScript",
      github: "https://github.com/anfelrihem/lab3",
    },
    {
      title: { en: "Lab 4: Unit Testing in JavaScript - Initiation to Jest", fr: "Lab 4 : Tests Unitaires JS - Initiation à Jest" },
      desc: {
        en: "Running unit tests on JavaScript modules using Jest.",
        fr: "Exécution de tests unitaires sur des modules JavaScript avec Jest.",
      },
      tech: "Jest, JavaScript",
      github: "https://github.com/anfelrihem/Lab4_Jest",
    },
    {
      title: { en: "Lab 5: React Component", fr: "Lab 5 : Composants React" },
      desc: {
        en: "Implementing exercises using React functional components",
        fr: "Implémentation d'exercices avec des composants fonctionnels React",
      },
      tech: "React, JavaScript",
      github: "https://github.com/anfelrihem/lab5_react",
    },
    {
      title: { en: "Medical Website", fr: "Site Web Médical" },
      desc: {
        en: "Discover our laboratory equipped with cutting-edge technology for accurate diagnostics",
        fr: "Découvrez notre laboratoire équipé de technologies avancées pour des diagnostics précis",
      },
      tech: "Laravel, AI",
      github: "http://127.0.0.1:8000/welcome",
    },
  ];

  return (
    <section
      className={`${styles.projects} ${visible ? styles.fadeSlide : ""} ${
        darkMode ? styles.darkBackground : ""
      }`}
    >
      <h2 className={styles.heading}>{headings[language]}</h2>
      <div className={styles.grid}>
        {labs.map((lab, index) => (
          <ProjectCard
            key={index}
            title={lab.title[language]}
            desc={lab.desc[language]}
            tech={lab.tech}
            github={lab.github}
            demo={lab.demo}
            darkMode={darkMode} // full dark mode
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
