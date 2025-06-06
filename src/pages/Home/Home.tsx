import manwalk from "../../assets/pictures/manwalk.svg";
import userIcon from "../../assets/pictures/user.gif";
import styles from "./Home.module.css";
import kittycat from "../../assets/pictures/cat.svg";
import catMeowSound from "../../assets/audio/cat-meow-8-fx-306184.mp3";
import homeIcon from "../../assets/pictures/home.svg";
import { useEffect, useState } from "react";
import AccountModal from "../../components/AccountModal.tsx";
import musics from "../../assets/audio/musics/musics.ts";

function HomeDisplay() {
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (isModaleOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModaleOpen]);

  function miaou() {
    const audio = new Audio(catMeowSound);
    audio.play();
  }

  function openModaleWithUsername() {
    setIsModaleOpen(true);
    setShowUsername(true);
  }

  function openModaleWithoutUsername() {
    setIsModaleOpen(true);
    setShowUsername(false);
  }

  function closeModale() {
    setIsModaleOpen(false);
    setUsername("");
  }

  let currentAudio: HTMLAudioElement | null = null;

  function toggleRandomMusic(musics: string[]) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    } else {
      const randomIndex = Math.floor(Math.random() * musics.length);
      const selectedMusic = musics[randomIndex];
      currentAudio = new Audio(selectedMusic);
      currentAudio.play();

      currentAudio.onended = () => {
        currentAudio = null;
      };
    }
  }

  return (
    <div
      className={`${styles.screenDiv} ${isModaleOpen ? styles.overlay : ""}`}
    >
      <div className={styles.homeIconDiv}>
        <img className={styles.homeIcon} src={homeIcon} alt="home icon" />
      </div>
      <div className={styles.buttonsDiv}>
        <button onClick={openModaleWithUsername} className={styles.buttons}>
          CREATE AN ACCOUNT
        </button>
        <button onClick={openModaleWithoutUsername} className={styles.buttons}>
          LOG IN
        </button>
        <AccountModal
          isOpen={isModaleOpen}
          onClose={closeModale}
          showUsernameField={showUsername}
        />
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
        <button
          onClick={() => toggleRandomMusic(musics)}
          className={styles.manwalkButton}
        >
          <img className={styles.manwalkImg} src={manwalk} alt="Manwalk" />
        </button>
      </div>
    </div>
  );
}

export default HomeDisplay;
