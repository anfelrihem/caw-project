import styles from "./About.module.css";
import profilePic from "../assets/p.jpg";
function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.container}>
        <img
          src={profilePic}
          alt="My Profile"
          className={styles.avatar}
        />
        <div className={styles.content}>
          <h3>Hello 👋 I’m Anfel Rihem</h3>
          <p>
            I’m a <strong>Junior Web Developer</strong> passionate about building
            modern, responsive, and user-friendly web applications.
          </p>

          <p>
            During this semester, I worked on several projects and labs using
            <strong> React, Vite, JavaScript, HTML, CSS</strong> and backend
            technologies. This portfolio showcases my academic and personal
            projects.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and transforming
            ideas into real web applications.
          </p>

          <div className={styles.skills}>
            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
