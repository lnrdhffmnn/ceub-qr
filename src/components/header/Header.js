import { Link } from 'react-router-dom';
import { MdSettings } from 'react-icons/md';
import './Header.css';

function Header() {
  return (
    <nav id='header'>
      <h1 id='title'><Link to='/'>CEUB</Link></h1>
      <Link to='/config'><MdSettings id='config' /></Link>
    </nav>
  );
}

export default Header;