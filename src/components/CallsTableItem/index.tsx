import './index.scss';
import { ReactComponent as IconArrow } from '../../assets/icons/icon-arrow-angle.svg';

const CallsTableItem = ({
  checked,
  type,
  time,
  user,
  number,
  source,
  mark,
  sound,
}: {
  checked: string | boolean | undefined;
  type: string | undefined;
  time: Date | string | number;
  user: string | undefined;
  number: { type: string; telNumber: string | number | undefined };
  source: { title: string | undefined; link: string | undefined };
  mark: number | string | undefined;
  sound: { time: number; link: string | undefined };
}) => {
  return <div className="calls-table-item">
    <div className='calls-table-item__checkbox calls-block'></div>
    <div className='calls-table-item__type calls-block'><IconArrow/></div>
    <div className='calls-table-item__time calls-block'></div>
    <div className='calls-table-item__user calls-block'></div>
    <div className='calls-table-item__call calls-block'></div>
    <div className='calls-table-item__source calls-block'></div>
    <div className='calls-table-item__mark calls-block'></div>
    <div className='calls-table-item__duration calls-block'></div>
  </div>;
};

export default CallsTableItem;
