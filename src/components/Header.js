import { Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import headerLogo from '../images/ecologo.png'

function Header( {isLoggedIn, userEmail, onSignOut} ) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  // function showMenu() {
  //   setIsOpenMenu(!isOpenMenu)
  // }
  
  // function signOut() {
  //   setIsOpenMenu(false);
  //   onSignOut();
  // }
  
  return (
    <header className={!isOpenMenu ? 'header' : 'header header__menu'}>
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={ headerLogo } alt="Лого" /> 
        </Link>
      </div>
      <Switch>
        <Route path="/">
            <nav className="header__nav__container">
              <Link className="header__nav__links" to="/">
                Главная
              </Link>
              <Link className="header__nav__links" to="/about-us">
                О нас
              </Link>
              <Link className="header__nav__links" to="/shop">
                Магазин
              </Link>
              <Link className="header__nav__links" to="/contacts">
                Контакты
              </Link>
            </nav>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;