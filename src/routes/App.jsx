import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';

import theme from "../styles/theme.module.css";
import styles from "../styles/App.module.css";
import CartButton from '../components/CartButton';
import Cart from '../components/Cart';

function App() {

  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

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
          onClick={() => setOpenCart(true)}
        />
      </header>
      <Outlet context={{cart: [cart, setCart]}} />
      {
        openCart &&
        <Cart
          closeCart={() => setOpenCart(false)}
          cart={cart}
          setCart={setCart}
        />
      }
    </>
  )
}

export default App
