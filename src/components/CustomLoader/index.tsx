import './index.scss';
import { MutatingDots } from 'react-loader-spinner';

const CustomLoader = ({ width, height }: { width: string; height: number }) => {
  return (
    <div className="custom-loader">
      <MutatingDots
        height="100"
        width="100"
        color="#002CFB"
        secondaryColor="#002CFB"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default CustomLoader;
