/* eslint-disable react/button-has-type */
import { DiscordLogo } from '@phosphor-icons/react';
import { ButtonTypes, Button as IButton } from '../../types';
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
enum ButtonVariants {
  PRIMARY = 'primary',
}
interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  LeftIcon?: () => JSX.Element;
  RightIcon?: () => JSX.Element;
  title?: string;
  variant?: ButtonVariants;
  extendedClassNames?: string;
  link?: string;
}

const buttonStyles = {
  primary: 'rounded-full border border-solid border-current font-medium bg-primary',
};

export function BaseButton({
  loading,
  title,
  type,
  LeftIcon,
  RightIcon,
  link,
  extendedClassNames,
  variant = ButtonVariants.PRIMARY,
  ...props
}: IBaseButton) {
  function getVariantStyles() {
    return buttonStyles[variant];
  }

  return (
    <button
      type={type || 'button'}
      className={`px-[clamp(18px,2.9vw,40px)] py-[clamp(10px,1.25vw,24px)] flex items-center justify-center gap-4 text-sm relative overflow-hidden ${getVariantStyles()} ${
        extendedClassNames ? extendedClassNames : null
      }`}
      {...props}
    >
      <>
        {loading ? (
          <span className='absolute inset-0 flex justify-center items-center bg-inherit'>
            loading...
          </span>
        ) : null}
        {LeftIcon ? <LeftIcon /> : null}
        {title}
        {RightIcon ? <RightIcon /> : null}
      </>
    </button>
  );
}

export function Button({ link, type }: IButton) {
  return (
    <a href={link} className=''>
      <span
        className={`flex w-[220px] ml:w-[240px] mx-auto items-center h-[2.5rem] ml:h-[3rem] font-semibold justify-center text-[1.2rem] ml:text-[1.5rem] gap-4 outline outline-2 rounded-[1.5rem] py-3 px-6 ${
          type === ButtonTypes.DISCORD ? 'bg-discord-blue text-white' : 'bg-white text-black'
        } `}
      >
        <img className='w-[24px]' src='./assets/discord-logo.svg' alt='' />
        <div>Join Discord</div>
      </span>
    </a>
  );
}
