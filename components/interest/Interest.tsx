import Tag from '../tag/Tag';

const Interest = () => {
  return (
    <section className="bg-app-grayLighter pt-7 pb-11 px-6 app-banner sm:w-full sm:left-0 sm:px-14">
      <h1 className="app-title-2 text-[#6E6A6C] pb-3">
        ¡Hagámoslo más personal!
      </h1>
      <p className="app-subtitle-2 text-[#6E6A6C] w-80 pb-6 sm:w-full">
        Selecciona tus interes para brindarte sugerencia de acuerdo a tus gustos
      </p>
      <section className="flex gap-3 pb-11 overflow-x-auto">
        <Tag text={'Artistas mexicanos'} />
        <Tag text={'Tiendas de ropa'} />
        <Tag text={'Rock'} />
        <Tag text={'Restaurantes'} />
      </section>
      <a href="" className="app-subtitle-2 text-app-blue">
        Ver todos los intereses
      </a>
    </section>
  );
};

export default Interest;
