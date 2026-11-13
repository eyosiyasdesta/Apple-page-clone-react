import logo from "../assets/images/icons/logo.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import cart from "../assets/images/icons/cart.png";
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="links">
          <ul>
            <li>
              <a href="#">
                <img src={logo} alt="Apple" />
              </a>
            </li>
            <li>
              <a href="https://www.apple.com/mac/">Mac</a>
            </li>
            <li>
              <a href="https://www.apple.com/iphone/">iphone</a>
            </li>
            <li>
              <a href="https://www.apple.com/ipad/">ipad</a>
            </li>
            <li>
              <a href="https://www.apple.com/watch/">watch</a>
            </li>
            <li>
              <a href="https://www.apple.com/tv-home/">tv</a>
            </li>
            <li>
              <a href="https://www.apple.com/services/">music</a>
            </li>
            <li>
              <a href="https://support.apple.com/?cid=gn-ols-home-hp-tab">
                support
              </a>
            </li>
            <li>
              <a href="#">
                <img src={searchIcon} alt="Search" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={cart} alt="cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
