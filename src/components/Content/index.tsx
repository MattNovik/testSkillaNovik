import './index.scss';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const Content = ({ children }: any) => {
  return (
    <main className="main">
      <div className="main__grid d-flex">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="content__central">
            <div className="content__outlet">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Content;
