import { Link } from 'react-router-dom';
import { ContactForm } from '../../components';
import { useMediaQuery } from '../../hooks';
import { ScreenTypes } from '../../types';

export function ContactUs() {
  const { screenType } = useMediaQuery();
  const onSmallScreen = screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET;
  return (
    <main
      style={{ backgroundImage: 'url(assets/contact-us-bg.svg)' }}
      className={`${
        onSmallScreen
          ? 'px-[max(20px,6vw)] py-[max(30px,4.25vw)]'
          : 'px-[clamp(30px,10.3vw,155px)] py-[clamp(40px,6vw,100px)]'
      } bg-no-repeat bg-bottom`}
    >
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
                  { imgSrc: '', to: '', socialName: '' },
                  { imgSrc: '', to: '', socialName: '' },
                  { imgSrc: '', to: '', socialName: '' },
                  { imgSrc: '', to: '', socialName: '' },
                ].map(({ imgSrc, socialName, to }) => (
                  <Link key={socialName} to={to}>
                    <div className='aspect-square w-9 h-9 rounded-full bg-slate-500' />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
