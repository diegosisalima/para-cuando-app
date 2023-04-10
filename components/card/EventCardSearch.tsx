import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import { Heart } from '../assets/svg/Heart';
import User from '../assets/svg/User';
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
    <div className="w-full h-[197px] shadow-md flex gap-4 relative">
      <section className="bg-slate-400 w-[121px]">img</section>
      <section className="bg-slate-500 w-full">
        <h1>{title}</h1>
        <p>{short_description}</p>
        <div>
          <a
            className="text-app-blue"
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            {url}
          </a>
          <div className="flex items-center ">
            <User stroke="black" />
            {votes} votes
          </div>
        </div>
      </section>
      <Heart
        className="absolute top-0 right-0 hover:cursor-pointer"
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
