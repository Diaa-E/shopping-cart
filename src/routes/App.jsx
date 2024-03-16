import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import theme from "../styles/theme.module.css";
import styles from "../styles/App.module.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    document.body.classList.add(theme.light);
  })

  return (
    <>
      <header className={styles.header}>
        <Link to={"/"}>Home</Link>
        <NavBar />
      </header>
      <Outlet />
    </>
  )
}

export default App
