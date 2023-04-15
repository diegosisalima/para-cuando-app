import { FC } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from '../../card/EventCard';
/*data*/
import { usePublications } from '../../../lib/services/publications.services';

interface IEventSlider {
  title?: string;
  subtitle?: string;
}

export const EventSlider: FC<IEventSlider> = ({ title, subtitle }) => {
  const { data: events } = usePublications();
  return (
    <div>
      <div className="pb-6">
        <h2 className="app-title-2 pb-1">{title}</h2>
        <p className="app-subtitle-2 text-app-grayDark">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
          slidesPerView={'auto'}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.results.results.map(
            (event: {
              id: string;
              title: string;
              description: string;
              reference_link: string;
              images: Array<any>;
              image_url: any;
              votes_count: number;
            }) => (
              <SwiperSlide key={event.id}>
                <EventCard
                  id={event.id}
                  title={event.title}
                  short_description={event.description}
                  votes={event.votes_count}
                  url={event.reference_link}
                  image={event.images[0]?.image_url}
                />
              </SwiperSlide>
            )
          )}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
