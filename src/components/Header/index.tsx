import ProfileMin from '../ProfileMin';
import Search from '../Search';
import './index.scss';

const Header = () => {
  return (
    <div className="header">
      <p className="header__date"></p>
      <ul className="header__wrapper-stats">
        <li className="header__wrapper-stats-item">
          <div className="header__stats-item-info">
            <span className="header__stats-item-name"></span>
            <div className="header__stats-item-counts">
              <span className="header__stats-item-from"></span>
              <span className="header__stats-item-text">из</span>
              <span className="header__stats-item-to"></span>
              <span className="header__stats-item-type"></span>
            </div>
          </div>
          <div className="header__stats-item-row"></div>
        </li>
      </ul>
      <Search id="header-search" classname="header" placeholder={undefined} />
      <ProfileMin name="man" image="newman" />
    </div>
  );
};

export default Header;
