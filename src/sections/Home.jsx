import { useRef, useEffect, useState } from "react";
import styles from "./Home.module.css";
import profilePic from "../assets/p.jpg";
import { FaLinkedin, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Projects from "./Projects"; 
import { useNavigate } from "react-router-dom";


function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);


const navigate = useNavigate();

  const [homeVisible, setHomeVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const text = {
    en: {
      tagline: "Frontend & React Developer",
      bio: "Passionate Computer Science student with hands-on experience in React, web development, and modern JavaScript frameworks.",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      about: "About Me",
    },
    fr: {
      tagline: "Développeuse Frontend & React",
      bio: "Étudiante en informatique passionnée par le développement web, avec une expérience pratique en React et technologies modernes.",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      about: "À propos",
    },
  };

const skills = [
  { 
    category: "Programming Languages", 
    categoryFR: "Langages de programmation",
    items: ["JavaScript", "Python", "PHP", "Java", "C++", "HTML", "CSS"] 
  },
  { 
    category: "Frameworks & Libraries", 
    categoryFR: "Frameworks & Bibliothèques",
    items: ["React.js", "Laravel", "Bootstrap", "Tailwind CSS"] 
  },
  { 
    category: "AI & Data Science Tools", 
    categoryFR: "Outils d'IA et Data Science",
    items: ["Jupyter Notebook", "Anaconda", "TensorFlow (Basics)", "Scikit-learn", "Pandas", "NumPy"] 
  },
  { 
    category: "Design & Prototyping", 
    categoryFR: "Design & Prototypage",
    items: ["Canva", "Figma", "UI/UX Design"] 
  },
  { 
    category: "Development Tools", 
    categoryFR: "Outils de développement",
    items: ["Git", "GitHub", "VS Code", "Postman", "XAMPP", "phpMyAdmin"] 
  },
  { 
    category: "Databases", 
    categoryFR: "Bases de données",
    items: ["MySQL", "SQLite"] 
  },
];


  useEffect(() => {
    const options = { threshold: 0.2 };
    const observe = (ref, setter) => {
      const obs = new IntersectionObserver(([entry]) => setter(entry.isIntersecting), options);
      if (ref.current) obs.observe(ref.current);
      return obs;
    };
    const homeObs = observe(homeRef, setHomeVisible);
    const projObs = observe(projectsRef, setProjectsVisible);
    const skillsObs = observe(skillsRef, setSkillsVisible);
    const contactObs = observe(contactRef, setContactVisible);

    return () => {
      homeObs.disconnect();
      projObs.disconnect();
      skillsObs.disconnect();
      contactObs.disconnect();
    };
  }, []);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  return (
    <div className={`${darkMode ? styles.dark : ""}`}>
    
      <div className={styles.topControls}>
        <button className={styles.iconBtn} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className={styles.iconBtn} onClick={() => setLanguage(language === "en" ? "fr" : "en")}>
          {language === "en" ? "FR" : "EN"}
        </button>
        <button className={styles.iconBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </button>
      </div>

      {/* Sidebar Left */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)}>✕</button>
        <p onClick={() => scrollTo(homeRef)}>🏠 Home</p>
        <p onClick={() => scrollTo(projectsRef)}>📁 {text[language].projects}</p>
        <p onClick={() => scrollTo(skillsRef)}>🛠 {text[language].skills}</p>
        <p onClick={() => scrollTo(contactRef)}>📞 {text[language].contact}</p>
  <p
  onClick={() => {
    navigate("/about");
    setSidebarOpen(false);
  }}
>
  👩‍💻 {text[language].about}
</p>


      </div>

      {/* Home Section */}
      <section ref={homeRef} className={`${styles.home} ${homeVisible ? styles.fadeSlide : ""}`}>
        <img src={profilePic} alt="Marmi Anfel Rihem" className={`${styles.photo} ${homeVisible ? styles.fromLeft : ""} ${homeVisible ? styles.fadeSlide : ""}`} />
        <h1 className={`${styles.title} ${homeVisible ? styles.fromRight : ""} ${homeVisible ? styles.fadeSlide : ""}`}>Marmi Anfel Rihem</h1>
        <h2 className={`${styles.tagline} ${homeVisible ? styles.fromLeft : ""} ${homeVisible ? styles.fadeSlide : ""}`}>{text[language].tagline}</h2>
        <p className={`${styles.bio} ${homeVisible ? styles.fromRight : ""} ${homeVisible ? styles.fadeSlide : ""}`}>{text[language].bio}</p>
        <div className={styles.btns}>
          <button onClick={() => scrollTo(projectsRef)} className={styles.btn}>Projects</button>
          <button onClick={() => scrollTo(skillsRef)} className={styles.btn}>Skills</button>
          <button onClick={() => scrollTo(contactRef)} className={styles.btn}>Contact</button>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef}>
        <Projects visible={projectsVisible} darkMode={darkMode}  language={language}/>
      </section>
 
      {/* Skills Section */}
      <section ref={skillsRef} className={styles.skills}>
  <h2 className={styles.heading}>
    {language === "en" ? "Skills & Technologies" : "Compétences & Technologies"}
  </h2>
  <div className={styles.skillsList}>
    {skills.map((skill, idx) => (
      <div
        key={idx}
        className={`${styles.category} ${skillsVisible ? styles.fadeSlide : ""} ${
          idx % 2 === 0 ? styles.fromLeft : styles.fromRight
        }`}
        style={{ transitionDelay: `${idx * 0.2}s` }}
      >
        <h3>
          {language === "en"
            ? skill.category
            : skill.categoryFR || skill.category} {/* categoryFR optional */}
        </h3>
        <p>{skill.items.join(", ")}</p>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section ref={contactRef} className={styles.contact}>
  <h2 className={styles.heading}>
    {language === "en" ? "Contact Me" : "Contactez-moi"}
  </h2>
  <div className={styles.contactList}>
    {[
      { icon: <MdEmail />, text: language === "en" ? "Personal: marmianfel@gmail.com" : "Personnel : marmianfel@gmail.com", link: "mailto:marmianfel@gmail.com" },
      { icon: <MdEmail />, text: language === "en" ? "University: anfel.marmi@univ-constantine2.dz" : "Université : anfel.marmi@univ-constantine2.dz", link: "mailto:anfel.marmi@univ-constantine2.dz" },
      { icon: <FaLinkedin />, text: language === "en" ? "linkedin.com/in/marmianfelrihem" : "linkedin.com/in/marmianfelrihem", link: "https://www.linkedin.com/in/anfel-marmi-31ab713a3/" },
      { icon: <FaInstagram />, text: language === "en" ? "@anfelmar" : "@anfelmar", link: "https://www.instagram.com/anfelmar" },
      { icon: <FaFacebook />, text: language === "en" ? "facebook.com/An Fel Mar" : "facebook.com/An Fel Mar", link: "https://facebook.com/AnFelMar" },
      { icon: <FaPhone />, text: language === "en" ? "+213797601664" : "+213797601664", link: "tel:+213797601664" }
    ].map((item, idx) => (
      <p key={idx} className={`${styles.contactItem} ${contactVisible ? styles.fadeSlide : ""} ${idx % 2 === 0 ? styles.fromLeft : styles.fromRight}`} style={{ transitionDelay: `${idx * 0.2}s` }}>
        {item.icon}
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
      </p>
    ))}
    <button
      className={styles.sendBtn}
      onClick={() => scrollTo(contactRef)}
    >
      {language === "en" ? "Send Message" : "Envoyer un message"}
    </button>
  </div>
</section>

    </div>
  );
}

export default Home;