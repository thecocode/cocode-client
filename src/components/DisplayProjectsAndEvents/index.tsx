interface Event {
  name: string;
  img: string;
}

interface Project {
  name: string;
  img: string;
  stars: number;
}

interface DisplayProps {
  type: 'projects' | 'events';
  filteredList: Event[] | Project[];
  atMainPage: boolean;
}

const displaySize: string[] = [
  'ml:col-start-1 ml:col-end-2 ml:row-start-2 ml:row-end-3 col-start-1 col-end-2 row-start-1 row-end-[7]',
  'ml:col-span-2 ml:row-start-1 ml:row-end-3 col-start-2 col-end-[-1] row-start-1 row-end-6',
  'ml:col-start-4 ml:col-end-[-1] ml:row-start-1 ml:row-end-2 col-start-1 col-end-2 row-start-7 row-end-[13]',
  'ml:row-start-3 ml:row-end-[-1] ml:col-start-1 ml:col-end-2 col-start-2 col-end-[-1] row-start-6 row-end-[14]',
  'ml:col-start-2 ml:col-end-4 ml:row-start-3 ml:row-end-[-1] col-start-1 col-end-2 row-start-[13] row-end-[-1]',
  'ml:row-start-2 ml:row-end-[-1] ml:col-start-4 col-start-2 col-end-[-1] row-start-[14] row-end-[-1]',
];

export default function DisplayProjectsAndEvents({ type, filteredList, atMainPage }: DisplayProps) {
  return (
    <div className='font-poppins text-sm mt-12 mb-32'>
      <div className='main-grid w-[80vw] h-[90vh] my-10 mx-auto grid ml:grid-cols-4 ml:grid-rows-3 grid-cols-2 grid-rows-[repeat(20_,_minmax(0,_1fr))] justify-items-center gap-4'>
        {filteredList.map((item, index) => (
          <div
            className={`one flex flex-col justify-center w-full h-full ${
              displaySize[index % displaySize.length]
            }`}
            key={item.img}
          >
            <div
              className='image w-full h-[90%] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: item.img }}
            ></div>
            <div className='name h-fit'>
              {item.name}
              {type === 'projects' && (
                <span className='display-stars flex gap-1'>
                  <img className='w-[1rem]' src='./assets/github.svg' alt='' />
                  <img className='w-[1rem]' src='./assets/star.svg' alt='' />
                  {(item as Project).stars}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {!atMainPage && (
        <a
          className='flex items-center text-sm rounded-full w-fit gap-4 justify-center mx-auto outline outline-[1px] px-[clamp(20px,2.9vw,40px)] py-[clamp(12px,1.25vw,24px)]'
          href={`/${type}`}
        >
          <span>View More</span>
          <img src='./assets/arrow.svg' />
        </a>
      )}
    </div>
  );
}
