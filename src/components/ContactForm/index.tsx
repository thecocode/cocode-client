import { useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks';
import { ScreenTypes } from '../../types';
import { BaseButton } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input, TextArea } from '../Inputs';

function RightArrowIcon() {
  return (
    <span className='block'>
      <svg
        className='mt-1 -mr-3 max-w-full'
        width='40'
        height='15'
        viewBox='0 0 40 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.999939 7.21548L37.5654 7.13593M37.5654 7.13593L31.2899 13.6611M37.5654 7.13593L30.9954 1.5092'
          stroke='black'
          strokeWidth='2'
        />
      </svg>
    </span>
  );
}

export function ContactForm() {
  const { screenType } = useMediaQuery();
  const contactFormRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [interest, setInterest] = useState<string>('Other');

  async function handleSumbit() {
    try {
      const accessKey = process.env.REACT_APP_WEB3FORM_ACCESS_KEY;
      if (contactFormRef.current && accessKey) {
        setIsSubmitting(true);
        const formBody = new FormData(contactFormRef.current);
        formBody.set('subject', 'Contact Us Form Submission from CoCode');
        formBody.set('from_name', 'cocode.com');
        formBody.set('interest', interest);
        formBody.set('access_key', accessKey);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formBody,
        });
        if (response.status === 200) {
          contactFormRef.current.reset();
          return;
        }
        throw new Error('Submission failed');
      }
    } catch (err) {
      return;
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={contactFormRef}
      onSubmit={(e) => {
        e.preventDefault();
        handleSumbit();
      }}
    >
      <div className='p-[clamp(19px,2.1vw,36px)] rounded bg-primary shadow-contact-form flex flex-col gap-[clamp(16px,1.87vw,32px)]'>
        <Input name='name' labelTitle='Your Name' inputAttributes={{ placeholder: 'John Doe' }} />
        <Input
          name='email'
          labelTitle='Your Email'
          inputAttributes={{ placeholder: 'Johndoe123@gmail.com' }}
        />
        <Dropdown
          name='interest'
          labelTitle='Your Interest'
          onChange={(option) => setInterest(option.title)}
          options={[
            { title: 'Web Development', value: 'webDevelopment', isDefaultValue: true },
            { title: 'App Development', value: 'appDevelopment' },
            { title: 'Devops', value: 'devops' },
            { title: 'Big Data Analysis', value: 'bigDataAnalysis' },
            { title: 'Web3', value: 'web3' },
            { title: 'Other', value: 'other' },
          ]}
        />
        <TextArea
          name='message'
          labelTitle='Message'
          textAreaAttributes={{
            placeholder: 'Let us know about you project',
            rows: 5,
            maxLength: 300,
          }}
        />
      </div>
      <BaseButton
        title='Send Message'
        onClick={handleSumbit}
        loading={isSubmitting}
        disabled={isSubmitting}
        extendedClassNames={`mt-[clamp(24px,3.3vw,44px)] mx-auto ${
          screenType === ScreenTypes.MOBILE ? 'text-[13px]' : null
        }`}
        RightIcon={RightArrowIcon}
      />
    </form>
  );
}
