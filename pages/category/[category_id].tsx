import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
/*components */
import Input from '../../components/input/Input';
import Interest from '../../components/interest/Interest';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import Tag from '../../components/tag/Tag';
/*icos*/
import Menu from '../../components/assets/svg/Menu';
/*data*/
import { categories } from '../../lib/data/categories';
import { eventsMock } from '../../lib/data/events.mock';
export const CategoryPage: NextPageWithLayout = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const { category_id } = router.query;
  const currentCategory = categories.find(
    (category) => category.id === Number(category_id)
  );
  console.log(currentCategory);
  return (
    <div>
      <header
        className=" app-banner -mt-4 h-52 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/${currentCategory?.imgPublic}` }}
      >
        <div className="hero-image-filter flex flex-col justify-center px-4 md:pl-44">
          <p className="text-app-subtitle-1 text-app-grayLighter">
            <Link href={'/'}>Home</Link> / {currentCategory?.name}
          </p>
          <h1 className="app-title-1 text-app-yellow pt-6 pb-2">
            {currentCategory?.name}
          </h1>
          <p className="text-app-subtitle-1 text-app-grayLighter">
            {currentCategory?.description}
          </p>
        </div>
      </header>
      <section className=" px-6 flex justify-between items-center py-8 border-b-2 relative app-banner md:w-full md:left-0">
        <div
          className="border-2 p-4 rounded-3xl hover:cursor-pointer md:hidden"
          onClick={() => setIsShow(!isShow)}
        >
          <Menu />
        </div>
        <div
          className={`${
            isShow ? 'absolute -bottom-20 flex flex-col gap-1' : 'hidden'
          }  md:static md:flex md:flex-row justify-between sm:justify-center sm:gap-3 `}
        >
          {categories?.map((category) => (
            <Link key={category.id} href={'/category/' + category.id}>
              <Tag text={category.name} />
            </Link>
          ))}
        </div>
        <div className="relative w-96">
          <Input />
        </div>
      </section>
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

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
