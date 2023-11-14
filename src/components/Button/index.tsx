/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';
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

export function DiscordButton() {
  return (
    <a
      className='flex items-center font-semibold justify-center w-fit text-sm gap-4 rounded-full mx-auto py-[12px] px-[28px] transition-all shadow-[0_8px_0px_#B0B3EA] ml:mt-[8px] ml:shadow-none ml:hover:-translate-y-[8px] ml:hover:shadow-[0_8px_0px_#B0B3EA] bg-discord-blue text-white ml:py-[18px] ml:px-[32px]'
      href='https://discord.com/invite/WfZjwtPRYE'
      target='_blank'
      rel='noreferrer'
    >
      <img className='max-w-[22px] tb:max-w-[28px]' src='./assets/discord-logo.svg' alt='' />
      <span>Join Discord</span>
    </a>
  );
}
