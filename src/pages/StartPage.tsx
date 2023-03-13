import { Outlet } from 'react-router';
import Content from '../components/Content';

const StartPage = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

export default StartPage;
