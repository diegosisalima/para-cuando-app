import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Logo from '../../components/assets/logo/Logo';
interface Publicacion {
  titulo: string;
  tipo: string;
  categoria: string;
  porqueRecomiendas: string;
  linkReferencia: string;
}

const Publicaciones = () => {
  const router = useRouter();
  const [nuevaPublicacion, setNuevaPublicacion] = useState<Publicacion>({
    titulo: '',
    tipo: '',
    categoria: '',
    porqueRecomiendas: '',
    linkReferencia: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNuevaPublicacion((prevNuevaPublicacion) => ({
      ...prevNuevaPublicacion,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('./second-form');
  };

  return (
    <section className="top-0 left-0 flex flex-col w-full h-screen bg-white sm:flex-row">
      <div className="bg-blue-700 w-[600px] xs:h-[400px] sm:w-[255px] sm:h-[832px]">
        <div className="w-[100%] h-[200px] mt-[40px] sm:h-[380px] flex justify-center items-center">
          <Logo className=" w-[137px]  sm:w-3/4" />
        </div>
        <div className="ml-[40px] sm:ml-[20px] w-[400px]">
          <h2 className="mt-8 text-xl font-bold text-[#F3F243]">
            !Bienvenido, creador!
          </h2>
          <p className="mt-4 text-white sm:w-[220px] sm:h-[10px] text-base">
            A continuacion puedes completar la info de la marca, artista o
            torneo que quieres cerca.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white sm:w-[100%] ">
        <button className="mt-6">
          <Link className="text-lg text-blue-600" href="/">
            Black
          </Link>
        </button>
        <div className="w-11/12 h-5 my-6 rounded-full bg-slate-300">
          <p className="w-[65%px] sm:w-[65%] bg-blue-800 h-[10px] rounded-full"></p>
        </div>
        <h1 className="mb-2 text-2xl font-bold">Publicación</h1>
        <p className="mb-8 text-gray-600">Información básica</p>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-6 ">
            <label className="block mb-2 text-gray-700">
              Título de publicación
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              name="titulo"
              value={nuevaPublicacion.titulo}
              onChange={handleChange}
            />
          </div>

          <div className="float-left mb-6">
            <label className="block w-1/2 mb-2 text-gray-700">Tipo</label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              name="tipo"
              value={nuevaPublicacion.tipo}
              onChange={handleChange}
            />
          </div>
          <div className="float-right mb-6">
            <label className="block mb-2 text-gray-700">Categoría</label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              name="categoria"
              value={nuevaPublicacion.categoria}
              onChange={handleChange}
            />
          </div>
          <div className="sm:mt-[120px] mb-6">
            <label className="block mb-2 text-gray-700">
              ¿Por qué lo recomiendas?:
            </label>
            <input
              className="w-full px-3 h-[80px] p-2 border leading-tight border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline "
              type="text"
              name="porqueRecomiendas"
              value={nuevaPublicacion.porqueRecomiendas}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">
              Link de referencia:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              name="linkReferencia"
              value={nuevaPublicacion.linkReferencia}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="mt-[20px] rounded-full mb-[30px] bg-[#1B4DB1] w-[124px] h-[47px] text-white"
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Publicaciones;
