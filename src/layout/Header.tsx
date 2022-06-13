import { Link } from 'react-router-dom'

import appRoutes from '../pages/routes'

const Header = () => {
  return (
    <header className="header">
      {/* <Link to={'/flashLoanBot'} className="header__logo">
        <img src="../assets/images/bstar.jpg" alt="logo"/>
      </Link> */}
      <nav className="haedaer__menu">
        {/* {Object.entries(appRoutes).map(
          ([element, { path, title }], key) =>
            (
              <Link to={path} key={element} className="header__link">
                {title}
              </Link>
            ),
        )} */}
      </nav>
      <div className="header__auth">
        <Link
          className="button button_style_primary button_size_medium"
          to="/signup"
        >
          Connect to Metamask
        </Link>
      </div>
    </header>
  )
}

export default Header
