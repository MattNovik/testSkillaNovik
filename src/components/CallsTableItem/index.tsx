import './index.scss';

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
  type: boolean | undefined;
  time: Date | string | number;
  user: string | undefined;
  number: { type: string; telNumber: string | number | undefined };
  source: { title: string | undefined; link: string | undefined };
  mark: number | string | undefined;
  sound: { time: number; link: string | undefined };
}) => {
  return <div className="calls-table-item"></div>;
};

export default CallsTableItem;
