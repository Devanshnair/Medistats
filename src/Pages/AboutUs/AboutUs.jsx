import styles from './AboutUs.module.css'

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>About MediStats</h1>
        <p className={styles.description}>
          MediStats is a platform dedicated to helping you find the best prices for your medications.
          We compare prices across multiple online pharmacies to ensure you get the best deal possible.
        </p>
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make healthcare more affordable and accessible for everyone.
            By providing transparent price comparisons, we empower you to make informed decisions
            about your medication purchases.
          </p>
        </section>
      </main>
      </>
  )
}