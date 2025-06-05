import manwalk from "../manwalk.svg";
import styles from "./Home.module.css";

function HomeDisplay() {
  return (
    <div className={styles.manwalk}>
      <img className={styles.manwalkImg} src={manwalk} alt="Manwalk" />
    </div>
  );
}

export default HomeDisplay;
