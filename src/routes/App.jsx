import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';

import theme from "../styles/theme.module.css";
import styles from "../styles/App.module.css";
import CartButton from '../components/CartButton';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    document.body.classList.add(theme.light);
  })

  return (
    <>
      <header className={styles.header}>
        <Link to={"/"}>Home</Link>
        <NavBar />
        <CartButton
          cartLength={cart.length}
        />
      </header>
      <Outlet context={{cart: [cart, setCart]}} />
    </>
  )
}

export default App
