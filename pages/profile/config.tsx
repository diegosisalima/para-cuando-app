import AddBox from '../../components/addBox/AddBox';
import BtnBlue from '../../components/BtnBlue/BtnBlue';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const AddCategory = () => {
  return (
    <div className="w-72">
      <div className="w-72 h-36">
        <AddBox />
      </div>
      <p className="app-subtitle-2 text-app-grayDark text-center py-5">
        Añade una categoría{' '}
      </p>
    </div>
  );
};

export const ConfigPage: NextPageWithLayout = () => {
  return (
    <div>
      <div className="app-banner -mt-4 py-9 bg-app-blue app-title-1 text-white pl-10 sm:pl-40 ">
        Perfil
      </div>
      <section>
        <h2 className="app-title-2 pt-16 pb-8">Información de contacto</h2>
        <div className="sm:flex sm:gap-20">
          <section>
            <div className="w-56 h-52 mx-auto">
              <AddBox />
            </div>
            <p className="app-subtitle-2 text-[#6E6A6C] py-5 text-center">
              Agrega una foto para tu perfil
            </p>
          </section>
          <section className="sm:grow sm:py-9">
            <fieldset className="border border-[#7D7D7D] rounded-lg px-1 mb-6">
              <legend className="mx-3 px-3 text-[#7D7D7D]">First Name</legend>
              <input type="text" className="border w-full h-full" />
            </fieldset>
            <fieldset className="border border-[#7D7D7D] rounded-lg px-1">
              <legend className="mx-3 px-3 text-[#7D7D7D]">Last name</legend>
              <input type="text" className="border w-full h-full" />
            </fieldset>
          </section>
        </div>
        <h2 className="app-title-2 pt-16 pb-8">Mis intereses</h2>
        <section className="flex gap-5 md:justify-center overflow-auto">
          <AddCategory />
          <AddCategory />
          <AddCategory />
        </section>
        <div className="mx-auto pt-11 pb-20 w-[176px]">
          <BtnBlue text="Guardar cambios" />
        </div>
      </section>
    </div>
  );
};
ConfigPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default ConfigPage;
