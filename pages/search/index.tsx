import Link from 'next/link';
import { NextPageWithLayout } from '../page';
/*data */
import { categories } from '../../lib/data/categories';
import { eventsMock } from '../../lib/data/events.mock';
/*components */
import BtnBlue from '../../components/BtnBlue/BtnBlue';
import EventCard from '../../components/card/EventCard';
import Input from '../../components/input/Input';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';

export const SearchPage: NextPageWithLayout = () => {
  console.log(categories.filter((category, index) => index !== 0));
  return (
    <div className="pb-24">
      <header
        className="app-banner -mt-4 h-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/search.png` }}
      >
        <div className="hero-image-filter flex flex-col justify-center px-4 md:pl-44">
          <p className="text-app-subtitle-1 text-app-grayLighter">
            <Link href={'/'}>Home</Link> / Búsqueda
          </p>
        </div>
      </header>
      <section className="border-b-2 border-app-grayDark app-banner">
        <div className="app-container flex pt-9">
          <div className="relative w-full">
            <Input />
          </div>
          <div className="w-32 hidden">
            <BtnBlue text="Buscar" />
          </div>
        </div>
        <div className="flex gap-8 app-container">
          <p className="app-subtitle-2 text-app-grayDark min-w-max">
            Todos los resultados
          </p>
          <p className="app-subtitle-2 text-app-grayDark min-w-max">
            {categories[0].name}
          </p>
          {categories
            .filter((category, index) => index !== 0)
            .map((category) => (
              <p
                key={category.id}
                className="app-subtitle-2 text-app-grayDark min-w-max"
              >
                {category.name}
              </p>
            ))}
        </div>
      </section>
      <section className="pt-11 pb-28">
        {eventsMock?.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            short_description={event.short_description}
            votes={event.votes}
            url={event.url}
            image={event.image}
          />
        ))}
        <p className="pt-20">Pagination ...</p>
      </section>
      <div>
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};
SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default SearchPage;
