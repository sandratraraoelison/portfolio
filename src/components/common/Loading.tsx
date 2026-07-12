import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Chargement...</p>
    </div>
  );
};
