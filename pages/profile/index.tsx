import Image from 'next/image';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
/*components */
import BtnBlue from '../../components/BtnBlue/BtnBlue';
import EventCard from '../../components/card/EventCard';
import Tag from '../../components/tag/Tag';
export const ProfilePage: NextPageWithLayout = () => {
  return (
    <div>
      <div className="app-banner -mt-4 h-32 bg-app-blue relative">
        <Image
          className="rounded-full absolute -bottom-14 -translate-x-2/4 left-2/4"
          width={117}
          height={117}
          alt={'user'}
          src={'/user.png'}
        />
      </div>
      <section className="flex justify-center gap-3 pt-20 text-center">
        <div className="w-36 ">
          <Tag text="Mis votos" />
        </div>
        <div className="w-36">
          <Tag text="Mis publicaciones" />
        </div>
      </section>
      <section className="pt-16 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center">
        <EventCard
          id={2}
          title="Tienda Zara"
          short_description="Tienda por departamento de marca de ropa y
accesorios."
          votes={1345}
          url="tiendazara.com"
          image="/mock-event-image.png"
        />
      </section>
      <div className="w-[128px] mx-auto pt-20 pb-16">
        <BtnBlue text="Ver más" />
      </div>
    </div>
  );
};
ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default ProfilePage;
