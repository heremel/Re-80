import styles from "./Room.module.css";
import firstbatch from "../../assets/pictures/firstbatch.svg";
import secondbatch from "../../assets/pictures/secondbatch.svg";
import thirdbatch from "../../assets/pictures/thirdbatch.svg";
import fourthbatch from "../../assets/pictures/fourthbatch.svg";
import lastbatch from "../../assets/pictures/lastbatch.svg";
import rollerskates from "../../assets/pictures/rollerskates.mp4";
import Television from "../../components/Television";

function RoomPage() {
  return (
    <div className={`${styles.screenDiv} ${styles.screenDivRoom}`}>
      <div className={styles.picturesBatch}>
        <img
          className={styles.firstBatch}
          src={firstbatch}
          alt="Polaroid from the 80s"
        />
        <img
          className={styles.secondBatch}
          src={secondbatch}
          alt="Polaroid from the 80s"
        />
        <img
          className={styles.thirdBatch}
          src={thirdbatch}
          alt="Polaroid from the 80s"
        />
        <img
          className={styles.fourthBatch}
          src={fourthbatch}
          alt="Polaroid from the 80s"
        />
        <img
          className={styles.lastBatch}
          src={lastbatch}
          alt="Polaroid from the 80s"
        />
      </div>
      <div className={styles.televisionContainer}>
        <Television>
          <video
            className={styles.videoRoller}
            src={rollerskates}
            controls
            muted
          ></video>
        </Television>
      </div>
    </div>
  );
}

export default RoomPage;
