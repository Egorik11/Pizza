import Form from '../Form/Form';
import Input from '../Input/Input';

import styles from './Header.module.css'

function Header() {
	return (
		<div className={styles.header}>
			<a className={styles.logo} href="/">Pizza Day</a>
      <Form>
        <Input placeholder='Search for the order #'/>
      </Form>
		</div>
	)
}

export default Header