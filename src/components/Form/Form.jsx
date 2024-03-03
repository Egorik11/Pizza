import styles from './Form.module.css';

const Form = ({ children }) => {
  return <form className={styles.login_form}>{children}</form>;
};

export default Form;
