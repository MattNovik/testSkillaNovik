import './index.scss';

const CallsTableList = () => {
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
          <span className="calls-talbe-list__head-name">Тип</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__head-name">Время</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__head-name">Сотрудник</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__head-name">Звонок</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__head-name">Источник</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__head-name">Оценка</span>
        </div>
        <div className="calls-table-list__head-block calls-block">
          <span className="calls-talbe-list__head-name">Длительность</span>
        </div>
      </div>
    </div>
  );
};

export default CallsTableList;
