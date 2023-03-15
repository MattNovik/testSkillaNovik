import './index.scss';
import { ReactComponent as IconSeach } from '../../assets/icons/icons-search.svg';
import { ReactComponent as IconClose } from '../../assets/icons/icon-close.svg';
import { useRef, useState } from 'react';

const Search = ({
  id,
  classname,
  placeholder,
}: {
  id: string | undefined;
  classname: string | undefined;
  placeholder: string | undefined;
}) => {
  const ref = useRef<any>();
  const [focusState, setFocusState] = useState<boolean>(false);
  return (
    <div
      className={
        classname
          ? focusState
            ? 'search search--focus search-' + classname
            : 'search search-' + classname
          : focusState
          ? 'search search--focus'
          : 'search'
      }
    >
      <input
        className="search__input"
        type="text"
        id={id}
        placeholder={placeholder}
        ref={ref}
        onFocus={() => setFocusState(true)}
        onBlur={() => setFocusState(false)}
      />
      <label className="search__label" htmlFor={id}>
        <IconSeach className="search__icon" />
        <IconClose className="search__close" />
        {/* {placeholder ? (
          <span className="search__placeholder">{placeholder}</span>
        ) : null} */}
      </label>
    </div>
  );
};

export default Search;
