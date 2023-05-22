import { BaseButton } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input, TextArea } from '../Inputs';

function RightArrowIcon() {
  return (
    <svg
      className='mt-1 -mr-3'
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
  );
}

export function ContactForm() {
  return (
    <form>
      <div className='p-[clamp(19px,2.1vw,36px)] rounded bg-primary shadow-contact-form flex flex-col gap-[clamp(16px,1.87vw,32px)]'>
        <Input name='name' labelTitle='Your Name' inputAttributes={{ placeholder: 'John Doe' }} />
        <Input
          name='email'
          labelTitle='Your Email'
          inputAttributes={{ placeholder: 'Johndoe123@gmail.com' }}
        />
        <Dropdown
          name='interests'
          labelTitle='Your Interests'
          options={[
            { title: 'Web Development', value: 'webDevelopment', isDefaultValue: true },
            { title: 'App Development', value: 'appDevelopment' },
            { title: 'Devops', value: 'devops' },
            { title: 'Big Data Analysis', value: 'bigDataAnalysis' },
            { title: 'Web3', value: 'web3' },
            { title: 'Big Data ssAnalysis', value: 'bigDadtaAnalysis' },
            { title: 'Wseb3', value: 'wedwb3' },
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
        extendedClassNames='mt-[clamp(24px,3.3vw,44px)] mx-auto'
        RightIcon={RightArrowIcon}
      />
    </form>
  );
}
