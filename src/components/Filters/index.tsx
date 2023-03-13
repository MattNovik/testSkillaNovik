import CustomSelect from '../CustomSelect';
import './index.scss';

const Filters = () => {
  return (
    <div className="filters">
      <ul className="filters__list">
        <li className="filters__item">
          <CustomSelect
            name="types"
            className="all"
            options={[{ name: 1 }, { name: 1 }, { name: 1 }]}
            currentSelect="first"
            multiple={false}
            handle={(e: any) => console.log(e)}
            activeOpt={undefined}
          />
        </li>
      </ul>
    </div>
  );
};

export default Filters;
