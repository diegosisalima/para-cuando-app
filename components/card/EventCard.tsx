import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserMe } from '../../lib/services/user.services';
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

const EventCard: React.FC<IEventCardProps> = ({
  id,
  title,
  short_description,
  votes,
  url,
  image,
}) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [votes1, setVotes1] = useState(votes);

  const { data: login } = useUserMe();

  const handleClick = () => {
    if (login) {
      setIsClicked(!isClicked);
      if (isClicked) {
        setVotes1(votes);
      } else {
        setVotes1(votes + 1);
      }
    } else {
      return router.push('/login');
    }
  };

  return (
    <div
      className="h-[454px] bg-white w-[299px] shadow-md
    rounded-lg mb-2 relative"
    >
      <Link href={`/detail/${id}`} target="_parent">
        <Image
          className="rounded-tl-2xl rounded-tr-2xl left-[0%] right-[0%] top-[0%] bottom-[47.36%]"
          width={299}
          height={450}
          src={image}
          alt={title}
        />
      </Link>
      <Heart
        className="absolute left-[75.25%] right-[7.36%] top-[40.15%] bottom-[44.15%] hover:cursor-pointer"
        isActive={isClicked}
        onClick={handleClick}
      ></Heart>
      <section className="px-6 pt-6 ">
        <strong>
          <h1 className="app-title-3">{title}</h1>
        </strong>
        <div className="h-[72px]">
          <p className="h-full py-1 overflow-hidden app-texto-1 text-app-grayDark">
            {short_description}
          </p>
        </div>
        <section className="absolute bottom-10">
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
            {votes1} votes
          </div>
        </section>
      </section>
    </div>
  );
};

export default EventCard;
