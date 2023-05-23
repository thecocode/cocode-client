import { DiscordLogo } from '@phosphor-icons/react';
import { ButtonTypes, Button as IButton } from '../../types';

export function Button({ link, type }: IButton) {
  return (
    <a href={link} className=''>
      <span
        className={`flex w-[200px] ml:w-[240px] mx-auto items-center h-[2.5rem] ml:h-[3rem] font-semibold justify-center text-[1.2rem] ml:text-[1.5rem] gap-4 outline outline-2 rounded-[1.5rem] py-3 px-6 ${
          type === ButtonTypes.DISCORD ? 'bg-discord-blue text-white' : 'bg-white text-black'
        } `}
      >
        <img className='w-[24px]' src='./assets/discord-logo.svg' alt='' />
        <div>Join Discord</div>
      </span>
    </a>
  );
}
