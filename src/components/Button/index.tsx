import { DiscordLogo } from '@phosphor-icons/react';
import { ButtonTypes, Button as IButton } from '../../types';

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
