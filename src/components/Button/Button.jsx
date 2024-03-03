import styles from './Button.module.css';

const Button = ({ children, onClick, modeHeaderStyle, type }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={modeHeaderStyle ? styles.buttonHeader : styles.button}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
