import './index.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconCase } from '../../assets/icons/icon-case.svg';
import { ReactComponent as IconDocs } from '../../assets/icons/icon-docs.svg';
import { ReactComponent as IconGraphs } from '../../assets/icons/icon-graphs.svg';
import { ReactComponent as IconKnowledge } from '../../assets/icons/icon-knowledge.svg';
import { ReactComponent as IconMessages } from '../../assets/icons/icon-messages.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/icon-phone.svg';
import { ReactComponent as IconSettings } from '../../assets/icons/icon-settings.svg';
import { ReactComponent as IconTwoCheck } from '../../assets/icons/icon-two-check.svg';
import { ReactComponent as IconUser } from '../../assets/icons/icon-user.svg';
import { ReactComponent as IconUsers } from '../../assets/icons/icon-users.svg';
import MENU_LIST from '../../data/menu';

const MENU_ICONS: any = {
  case: <IconCase />,
  docs: <IconDocs />,
  graphs: <IconGraphs />,
  knowledge: <IconKnowledge />,
  messages: <IconMessages />,
  phone: <IconPhone />,
  settings: <IconSettings />,
  twoCheck: <IconTwoCheck />,
  user: <IconUser />,
  users: <IconUsers />,
};

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        {MENU_LIST.map((item: any) => (
          <li className="menu__item">
            <NavLink to={item.to} className="menu__link">
              <span className="menu__link-icon">{MENU_ICONS[item.icon]}</span>
              <span className="menu__link-text">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
