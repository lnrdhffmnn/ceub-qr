import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdSettings, MdClose } from 'react-icons/md';
import './Header.css';

function Header() {
  const location = useLocation();

  const [headerBtn, setHeaderBtn] = useState(<></>);

  useEffect(() => {
    switch (location.pathname) {
      case '/config':
        setHeaderBtn(
          <Link to='/'><MdClose className='header-btn' /></Link>
        );
        break;

      default:
        setHeaderBtn(
          <Link to='/config'><MdSettings className='header-btn' /></Link>
        );
        break;
    }
  }, [location]);

  return (
    <nav id='header'>
      <h1 id='title'>CEUB</h1>
      {headerBtn}
    </nav>
  );
}

export default Header;