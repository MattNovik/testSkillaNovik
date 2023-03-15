import CallsTableList from '../components/CallsTableList';
import DateBalance from '../components/DateBalance';
import Filters from '../components/Filters';
import Search from '../components/Search';
import { useState } from 'react';

const CallsPage = () => {
  const [filtersList, setFilterList] = useState<any>([]);
  const [filterDate, setFilterDate] = useState<any>([]);
  return (
    <div className="calls-page">
      <DateBalance setFilterDate={setFilterDate} />
      <div className="filters-wrapper">
        <Search id="calls" classname="calls" placeholder="Поиск по звонкам" />
        <Filters filterList={filtersList} setFilterList={setFilterList} />
      </div>
      <CallsTableList filtersList={filtersList} filterDate={filterDate} />
    </div>
  );
};

export default CallsPage;
