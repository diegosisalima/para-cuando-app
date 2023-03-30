import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
/*data*/
import Link from 'next/link';
import { useState } from 'react';
import Input from '../../components/input/Input';
import Interest from '../../components/interest/Interest';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import Tag from '../../components/tag/Tag';
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
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12C7.71667 12 7.47933 11.904 7.288 11.712C7.096 11.5207 7 11.2833 7 11C7 10.7167 7.096 10.4793 7.288 10.288C7.47933 10.096 7.71667 10 8 10H10C10.2833 10 10.521 10.096 10.713 10.288C10.9043 10.4793 11 10.7167 11 11C11 11.2833 10.9043 11.5207 10.713 11.712C10.521 11.904 10.2833 12 10 12H8ZM1 2C0.716667 2 0.479333 1.90433 0.288 1.713C0.0960001 1.521 0 1.28333 0 1C0 0.716667 0.0960001 0.479 0.288 0.287C0.479333 0.0956668 0.716667 0 1 0H17C17.2833 0 17.5207 0.0956668 17.712 0.287C17.904 0.479 18 0.716667 18 1C18 1.28333 17.904 1.521 17.712 1.713C17.5207 1.90433 17.2833 2 17 2H1ZM4 7C3.71667 7 3.479 6.904 3.287 6.712C3.09567 6.52067 3 6.28333 3 6C3 5.71667 3.09567 5.479 3.287 5.287C3.479 5.09567 3.71667 5 4 5H14C14.2833 5 14.5207 5.09567 14.712 5.287C14.904 5.479 15 5.71667 15 6C15 6.28333 14.904 6.52067 14.712 6.712C14.5207 6.904 14.2833 7 14 7H4Z"
              fill="black"
            />
          </svg>
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
