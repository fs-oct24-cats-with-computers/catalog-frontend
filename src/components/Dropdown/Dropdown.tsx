import { useState } from 'react';
import ArrowDown from '../../../public/icons/Chevron (Arrow Down).svg?react';
import './Dropdowm.scss';
import cn from 'classnames';

// const testArrayw = [
//   'newest',
//   'price ⬇️',
//   'price ⬆️',
//   'alphabet ⬇️',
//   'alphabet ⬆️',
// ];

// const testArray = [
//   { label: 'newest', value: 'newest' },
//   { label: 'price ⬇️', value: 'price-desc' },
//   { label: 'price ⬆️', value: 'price-asc' },
//   { label: 'alphabet ⬇️', value: 'alph-desc' },
//   { label: 'alphabet ⬆️', value: 'alph-asc' },
// ];

type SortByOption = {
  label: string;
  value: string;
};

type Props = {
  sortBy: string;
  handleSortBy: (sortOption: string) => void;
  options: SortByOption[];
};

export const Dropdown: React.FC<Props> = (props) => {
  const { sortBy, handleSortBy, options } = props;
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleMenu = () => {
    setIsListOpen(!isListOpen);
  };

  const currentLabel =
    options.find((option) => option.value === sortBy)?.label ||
    'Select an option';

  return (
    <>
      {/* <label className='label' htmlFor="dropdown">Sort by</label> */}
      <div
        id="dropdown"
        className="dropdown"
      >
        <section
          onClick={toggleMenu}
          className="dropdown__current"
        >
          <p className="dropdown__current--text">
            {currentLabel === 'none' ? 'Select an option' : currentLabel}
          </p>
          <ArrowDown
            className={cn('dropdown__current--icon', { open: isListOpen })}
          />
        </section>
        {isListOpen && (
          <section className="dropdown__menu">
            {options.map(({ label, value }) => (
              <div
                onClick={() => {
                  handleSortBy(value);
                  setIsListOpen(false);
                }}
                key={value}
                className="dropdown__menu--option"
              >
                {label}
              </div>
            ))}
            {currentLabel !== 'Select an option' && (
              <div
                onClick={() => {
                  handleSortBy('none');
                  setIsListOpen(false);
                }}
                className="dropdown__menu--option"
              >
                none
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
};
