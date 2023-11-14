import { useState } from 'react';
import { ContactForm } from '../../components';
import { useMediaQuery } from '../../hooks';
import { ScreenTypes } from '../../types';
import { DiscordLogo, GithubLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';

export function ContactUs() {
  const { screenType } = useMediaQuery();
  const onSmallScreen = screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET;
  const [hoveredOverSocialName, setHoveredOverSocialName] = useState<string | null>(null);

  return (
    <main
      className={
        onSmallScreen
          ? 'px-[max(20px,6vw)] py-[max(30px,4.25vw)]'
          : 'px-[clamp(30px,10.3vw,155px)] py-[clamp(40px,6vw,100px)]'
      }
    >
      <img
        src='assets/contact-us-bg.svg'
        className='fixed left-0 right-0 -z-10 w-full bottom-0 ml:bottom-[unset]'
      />
      <div
        className={`text-[clamp(26px,3.2vw,55px)] capitalize pb-[clamp(32px,3.3vw,60px)] ${
          onSmallScreen ? 'text-center' : null
        }`}
      >
        <p className='font-semibold pb-1'>Get in touch</p>
        <p>We&apos;d love to hear from you!</p>
      </div>
      <div className={`grid ${onSmallScreen ? 'grid-cols-[1fr]' : 'grid-cols-[3fr,2fr]'}`}>
        <ContactForm />
        {onSmallScreen ? null : (
          <div className='flex flex-col items-center pt-2 justify-self-end'>
            <div>
              <p className='mb-6 text-[clamp(20px,1.8vw,28px)] font-medium'>Contact us</p>
              <div className='flex gap-[clamp(16px,2.5vw,36px)]'>
                {[
                  {
                    Icon: DiscordLogo,
                    to: 'https://discord.com/invite/WfZjwtPRYE',
                    socialName: 'Discord',
                  },
                  { Icon: TwitterLogo, to: 'https://twitter.com/thecocode', socialName: 'Twitter' },
                  { Icon: GithubLogo, to: 'https://github.com/thecocode', socialName: 'GitHub' },
                  {
                    Icon: LinkedinLogo,
                    to: 'https://www.linkedin.com/company/thecocode',
                    socialName: 'LinkedIn',
                  },
                ].map(({ Icon, socialName, to }) => (
                  <a
                    key={socialName}
                    href={to}
                    target='_blank'
                    rel='noreferrer'
                    className='aspect-square w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110'
                    onMouseEnter={() => setHoveredOverSocialName(socialName)}
                    onMouseLeave={() => setHoveredOverSocialName(null)}
                  >
                    <Icon
                      size='inherit'
                      weight={hoveredOverSocialName === socialName ? 'duotone' : 'regular'}
                      className='transition-colors'
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
