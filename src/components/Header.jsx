import styles from "../styles/Header.module.css";

const Header = () => {
    return (
      <header className={styles.header}>
        <h1>Brot</h1>
        <h3>Aktueller Bestand</h3>
      </header>
    );
  };
  export default Header;