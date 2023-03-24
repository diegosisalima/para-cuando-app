import Image from 'next/image';
import { useState } from 'react';
import { Heart } from '../assets/svg/Heart';
import User from '../assets/svg/User';
interface IEventCardProps {
  title: string;
  short_description: string;
  votes: number;
  url: string;
  image: string;
}

const EventCard: React.FC<IEventCardProps> = ({
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
    <div
      className="h-[454px] bg-white w-[299px] shadow-md
    rounded-lg mb-2 "
    >
      <Image
        className="rounded-tl-2xl rounded-tr-2xl left-[0%] right-[0%] top-[0%] bottom-[47.36%]"
        width={299}
        height={450}
        src={image}
        alt={title}
      />
      <Heart
        className="absolute left-[75.25%] right-[7.36%] top-[40.15%] bottom-[44.15%]"
        isActive
        onClick={handleClick}
      >
        {isClicked ? 'Registrado' : 'Registrarse'}
      </Heart>

      <strong>
        <h1
          className="font-semibold mt-[20px] mb-[7px] text-xl leading-[26px] text-[#1A1E2E] w-[253.31px]
h-[23px] flex-none ml-[20px]"
        >
          {title}
        </h1>{' '}
      </strong>

      <div className="relative w-254 h-[72px] mr-[5px] ml-[5px]">
        <p className="w-full h-full overflow-hidden text-[#6E6A6C] bg-gradient-to-b from-transparent to-white text-[15px]">
          {short_description}
        </p>
      </div>

      <a
        className="text-[#1B4DB1] h-[16px] left-9.15% right-61.08% top-[366px] ml-[10px] "
        href={url}
      >
        {url}
      </a>
      <div className="ml-[15px] mt-[5px]">
        <User />
      </div>
      <p className="ml-[10px] mt-[5px] absolute left-[15.25%]  top-[81.15%] ">
        {votes} votes
      </p>
    </div>
  );
};

export default EventCard;
