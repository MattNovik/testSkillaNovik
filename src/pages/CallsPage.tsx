import CallsTableList from '../components/CallsTableList';
import Filters from '../components/Filters';
import Search from '../components/Search';

const CallsPage = () => {
  return (
    <div className="calls-page">
      <div className="calls-page__filters-wrapper">
        <Search id="calls" classname="calls" placeholder="Поиск по звонкам" />
        {/* <Filters /> */}
        <CallsTableList />
      </div>
    </div>
  );
};

export default CallsPage;
