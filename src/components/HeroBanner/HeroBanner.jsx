import css from '../HeroBanner/HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <div className={css.hero_content}>
      <h1 className={css.hero_title}>Campers of your dreams</h1>
      <h2 className={css.hero_subtitle}>
        You can find everything you want in our catalog
      </h2>
      <button className={css.btn}>View Now</button>
    </div>
  );
};

export default HeroBanner;
