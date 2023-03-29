import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from '../../card/EventCard';

interface events {
  title: string;
  short_description: string;
  votes: number;
  url: string;
  image: string;
}

interface SliderProps {
  events: events[];
}

const Slider: React.FC<SliderProps> = ({ events }) => {
  return (
    <Swiper>
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <EventCard
            image={event.image}
            title={event.title}
            short_description={event.short_description}
            url={event.url}
            votes={event.votes}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
