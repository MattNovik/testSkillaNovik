import CustomSelect from '../CustomSelect';
import './index.scss';

const Filters = ({
  filterList,
  setFilterList,
}: {
  filterList: any;
  setFilterList: any;
}) => {
  const handleUpdateFilters = (value: any, e: any) => {
    const name = e.target
      .closest('.select ')
      .querySelector('.select__hidden').name;
    let newArr = [...filterList];
    if (newArr.find((item: any) => item.name === name)) {
      newArr[newArr.findIndex((item: any) => item.name === name)].value = value;
    } else {
      newArr.push({ name: name, value: value });
    }
    setFilterList(newArr);
  };
  return (
    <div className="filters">
      <ul className="filters__list">
        <li className="filters__item">
          <CustomSelect
            children={undefined}
            name="types"
            className="all"
            options={[
              { name: 'Все типы', value: 1 },
              { name: 'Входящие', value: 2 },
              { name: 'Исходящие', value: 3 },
            ]}
            currentSelect={1}
            multiple={false}
            handle={(value: any, e: any) => {
              handleUpdateFilters(value, e);
            }}
            activeOpt={1}
          />
        </li>
        <li className="filters__item">
          <CustomSelect
            children={undefined}
            name="users"
            className="all"
            options={[
              { name: 'Все сотрудники', value: 1 },
              { name: 'Константин К.', value: 2 },
              { name: 'Полина З.', value: 3 },
            ]}
            currentSelect={1}
            multiple={false}
            handle={(e: any) => console.log(e)}
            activeOpt={1}
          />
        </li>
        <li className="filters__item">
          <CustomSelect
            children={undefined}
            name="calls"
            className="all"
            options={[
              { name: 'Все звонки', value: 1 },
              { name: 'Все клиенты', value: 2 },
              { name: 'Новые клиенты', value: 3 },
              { name: 'Все исполнители', value: 4 },
              { name: 'Через приложение', value: 5 },
              { name: 'Прочие звонки', value: 6 },
            ]}
            currentSelect={1}
            multiple={false}
            handle={(e: any) => console.log(e)}
            activeOpt={1}
          />
        </li>
        <CustomSelect
          children={undefined}
          name="types"
          className="all"
          options={[
            { name: 'Все источник', value: 1 },
            { name: 'Настоящие', value: 2 },
            { name: 'Ненастоящие', value: 3 },
          ]}
          currentSelect={1}
          multiple={false}
          handle={(e: any) => console.log(e)}
          activeOpt={1}
        />
        <li className="filters__item">
          <CustomSelect
            children={undefined}
            name="marks"
            className="all"
            options={[
              { name: 'Все оценки', value: 1 },
              { name: 'Распознать', value: 2 },
              { name: 'Скрипт не использован', value: 3 },
              { name: 'Плохо', value: 4 },
              { name: 'Хорошо', value: 5 },
              { name: 'Отлично', value: 6 },
              { name: 'red', value: 7 },
              { name: 'grey', value: 8 },
              { name: 'blue', value: 9 },
            ]}
            currentSelect={1}
            multiple={false}
            handle={(e: any) => console.log(e)}
            activeOpt={1}
          />
        </li>
        <li className="filters__item">
          <CustomSelect
            children={undefined}
            name="errors"
            className="all"
            options={[
              { name: 'Все ошибки', value: 1 },
              { name: 'Приветствие', value: 2 },
              { name: 'Имя', value: 3 },
              { name: 'Цена', value: 4 },
              { name: 'Скидка', value: 5 },
              { name: 'Предзаказ', value: 6 },
              { name: 'Благодарность', value: 7 },
              { name: 'Стоп слова', value: 8 },
            ]}
            currentSelect={1}
            multiple={false}
            handle={(e: any) => console.log(e)}
            activeOpt={1}
          />
        </li>
      </ul>
    </div>
  );
};

export default Filters;
