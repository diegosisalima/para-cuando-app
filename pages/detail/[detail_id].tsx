import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NextPageWithLayout } from '../page';
/*icon */
import Menu from '../../components/assets/svg/Menu';
/*data */
import Image from 'next/image';
import { categories } from '../../lib/data/categories';
import { eventsMock } from '../../lib/data/events.mock';
/*components */
import User from '../../components/assets/svg/User';
import BtnBlue from '../../components/BtnBlue/BtnBlue';
import Input from '../../components/input/Input';
import Interest from '../../components/interest/Interest';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import Tag from '../../components/tag/Tag';
export const DetailPage: NextPageWithLayout = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const { detail_id } = router.query;
  const currentEvent = eventsMock.find(
    (event) => event.id === Number(detail_id)
  );
  console.log(currentEvent);
  return (
    <div>
      <section className=" px-6 flex justify-between items-center py-8 border-b-2 relative app-banner sm:w-full sm:left-0">
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
        <Link href={'/search'} className="relative w-96">
          <Input />
        </Link>
      </section>
      <section className="pt-14 pb-20 md:flex gap-4 justify-center">
        <div className="md:w-96">
          <p className="app-subtitle-1">Artista / Pop / Rock</p>
          <h1 className="app-title-1">{currentEvent?.title}</h1>
          <p className="app-texto-1 text-app-grayDark pt-6 pb-8">
            {currentEvent?.short_description}
          </p>
          <a
            className="text-app-blue app-subtitle-1"
            href={currentEvent?.url}
            rel="noreferrer"
            target="_blank"
          >
            {currentEvent?.url}
          </a>
          <div className="flex items-center ">
            <User stroke="black" />
            {currentEvent?.votes} votes
          </div>
          <div className="hidden w-full md:block">
            <BtnBlue text="Votar" />
          </div>
        </div>
        <div className="border h-64 md:h-auto md:w-[539px] relative">
          <Image
            className="left-[0%] right-[0%] top-[0%] bottom-[47.36%] mx-auto"
            fill={true}
            src={currentEvent?.image || ''}
            alt={currentEvent?.title || 'none'}
          />
        </div>
        <div className="w-full pt-[32px] md:hidden">
          <BtnBlue text="Votar" />
        </div>
      </section>
      <Interest />
      <div className="pt-6 pb-24">
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};

DetailPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default DetailPage;
