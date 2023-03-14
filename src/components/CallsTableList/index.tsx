import { useEffect, useState } from 'react';
import Api from '../../Api/Api';
import './index.scss';

const CallsTableList = () => {
  const [listOfCalls, setlistOfCalls] = useState<any>();

  useEffect(() => {
    Api.getListOfCalls('date_start=2001-01-01&date_end=2023-03-14&in_out=0')
      .then((response) => {
        setlistOfCalls([...response.data.results]);
        console.log(response);})
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="calls-table-list">
      <div className="calls-table-list__head">
        <div className="calls-table-list__head-block calls-block">
          <input className="checkbox-custom" id="checked-all" type="checkbox" />
          <label
            className="checkbox-custom-label"
            htmlFor="checked-all"
          ></label>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__type">Тип</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__time">Время</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__user">Сотрудник</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__call">Звонок</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__source">Источник</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__mark">Оценка</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__duration">Длительность</span>
        </div>
      </div>
    </div>
  );
};

export default CallsTableList;
