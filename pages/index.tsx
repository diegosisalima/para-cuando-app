import Logo from '../components/assets/logo/Logo';
import Input from '../components/input/Input';
import { Layout } from '../components/layout/Layout';
import { useCategories } from '../lib/services/categories.services';
import { NextPageWithLayout } from './page';

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
            <p className="bg-[#FFFFFF] text-app-grayDark text-sm rounded-3xl px-3 py-2">
              Marcas y tiendas
            </p>
            <p className="bg-[#FFFFFF] text-app-grayDark text-sm rounded-3xl px-3 py-2">
              Artistas y conciertos
            </p>
            <p className="bg-[#FFFFFF] text-app-grayDark  text-sm rounded-3xl px-3 py-2">
              Torneos
            </p>
          </section>
          {/* <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <div className="flex items-center justify-center gap-2">
            <Link href={'/login'}>
              <button>Login</button>
            </Link>
            <Link href={'/signin'}>
              <button>Signin</button>
            </Link>
            <Link href={'/signup'}>
              <button>Signup</button>
            </Link>
            <Link href={'/password-recovery'}>
              <button>Password-recovery</button>
            </Link>
            <Link href={'/'}>
              <button>Home</button>
            </Link>
            <Link href={'/search'}>
              <button>búsquedas</button>
            </Link>
            <Link href={'/profile'}>
              <button>perfil</button>
            </Link>
            <Link href={'/profile-settings'}>
              <button>perfil configuración</button>
            </Link>
            <Link href={'/publication'}>
              <button>crear publicación</button>
            </Link>
            <Link href={'/publication-galery'}>
              <button>crear publicación-galeria</button>
            </Link>
            <Link href={'/category/marcas-y-tiendas'}>
              <button>Marcas y tiendas</button>
            </Link>
            <Link href={'/category/artistas-y-conciertos'}>
              <button>Artistas y conciertos</button>
            </Link>
            <Link href={'/category/torneos'}>
              <button>Torneos</button>
            </Link>
            <Link href={'/:id/detail'}>
              <button>detalle</button>
            </Link>
          </div> */}
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="bg-red-300 h-[70vh]"></div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
