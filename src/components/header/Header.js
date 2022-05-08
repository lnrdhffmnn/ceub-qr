import { Link } from 'react-router-dom';
import { MdSettings } from 'react-icons/md';
import './Header.css';

function Header() {
  return (
    <nav id='header'>
      <Link to='/'><h1 id='title'>CEUB</h1></Link>
      <Link to='/config'><MdSettings id='config' /></Link>
    </nav>
  );
}

export default Header;