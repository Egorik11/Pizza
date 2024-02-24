import styles from './Button.module.css';

function Button({ children, onClick, modeHeaderStyle }) {
  return (
    <>
      <button
        onClick={onClick}
        className={modeHeaderStyle ? styles.buttonHeader : styles.button}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
