import Logo from '../Logo';
import Menu from '../Menu';
import { ReactComponent as IconFullPlus } from '../../assets/icons/icon-full-plus.svg';
import { ReactComponent as IconFullAlert } from '../../assets/icons/icon-full-alert.svg';
import './index.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Menu />
      <button
        className="sidebar__button button button--add-order"
        type="button"
      >
        <span>Добавить заказ</span>
        <IconFullPlus />
      </button>
      <button
        className="sidebar__button button button--add-order"
        type="button"
      >
        <span>Оплата</span>
        <IconFullAlert />
      </button>
    </div>
  );
};

export default Sidebar;
