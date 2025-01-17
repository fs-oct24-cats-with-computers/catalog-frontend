import ArrowDown from '../../../public/icons/Chevron (Arrow Down).svg?react';
import cn from 'classnames';
import './Dropdown.scss';
import { useState } from 'react';

type SortByOption = {
  label: string;
  value: string;
};

type ItemsPerPageOptions = {
  label: number;
  value: number;
};

type Props = {
  options: SortByOption[] | ItemsPerPageOptions[];
  // sortBy: string;
  // itemsPerPage: number;
  sort: string | number;
  handleSortBy?: (sortOption: string) => void;
  handleItemsPerPage?: (value: number) => void;
};

export const Dropdown: React.FC<Props> = (props) => {
  const { options, sort, handleSortBy, handleItemsPerPage } = props;
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const currentLabel =
    options.find((option) => option.value === sort)?.label || 'Select';
  return (
    <div
      id="dropdown"
      className="dropdown"
    >
      <section
        onClick={toggleList}
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
                if (handleSortBy) {
                  handleSortBy(value.toString());
                } else if (handleItemsPerPage) {
                  handleItemsPerPage(Number(value));
                }
                setIsListOpen(false);
              }}
              key={value}
              className="dropdown__menu--option"
            >
              {label}
            </div>
          ))}
          {currentLabel !== 'Select' && (
            <div
              onClick={() => {
                if (handleSortBy) {
                  handleSortBy('none');
                } else if (handleItemsPerPage) {
                  handleItemsPerPage(0);
                }
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
  );
};
