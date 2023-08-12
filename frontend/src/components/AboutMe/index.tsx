import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={styles["about-me"]}>
      <article>
        <h1>Sobre mim</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem? Quae, quia.
          Quam, voluptas. Quia, voluptatum? Quia, voluptatum. Quisquam, voluptatem? Quae, quia.
          Quam, voluptas. Quia, voluptatum? Quia, voluptatum.
        </p>
      </article>
      <img src="https://picsum.photos/200" alt="random" />
    </section>
  );
};

export default AboutMe;
