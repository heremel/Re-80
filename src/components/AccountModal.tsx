import styles from "./AccountModal.module.css";

function AccountModal({ isOpen, onClose, showUsernameField }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.formDiv}>
        <h2>{showUsernameField ? "Register" : "Log In"}</h2>
        {showUsernameField && (
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        )}
        <input type="text" name="email" placeholder="Enter your email" />
        <input type="text" name="password" placeholder="Enter your password" />
      </div>
      <div className={styles.buttonsDiv}>
        <button className={styles.buttons} onClick={onClose}>
          Close
        </button>
        <button className={styles.buttons}>Confirm</button>
      </div>
    </div>
  );
}

export default AccountModal;
