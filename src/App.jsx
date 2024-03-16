import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <Link to={"/"}>Home</Link>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
