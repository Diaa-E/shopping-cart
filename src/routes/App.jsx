import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

import NavBar from '../components/NavBar';

import theme from "../styles/theme.module.css";
import styles from "../styles/App.module.css";
import CartButton from '../components/CartButton';
import Cart from '../components/Cart';

import logo from "../assets/images/logo.svg";
import FooterLink from '../components/FooterLink';
import { appIcons } from '../data/appIcons.barrel';
import Modal from '../components/Modal';
import { ScrollRestoration } from 'react-router-dom';

export const ModalContext = createContext(null);

function App() {

  const [cart, setCart] = useState(fetchFromSession("cart", []));
  const [openCart, setOpenCart] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);
  const [modalState, setModalState] = useState({open: false, prompt: "", actionText: "", onConfirm: () => {}});
  const [mobileMode, setMobileMode] = useState(window.innerWidth <= 700);

  useEffect(() => {

    window.addEventListener("resize", () => {

      setMobileMode(window.innerWidth <= 700);
    });

    return () => {

      removeEventListener("resize", window);
    }

  }, []);

  useEffect(() => {

    modalState.open || openCart ? setLockScroll(true) : setLockScroll(false);

  }, [modalState]);

  useEffect(() => {

    document.body.style.overflow = lockScroll ? "hidden" : "visible"

  }, [lockScroll]);

  useEffect(() => {

    document.body.classList.add(theme.light);
  });

  useEffect(() => {

    saveToSession("cart", cart);

  }, [cart]);

  function fetchFromSession(key, defaultValue)
  {
    if (sessionStorage[key]) return JSON.parse(sessionStorage[key]);

    return defaultValue;
  }

  function saveToSession(key, rawData)
  {
    sessionStorage.setItem(key, JSON.stringify(rawData));
  }

  function closeModal()
  {
    setModalState({open: false, prompt: "", actionText: "", onConfirm: () => {}});
  }

  function openModal(prompt, actionText, onConfirmCallback)
  {
    setModalState({open: true, prompt: prompt, actionText: actionText, onConfirm: onConfirmCallback});
  }

  return (
    <>
      <header className={styles.header}>
        {
          mobileMode &&
          <>
            <NavBar setLockScroll={setLockScroll} mobileMode={mobileMode} />
            <Link to={"/"}>
              <img className={styles["logo"]} src={logo} alt="Carter's online shop logo" />
            </Link>
          </>
        }
        {
          !mobileMode &&
          <>
              <Link to={"/"}>
                <img className={styles["logo"]} src={logo} alt="Carter's online shop logo" />
              </Link>
              <NavBar mobileMode={mobileMode} />
          </>
        }
        <CartButton
          cartLength={cart.length}
          onClick={() => {
            setOpenCart(true);
            setLockScroll(true);
          }}
        />
      </header>
      <Outlet context={{cart: [cart, setCart], mobileMode: [mobileMode]}} />
      {
        openCart &&
        <ModalContext.Provider value={[openModal]}>
          <Cart
              closeCart={() => {
                setOpenCart(false);
                setLockScroll(false);
              }}
              cart={cart}
              setCart={setCart}
          />
        </ModalContext.Provider>
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
          <p className={styles["footer-info"]}>Social media</p>
          <FooterLink
            icon={appIcons.facebook}
            text={"Facebook"}
            to={"https://facebook.com"}
          />
          <FooterLink
            icon={appIcons.x}
            text={"X / Twitter"}
            to={"https://twitter.com"}
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
          <p className={styles["footer-info"]}>Special Offers</p>
          <FooterLink
            text={"Flash sale"}
            to={"/"}
          />
          <FooterLink
            text={"Daily offers"}
            to={"/"}
          />
          <FooterLink
            text={"Find deals"}
            to={"/"}
          />
          <FooterLink
            text={"Loyalty points"}
            to={"/"}
          />
        </div>
        <div className={styles["footer-list"]}>
          <p className={styles["footer-info"]}>Legal</p>
          <FooterLink
            text={"Terms of service"}
            to={"/"}
          />
          <FooterLink
            text={"Privacy policy"}
            to={"/"}
          />  
          <FooterLink
            text={"Refund policy"}
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
        <div className={styles["footer-list"]}>
          <p className={styles["footer-info"]}>About</p>
          <FooterLink
            text={"Company"}
            to={"/"}
          />
          <FooterLink
            text={"Contact us"}
            to={"/"}
          />
        </div>
      </footer>
      {
        modalState.open &&
        <Modal
          modalState={modalState}
          closeModal={closeModal}
        />
      }
      <ScrollRestoration/>
    </>
  )
}

export default App
