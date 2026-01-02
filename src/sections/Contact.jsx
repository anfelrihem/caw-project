import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.info}>Email: marmianfel@gmail.com</p>
      <p className={styles.info}>
        LinkedIn: <a href="https://www.linkedin.com/in/anfel-marmi-31ab713a3/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mamrianfelrihem</a>
      </p>

      <form className={styles.form} action="https://formspree.io/f/yourFormID" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
         <button type="submit" className={styles.sendBtn}>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
