import { ButtonTypes } from '../../types';
import { Button } from '../Button';

export function Intro() {
  return (
    <div className='flex flex-col ml:flex-row gap-6 items-center justify-evenly my-32 z-[5] mx-4 ml:mx-24 0y-12 shadow-md ml:h-[450px] bg-white py-12'>
      <div className=' text-md w-[80%] ml:w-[50%]  font-poppins text-center ml:text-left'>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, which dont look even slightly believable
        </p>
        <div className='pb-4 w-fit border-black border-b-2 flex items-center justify-center ml:justify-start mx-auto ml:ml-4 mt-8'>
          <div className='flex items-center '>
            <span className=' relative inline-block w-[40px] aspect-square rounded-full outline outline-1'></span>
            <span className=' relative  left-[-15px] bg-white z-10 inline-block w-[40px] aspect-square rounded-full outline outline-1'></span>
            <span className=' relative  left-[-30px] inline-block w-[40px] z-20 bg-white aspect-square rounded-full outline outline-1'></span>
          </div>
          <p>+124 others</p>
        </div>
      </div>
      <Button type={ButtonTypes.DISCORD} link='' />
    </div>
  );
}
