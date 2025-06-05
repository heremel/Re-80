import manwalk from "../../assets/pictures/manwalk.svg";
import userIcon from "../../assets/pictures/user.gif";
import styles from "./Home.module.css";
import kittycat from "../../assets/pictures/cat.svg";
import catMeowSound from "../../assets/audio/cat-meow-8-fx-306184.mp3";
import homeIcon from "../../assets/pictures/home.svg";

function HomeDisplay() {
  function miaou() {
    const audio = new Audio(catMeowSound);
    audio.play();
  }

  // function displaySong(){
  //   const audio = new Audio();
  //   audio.play();
  // }

  return (
    <div className={styles.screenDiv}>
      <div className={styles.homeIconDiv}>
        <img className={styles.homeIcon} src={homeIcon} alt="home icon" />
      </div>
      <div className={styles.buttonsDiv}>
        <button className={styles.buttons}>CREATE AN ACCOUNT</button>
        <button className={styles.buttons}>LOG IN</button>
      </div>
      <div className={styles.mainDiv}>
        <button onClick={miaou} className={styles.kittyCatButton}>
          <img
            className={styles.kittyCat}
            src={kittycat}
            alt="kittycatmeowmeow"
          />
        </button>
        <div className={styles.h1Div}>
          <h1>Re:80</h1>
        </div>
        <div className={styles.user}>
          <img className={styles.userIcon} src={userIcon} />
        </div>
      </div>
      <div className={styles.manwalk}>
        <button className={styles.manwalkButton}>
          <img className={styles.manwalkImg} src={manwalk} alt="Manwalk" />
        </button>
      </div>
    </div>
  );
}

export default HomeDisplay;
