import './index.scss';

const ProfileMin = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="profile-min">
      <buttton className="profile-min__name-selector" type="button">
        {name}
      </buttton>
      <button className="profile-min__image-selector" type="button">
        {image}
      </button>
    </div>
  );
};

export default ProfileMin;
