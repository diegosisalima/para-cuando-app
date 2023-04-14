import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import Image from 'next/image';
import { Heart } from '../assets/svg/Heart';
interface IEventCardProps {
  id: number;
  title: string;
  short_description: string;
  votes: number;
  url: string;
  image: string;
}

const EventCardSearch: React.FC<IEventCardProps> = ({
  id,
  title,
  short_description,
  votes,
  url,
  image,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-[394px] sm:w-full h-[197px] shadow-md border flex gap-4 relative mb-5">
      <div className="w-[208px] sm:w-[300px] rounded-2xl bg-slate-400 relative">
        <Image className="rounded-2xl" fill={true} src={image} alt={title} />
      </div>
      <section className="w-full pr-4">
        <h1 className="pt-9 pb-1 app-subtitle-1 sm:app-title-3 ">{title}</h1>
        <p className="font-normal text-sm sm:text-[15px] leading-4 text-[#6E6A6C] overflow-hidden">
          {short_description}
        </p>
        <div className="py-4 absolute bottom-0">
          <a
            className="text-app-blue text-xs sm:text-sm leading-[14px]"
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            {url}
          </a>
          <div className="flex items-center text-[11px] sm:text-sm leading-[13px]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.6156 9.3664L1.61571 9.36621C1.76992 9.11497 1.96883 8.92979 2.21786 8.8003C2.91313 8.45298 3.61635 8.19388 4.32792 8.0213C5.0407 7.84889 5.76431 7.76271 6.49967 7.76271C7.23504 7.76271 7.95865 7.84889 8.67143 8.0213C9.383 8.19388 10.0862 8.45298 10.7815 8.8003C11.0305 8.9298 11.2294 9.11497 11.3836 9.36621L11.3837 9.3664C11.5361 9.61436 11.612 9.8827 11.612 10.1834V10.75C11.612 10.9914 11.5326 11.1844 11.3586 11.3589C11.1841 11.533 10.9911 11.6123 10.7497 11.6123H2.24967C2.00814 11.6123 1.81545 11.5329 1.64149 11.3589C1.46686 11.1843 1.38736 10.9913 1.38736 10.75V10.1834C1.38736 9.8827 1.46327 9.61436 1.6156 9.3664ZM6.49967 5.94568C5.8687 5.94568 5.34235 5.72748 4.89062 5.27575C4.43889 4.82402 4.22069 4.29767 4.22069 3.66669C4.22069 3.03572 4.43889 2.50936 4.89062 2.05763C5.34235 1.6059 5.8687 1.38771 6.49967 1.38771C7.13065 1.38771 7.657 1.6059 8.10873 2.05763C8.56046 2.50936 8.77866 3.03572 8.77866 3.66669C8.77866 4.29767 8.56046 4.82402 8.10873 5.27575C7.657 5.72748 7.13065 5.94568 6.49967 5.94568Z"
                stroke="#1A1E2E"
                strokeWidth="1.1087"
              />
            </svg>
            {votes} votes
          </div>
        </div>
      </section>
      <Heart
        className="absolute top-0 sm:top-3 right-0 sm:right-4 hover:cursor-pointer h-10 w-10"
        isActive={isClicked}
        onClick={handleClick}
      ></Heart>
    </div>
    // <div className="h-[197px] bg-white w-[394px] shadow-md rounded-lg mb-2 relative flex">
    //   <div className="bg-slate-400 h-full w-[121px]">
    //     <Link href={`/detail/${id}`}>
    //       <Image
    //         className="rounded-tl-2xl rounded-tr-2xl left-[0%] right-[0%] top-[0%] bottom-[47.36%] object-cover"
    //         width={121}
    //         height={197}
    //         src={image}
    //         alt={title}
    //       />
    //     </Link>
    //   </div>
    //   <Heart
    //     className="absolute left-[75.25%] right-[7.36%] top-[40.15%] bottom-[44.15%] hover:cursor-pointer"
    //     isActive={isClicked}
    //     onClick={handleClick}
    //   ></Heart>
    //   <section className="px-6 pt-6 w-[58px] bg-slate-400">
    //     <strong>
    //       <h1 className="app-title-3">{title}</h1>
    //     </strong>
    //     <div className="h-[72px]">
    //       <p className="h-full overflow-hidden py-1 app-texto-1 text-app-grayDark">
    //         {short_description}
    //       </p>
    //     </div>
    //     <section className="absolute bottom-10">
    //       <a
    //         className="text-app-blue"
    //         href={url}
    //         rel="noreferrer"
    //         target="_blank"
    //       >
    //         {url}
    //       </a>
    //       <div className="flex items-center ">
    //         <User stroke="black" />
    //         {votes} votes
    //       </div>
    //     </section>
    //   </section>
    // </div>
  );
};

export default EventCardSearch;
