import { useState } from 'react';

import dataPizzas from '../dataPizzas.json';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import PizzaList from './components/PizzaList/PizzaList';

import styles from './App.module.css';

function App() {
  const [valueInput, setValueInput] = useState('');

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <>
      <Header value={valueInput} onChange={handleChange} />
      <main className={styles.content}>
        <h1 className={styles.title}>
          The best pizza.
          <br />
          <span className={styles.text_yellow}>
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <p className={styles.sub_title}>
          👋 Welcome! Please start by telling us your name:
        </p>
        <PizzaList dataPizzas={dataPizzas} searchParams={valueInput} />
        <Form>
          <Input type='text' placeholder='Your full name' />
          <Button>Login</Button>
        </Form>
      </main>
    </>
  );
}

export default App;
