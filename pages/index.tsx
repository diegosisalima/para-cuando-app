import Logo from '../components/assets/logo/Logo';
import Input from '../components/input/Input';
import { Layout } from '../components/layout/Layout';
import Link from 'next/link';
import { eventsMock } from '../lib/data/events.mock';
import { useCategories } from '../lib/services/categories.services';
import { NextPageWithLayout } from './page';
/*components */
import Logo from '../components/assets/logo/Logo';
import Input from '../components/input/Input';
import Interest from '../components/interest/Interest';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import Tag from '../components/tag/Tag';
/*data */
import { categories } from '../lib/data/categories';

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-8'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-[372px] relative sm:w-[465px]">
            <Input />
          </div>
          <section className="flex justify-between sm:justify-center sm:gap-3">
            {categories?.map((category) => (
              <Link key={category.id} href={'/category/' + category.id}>
                <Tag text={category.name} />
              </Link>
            ))}
          </section>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="py-24 flex flex-col gap-12">
        <EventSlider
          title="Populares en Querétaro"
          subtitle="Lo que las personas piden más"
          events={eventsMock}
        />
        <EventSlider
          title="Sugerencias para ti"
          subtitle="Publicaciones que podrías colaborar"
          events={eventsMock}
        />

        <Interest />

        <EventSlider
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
