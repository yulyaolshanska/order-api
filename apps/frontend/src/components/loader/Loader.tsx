import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} data-test-id="loader"></div>
    </div>
  );
};

export { Loader };
