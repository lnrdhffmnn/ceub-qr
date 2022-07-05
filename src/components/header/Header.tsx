import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdSettings, MdClose } from "react-icons/md";
import "./Header.css";

function Header() {
  const [headerBtn, setHeaderBtn] = useState<ReactElement>();

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderBtn(
          <Link to="/settings" className="header-btn" draggable={false}>
            <MdSettings />
          </Link>
        );
        break;
      case "/settings":
        setHeaderBtn(
          <Link to="/" className="header-btn" draggable={false}>
            <MdClose />
          </Link>
        );
        break;
      default:
        setHeaderBtn(<></>);
        break;
    }
  }, [location]);

  return (
    <nav id="header">
      <h1 id="title">
        <Link to="/" draggable={false}>CEUB</Link>
      </h1>
      {headerBtn}
    </nav>
  );
}

export default Header;