import { DiscordLogo } from '@phosphor-icons/react';

interface buttonProps {
    link: string;
    type: string;
}

export default function Button(props: buttonProps) {
  return (
    <a href={props.link} className=''>
      <span className={`flex max-w-[240px] mx-auto items-center h-[3rem] font-semibold justify-center text-[1.5rem] gap-4 outline outline-2 rounded-[1.5rem]  px-6 ${ props.type=== 'discord' ? 'bg-discord-blue text-white' : 'bg-white text-black'} `}>
        <DiscordLogo />
        <div>Join Discord</div>
      </span>
    </a>
  );
}
