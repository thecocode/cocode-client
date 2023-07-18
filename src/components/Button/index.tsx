/* eslint-disable react/button-has-type */
import { DiscordLogo } from '@phosphor-icons/react';
import { ButtonTypes, Button as IButton } from '../../types';
import { ButtonHTMLAttributes } from 'react';

enum ButtonVariants {
  PRIMARY = 'primary',
}
interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  LeftIcon?: () => JSX.Element;
  RightIcon?: () => JSX.Element;
  title?: string;
  variant?: ButtonVariants;
  extendedClassNames?: string;
  link?: string;
}

const buttonStyles = {
  primary: 'rounded-full border border-solid border-current font-medium',
};

export function BaseButton({
  title,
  type,
  LeftIcon,
  RightIcon,
  link,
  extendedClassNames,
  variant = ButtonVariants.PRIMARY,
}: IBaseButton) {
  function getVariantStyles() {
    return buttonStyles[variant];
  }

  return (
    <button
      type={type || 'button'}
      className={`px-[clamp(20px,2.9vw,40px)] py-[clamp(12px,1.25vw,24px)] flex items-center justify-center gap-4 ${getVariantStyles()} ${
        extendedClassNames ? extendedClassNames : null
      }`}
    >
      {link ? <a href={link} /> : null}
      {LeftIcon ? <LeftIcon /> : null}
      {title}
      {RightIcon ? <RightIcon /> : null}
    </button>
  );
}

export function Button({ link, type }: IButton) {
  return (
    <a href={link} className=''>
      <span
        className={`flex max-w-[240px] mx-auto items-center h-[3rem] font-semibold justify-center text-[1.5rem] gap-4 outline outline-2 rounded-[1.5rem]  px-6 ${
          type === ButtonTypes.DISCORD ? 'bg-discord-blue text-white' : 'bg-white text-black'
        } `}
      >
        <DiscordLogo />
        <div>Join Discord</div>
      </span>
    </a>
  );
}
