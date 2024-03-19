import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';

import theme from "../styles/theme.module.css";
import styles from "../styles/App.module.css";
import CartButton from '../components/CartButton';
import Cart from '../components/Cart';

import logo from "../assets/images/logo.svg";
import FooterLink from '../components/FooterLink';
import { appIcons } from '../data/appIcons.barrel';

function App() {

  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {

    document.body.classList.add(theme.light);
  })

  return (
    <>
      <header className={styles.header}>
        <Link to={"/"}>
          <img className={styles["logo"]} src={logo} alt="Carter's online shop logo" />
        </Link>
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
      <footer className={styles["footer"]}>
        <div className={styles["footer-list"]}>
          <p className={styles["footer-info"]}>©️ {(new Date()).getFullYear()} Diaa E.</p>
          <FooterLink
            icon={appIcons.github}
            text={"Source"}
            to={"https://github.com/Diaa-E/shopping-cart"}
          />
        </div>
        <div className={styles["footer-list"]}>
          <p className={styles["footer-info"]}>Carter's Online Shop</p>
          <FooterLink
            text={"Main Page"}
            to={"/"}
          />
          <FooterLink
            text={"Shop"}
            to={"/shop"}
          />
          <FooterLink
            text={"About"}
            to={"/about"}
          />
          <FooterLink
            text={"Careers"}
            to={"/"}
          />
          <FooterLink
            text={"Blog"}
            to={"/"}
          />
          <FooterLink
            text={"Advertise with us"}
            to={"/"}
          />
        </div>
        <div className={styles["footer-list"]}>
          <p className={styles["footer-info"]}>Support</p>
          <FooterLink
            text={"Product help"}
            to={"/"}
          />
          <FooterLink
            text={"Report an issue"}
            to={"/"}
          />
        </div>
      </footer>
    </>
  )
}

export default App
