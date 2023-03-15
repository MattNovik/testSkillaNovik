import { useEffect, useRef, useState } from 'react';
import Api from '../../Api/Api';
import CallsTableItem from '../CallsTableItem';
import CustomLoader from '../CustomLoader';
import './index.scss';

const CallsTableList = ({
  filtersList,
  filterDate,
}: {
  filtersList: any;
  filterDate: any;
}) => {
  const [listOfCalls, setlistOfCalls] = useState<any>();
  const [copyCalls, setCopyCalls] = useState<any>();
  const refInput = useRef<any>();
  const [allCheckedStatus, setAllCheckedStatus] = useState<any>(false);

  useEffect(() => {
    Api.getListOfCalls('date_start=2023-03-14&date_end=2023-03-15&in_out= ')
      .then((response) => {
        setlistOfCalls([...response.data.results]);
        setCopyCalls([...response.data.results]);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (listOfCalls && listOfCalls.length && filtersList.length) {
      if (filtersList[0].value === 'Все типы') {
        setlistOfCalls(copyCalls);
      } else if (filtersList[0].value === 'Исходящие') {
        let newArr = [...copyCalls];
        let filteredArr = newArr.filter(
          (item: any) => item.status === 'Дозвонился'
        );
        setlistOfCalls(filteredArr);
      } else if (filtersList[0].value === 'Входящие') {
        let newArr = [...copyCalls];
        let filteredArr = newArr.filter(
          (item: any) => item.status !== 'Дозвонился'
        );
        setlistOfCalls(filteredArr);
      }
    }
  }, [filtersList]);

  useEffect(() => {
    if (filterDate.dateStart && filterDate.dateEnd) {
      Api.getListOfCalls(
        `date_start=${filterDate.dateStart}&date_end=${filterDate.dateEnd}&in_out= `
      )
        .then((response) => {
          setlistOfCalls([...response.data.results]);
          setCopyCalls([...response.data.results]);
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  }, [filterDate]);

  return (
    <div className="calls-table-list">
      <div className="calls-table-list__head">
        <div className="calls-table-list__head-block checkbox-block">
          <input
            className="checkbox-custom visibility-hidden"
            id="checked-all"
            type="checkbox"
            checked={allCheckedStatus}
            ref={refInput}
            onChange={() => setAllCheckedStatus(!allCheckedStatus)}
          />
          <label
            className="checkbox-custom-label"
            htmlFor="checked-all"
          ></label>
        </div>
        <div className="calls-table-list__head-block type-block">
          <span className="calls-talbe-list__type">Тип</span>
        </div>
        <div className="calls-table-list__head-block time-block">
          <span className="calls-talbe-list__time">Время</span>
        </div>
        <div className="calls-table-list__head-block user-block">
          <span className="calls-talbe-list__user">Сотрудник</span>
        </div>
        <div className="calls-table-list__head-block call-block">
          <span className="calls-talbe-list__call">Звонок</span>
        </div>
        <div className="calls-table-list__head-block source-block">
          <span className="calls-talbe-list__source">Источник</span>
        </div>
        <div className="calls-table-list__head-block mark-block">
          <span className="calls-talbe-list__mark">Оценка</span>
        </div>
        <div className="calls-table-list__head-block duration-block">
          <span className="calls-talbe-list__duration">Длительность</span>
        </div>
      </div>
      {listOfCalls ? (
        listOfCalls.length ? (
          <div className="calls-table-list__list">
            {listOfCalls.map((item: any, index: number) => (
              <CallsTableItem
                key={index}
                type={item.status}
                user={item.person_avatar}
                number={{
                  type: item.line_number,
                  telNumber: item.partner_data.phone,
                }}
                checked={{
                  id: item.id,
                  checkedValue: allCheckedStatus,
                }}
                source={{ title: item.partner_data.name, link: item.from_site }}
                time={item.date}
                mark={item.results[0]}
                sound={{
                  time: Number(item.time),
                  link: item.record,
                  id: item.partnership_id,
                }}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div>No data</div>
        )
      ) : (
        <CustomLoader width={'70'} height={70} />
      )}
    </div>
  );
};

export default CallsTableList;
