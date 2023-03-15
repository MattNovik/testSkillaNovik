import './index.scss';
import { ReactComponent as IconHalfArrow } from '../../assets/icons/icon-half-arrow.svg';
import { ReactComponent as IconPlus } from '../../assets/icons/icon-plus.svg';
import { ReactComponent as IconCalendar } from '../../assets/icons/icon-calendar.svg';
import CustomSelect from '../CustomSelect';

const convertToYYYYMMDD = (date: any) => {
  let yourDate = date;
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  return yourDate.toISOString().split('T')[0];
};

const DateBalance = ({ setFilterDate }: { setFilterDate: any }) => {
  const handleFilterDate = (value: any, e: any) => {
    let dateStart;
    let dateEnd;
    if (value === '3 дня') {
      let today = new Date();
      let daysAgo = new Date();
      dateEnd = convertToYYYYMMDD(today);
      dateStart = convertToYYYYMMDD(
        new Date(daysAgo.setDate(daysAgo.getDate() - 2))
      );
    } else if (value === 'Неделя') {
      let today = new Date();
      let daysAgo = new Date();
      dateEnd = convertToYYYYMMDD(today);
      dateStart = convertToYYYYMMDD(
        new Date(
          daysAgo.getFullYear(),
          daysAgo.getMonth(),
          daysAgo.getDate() - 7
        )
      );
    } else if (value === 'Месяц') {
      let today = new Date();
      let daysAgo = new Date();
      dateEnd = convertToYYYYMMDD(today);
      dateStart = convertToYYYYMMDD(
        new Date(daysAgo.setMonth(daysAgo.getMonth() - 1))
      );
    } else if (value === 'Год') {
      let today = new Date();
      let daysAgo = new Date();
      dateEnd = convertToYYYYMMDD(today);
      dateStart = convertToYYYYMMDD(
        new Date(daysAgo.setFullYear(daysAgo.getFullYear() - 1))
      );
    }

    setFilterDate({ dateStart: dateStart, dateEnd: dateEnd });
  };

  return (
    <div className="date-balance">
      <div className="date-balance__balance">
        <div className="date-balance__balance-text">
          Баланс: <span className="date-balance__balance-count">275 ₽</span>
        </div>
        <IconPlus />
      </div>
      <div className="date-balance__date">
        <button className="date-balance__date-prev" type="button">
          <IconHalfArrow />
        </button>
        <CustomSelect
          name="date"
          className="custom-date"
          options={[
            { name: '3 дня', value: 1 },
            { name: 'Неделя', value: 2 },
            { name: 'Месяц', value: 3 },
            { name: 'Год', value: 4 },
          ]}
          currentSelect={1}
          multiple={false}
          handle={(value: any, e: any) => {
            handleFilterDate(value, e);
          }}
          activeOpt={1}
        >
          <button className="date-balance__date-calendar" type="button">
            <IconCalendar />
          </button>
        </CustomSelect>

        <button className="date-balance__date-next" type="button">
          <IconHalfArrow />
        </button>
      </div>
    </div>
  );
};

export default DateBalance;
