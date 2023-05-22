import { useState } from 'react';
import { Input, ScreenTypes } from '../../types';
import { Label } from '../Inputs';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { useMediaQuery } from '../../hooks';

interface Option {
  title: string;
  value: string;
  isDefaultValue?: boolean;
}

interface IDropdown extends Omit<Input, 'inputAttributes'> {
  options: Option[];
}

export function Dropdown({ options, labelTitle, disabled, error, labelAttributes }: IDropdown) {
  const { screenType } = useMediaQuery();
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(() =>
    options.find(({ isDefaultValue }) => isDefaultValue),
  );
  const onSmallScreen = screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET;

  function toggleMenu() {
    setIsOptionsMenuOpen((prev) => !prev);
  }

  return (
    <div className='flex flex-col'>
      {labelTitle ? (
        <Label
          {...labelAttributes}
          labelTitle={labelTitle}
          disabled={disabled}
          error={error}
          onClick={toggleMenu}
        />
      ) : null}
      <div className='flex w-full justify-center relative'>
        <button
          type='button'
          onClick={toggleMenu}
          className={`input-basic w-full relative text-start grid grid-cols-[1fr,15px] border border-solid transition-colors ${
            isOptionsMenuOpen ? 'border-current' : 'border-transparent'
          }`}
        >
          {selectedOption?.title ? <span>{selectedOption.title}</span> : null}
          <span className='self-end flex h-full items-center'>
            {isOptionsMenuOpen ? <CaretUp /> : <CaretDown />}
          </span>
        </button>
        {isOptionsMenuOpen ? (
          <ul
            className={`absolute top-[calc(100%+4px)] w-full bg-input-bg rounded-md overflow-y-auto ${
              onSmallScreen ? 'max-h-[150px]' : 'max-h-[180px]'
            }`}
          >
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type='button'
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOptionsMenuOpen(false);
                  }}
                  className='input-basic w-full text-start transition-colors hover:bg-[#EAEAEA]'
                >
                  {option.title}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {error && !disabled ? (
        <span className='text-error mt-1 text-xs font-semibold'>{error}</span>
      ) : null}
    </div>
  );
}
