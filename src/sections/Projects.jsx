import styles from "./Projects.module.css";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const labs = [
    {
      title: "Lab 7: Kanban Board",
      desc: "Task management app for organizing projects",
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/lab7-kanban",
      demo: "https://lab7-kanban.vercel.app"
    },
    {
      title: "Lab 6: Portfolio",
      desc: "Personal portfolio website showcasing skills",
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/portfolio",
    
    },
    {
      title: "Lab 2: Git & GitHub/GitLab",
      desc: "Hands-on practice with Git for version control and code management using GitHub/GitLab.",
      tech: "Version Control System (Git), GitHub, GitLab",
      github: "https://github.com/anfelrihem/caw_labs",
    
      
    },
    {
      title: "Lab 3: Node.js & NPM",
      desc: " Using Node.js and NPM to run JavaScript applications and manage external packages.",
      tech: "Node.js, NPM, JavaScript",
      github: "https://github.com/anfelrihem/lab3",
      
      
    },
    {
      title: "Lab 4: Unit Testing in JavaScript -Initiation to Jest",
      desc: "Running unit tests on JavaScript modules using Jest.",
      tech: "Jest, JavaScript",
      github: "https://github.com/anfelrihem/Lab4_Jest",
      
      
    },
    {
      title: "Lab 5: React Component",
      desc: "Implementing exercises using React functional components",
      tech: "React, JavaScript",
      github: "https://github.com/anfelrihem/lab5_react",
      
      
    },
    {
      title: "medical website",
      desc: "Discover our laboratory equipped with cutting-edge technology for accurate diagnostics",
      tech: "laravel, AI",
      github: "http://127.0.0.1:8000/welcome",
      
    },
    
    // Add more labs here...
  ];

  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>My Labs & Projects</h2>
      <div className={styles.grid}>
        {labs.map((lab, index) => (
          <ProjectCard
            key={index}
            title={lab.title}
            desc={lab.desc}
            tech={lab.tech}
            github={lab.github}
            demo={lab.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
