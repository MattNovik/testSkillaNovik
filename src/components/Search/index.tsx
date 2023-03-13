import './index.scss';
import { ReactComponent as IconSeach } from '../../assets/icons/icons-search.svg';

const Search = ({
  id,
  classname,
  placeholder,
}: {
  id: string | undefined;
  classname: string | undefined;
  placeholder: string | undefined;
}) => {
  return (
    <div className={classname ? 'search ' + classname : 'search'}>
      <input className="search__input" type="text" id={id} />
      <label className="search__label" htmlFor={id}>
        <IconSeach className="search__icon" />
        {placeholder ? (
          <span className="search__placeholder">{placeholder}</span>
        ) : null}
      </label>
    </div>
  );
};

export default Search;
