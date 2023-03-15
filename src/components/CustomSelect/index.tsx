import './index.scss';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

const CustomSelect = ({
  children,
  name,
  className,
  options,
  currentSelect,
  multiple,
  handle,
  activeOpt,
}: {
  children: any;
  name: string;
  className: string;
  options: any;
  currentSelect: string | number | undefined;
  multiple: boolean;
  handle: Function;
  activeOpt: any;
}) => {
  const [showSelect, setShowSelect] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [activeOption, setActiveOption] = useState(null);
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    setActiveOption(
      currentSelect
        ? options.find((item: any) => item.value === currentSelect).name
        : activeOpt
        ? activeOpt
        : options[0].name
    );
  }, [currentSelect]);

  const selectClass = cn(
    className,
    'select',
    !!showSelect && 'select_show',
    !multiple && 'select-short'
  );

  const dropdownClass = cn(
    'select__dropdown',
    !!showSelect && 'select__dropdown_show'
  );

  const changeSelect = (value: any, e: any) => {
    handle ? handle(value, e) : null;
    if (!multiple) {
      setActiveOption(value);
      setShowSelect(false);
      return;
    }

    let arraySources: any = [...dataSelect, value];
    if (!e.target.checked) {
      arraySources = arraySources.filter((el: any) => {
        return el != value;
      });
    }
    setDataSelect(arraySources);
  };

  const deleteSource = (e: Event) => {
    e.stopPropagation();
  };

  const toggleSelect = (e: Event) => {
    if (!showSelect) {
      setShowSelect(true);
      return;
    }
    setShowSelect(false);
  };

  useEffect(() => {
    const handlerClick = (e: Event) => {
      wrapperRef.current?.contains(e.target) || setShowSelect(false);
    };
    document.addEventListener('click', handlerClick);
    return () => document.removeEventListener('click', handlerClick);
  }, []);

  return (
    <div className={selectClass} ref={wrapperRef}>
      <select className="select__hidden" name={name} value={currentSelect}>
        {options.map((el: any, index: number) => (
          <option value={el.value ?? el.name} key={index}>
            {el.name}
          </option>
        ))}
      </select>
      <div className="select__box" onClick={(e: any) => toggleSelect(e)}>
        {children}
        {dataSelect.length > 0 ? (
          <div className="select__list d-flex">
            {dataSelect.map((el, i) => (
              <div
                className="select__source"
                onClick={(e: any) => deleteSource(e)}
                key={i + 'q'}
              >
                {el}
                <div className="select__close close"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="select__current">
            {multiple ? currentSelect : activeOption}
          </div>
        )}
      </div>
      <div className={dropdownClass}>
        {options.map((el: any, index: number) =>
          multiple ? (
            <label
              className="select__element d-flex"
              key={index}
              htmlFor={String(index)}
            >
              <input
                type="checkbox"
                id={String(index)}
                value={el.value ?? el.name}
                onChange={(e) => changeSelect(el.name, e)}
                className="select__checkbox"
              />
              <span className="select__value">{el.name}</span>
            </label>
          ) : (
            <div
              className="select__element d-flex"
              key={index}
              data-value={el.value ? el.value : null}
              data-link={el.link ? el.link : null}
              data-linkid={el.linkId ? el.linkId : null}
              onClick={(e) => changeSelect(el.name, e)}
            >
              <span className="select__value">{el.name}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
