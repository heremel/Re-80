import styles from "./Television.module.css";

function Television({ children }): JSX.Element {
  const dialStyle = (deg: string): React.CSSProperties => ({
    ["--value" as any]: deg,
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tv}>
          <div className={styles.antennaContainer}>
            <div className={styles.antenna}></div>
          </div>
          <div className={styles.televisionContainer}>
            <div className={styles.television}>
              <div className={styles.televisionInner}>
                <div className={styles.televisionScreenContainer}>
                  <div className={styles.televisionCrt}>
                    <div className={styles.televisionScreen}>{children}</div>
                  </div>
                </div>

                <div className={styles.televisionLateral}>
                  <div className={styles.dialContainer}>
                    <div
                      className={`${styles.dial} ${styles.channelButton}`}
                      style={dialStyle("0deg")}
                    >
                      <div className={styles.dataContainer}>
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className={styles.data}>
                            #
                          </div>
                        ))}
                      </div>
                      <div className={styles.dialCore}></div>
                      <div className={styles.selector}></div>
                    </div>

                    <div
                      className={`${styles.dial} ${styles.volumeButton}`}
                      style={dialStyle("0deg")}
                    >
                      <div className={styles.dataContainer}>
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className={styles.data}>
                            #
                          </div>
                        ))}
                      </div>
                      <div className={styles.dialCore}></div>
                      <div className={styles.selector}></div>
                    </div>
                  </div>

                  <div className={styles.speakerContainer}>
                    {[...Array(48)].map((_, i) => (
                      <div key={i}></div>
                    ))}
                  </div>
                </div>

                <div className={styles.buttons}>
                  <div className={styles.buttonContainer}>
                    <div className={styles.button}></div>
                  </div>
                  <div className={styles.buttonContainer}>
                    <div className={styles.button}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.televisionBase}>
              <div className={styles.slots}>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={styles.slot}></div>
                ))}
              </div>
              <div className={styles.slots}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={styles.slot}></div>
                ))}
              </div>
            </div>

            <div className={styles.footContainer}>
              <div className={styles.foot + " " + styles.left}></div>
              <div className={styles.foot + " " + styles.right}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Television;
