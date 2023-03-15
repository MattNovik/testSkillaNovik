import './index.scss';
import { ReactComponent as IconHalfArrow } from '../../assets/icons/icon-half-arrow.svg';

const ProfileMin = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="profile-min">
      <button className="profile-min__name-selector" type="button">
        <span className="profile-min__name-text">{name}</span>
        <IconHalfArrow />
      </button>
      <button className="profile-min__image-selector" type="button">
        <img src={image} alt="user" width="40" height="40" />
        <IconHalfArrow />
      </button>
    </div>
  );
};

export default ProfileMin;
