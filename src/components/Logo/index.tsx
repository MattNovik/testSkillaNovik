import './index.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <LogoIcon />
      </Link>
    </div>
  );
};

export default Logo;
