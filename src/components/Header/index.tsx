import { useEffect, useState } from 'react';
import ProfileMin from '../ProfileMin';
import Search from '../Search';
import './index.scss';

const WEEK_DAYS: any = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const MONTHS: any = {
  0: 'янв.',
  1: 'фев.',
  2: 'мар.',
  3: 'апр.',
  4: 'май',
  5: 'июнь',
  6: 'июль',
  7: 'авг.',
  8: 'сен.',
  9: 'окт.',
  10: 'ноя.',
  11: 'дек.',
};

const Header = () => {
  const [todaysDate, setTodaysDate] = useState<string>();
  const [coversion, setConversion] = useState<number>(67);
  const [quality, setQuality] = useState<number>(40);
  const [callsCount, setCallsCount] = useState<any>([20, 30]);

  useEffect(() => {
    setTodaysDate(
      String(
        WEEK_DAYS[new Date().getDay()] +
          ', ' +
          new Date().getDate() +
          ' ' +
          MONTHS[new Date().getMonth()]
      )
    );
    console.log(new Date().getDate());
  }, []);
  return (
    <div className="header">
      <p className="header__date">{todaysDate}</p>
      <ul className="header__wrapper-stats">
        <li className="header__wrapper-stats-item header__wrapper-stats-item--calls-count">
          <div className="header__stats-item-info">
            <span className="header__stats-item-name">Новые звонки </span>
            <div className="header__stats-item-counts">
              <span className="header__stats-item-from">{callsCount[0]}</span>
              <span className="header__stats-item-text"> из </span>
              <span className="header__stats-item-to">{callsCount[1]} </span>
              <span className="header__stats-item-type">шт</span>
            </div>
          </div>
          <div className="header__stats-item-row">
            <span
              className="header__stats-item-row-color"
              style={{ width: (callsCount[0] / callsCount[1]) * 100 + '%' }}
            ></span>
          </div>
        </li>
        <li className="header__wrapper-stats-item header__wrapper-stats-item--quality">
          <div className="header__stats-item-info">
            <span className="header__stats-item-name">
              Качество разговоров{' '}
            </span>
            <div className="header__stats-item-counts">
              <span className="header__stats-item-from">{quality}</span>
              <span className="header__stats-item-text">%</span>
            </div>
          </div>
          <div className="header__stats-item-row">
            <span
              className="header__stats-item-row-color"
              style={{ width: quality + '%' }}
            ></span>
          </div>
        </li>
        <li className="header__wrapper-stats-item header__wrapper-stats-item--conversion">
          <div className="header__stats-item-info">
            <span className="header__stats-item-name">Конверсия в заказ </span>
            <div className="header__stats-item-counts">
              <span className="header__stats-item-from">{coversion}</span>
              <span className="header__stats-item-text">%</span>
            </div>
          </div>
          <div className="header__stats-item-row">
            <span
              className="header__stats-item-row-color"
              style={{ width: coversion + '%' }}
            ></span>
          </div>
        </li>
      </ul>
      <Search id="header-search" classname="header" placeholder={undefined} />
      <ProfileMin
        name="ИП Сидорова Александра Михайловна"
        image="https://lk.skilla.ru/img/noavatar.jpg"
      />
    </div>
  );
};

export default Header;
