import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../components/assets/logo/Logo';
interface Publicacion {
  title: string;
  type: string;
  category: string;
  recommendation: string;
  referenceLink: string;
}

const SecondForm: React.FC<Publicacion> = ({
  title,
  type,
  category,
  recommendation,
  referenceLink,
}) => {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImage1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage1(file || null);
  };
  const handleImage2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage2(file || null);
  };
  const handleImage3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage3(file || null);
  };

  const renderImagePreview1 = (image: File | null) => {
    if (!image) return null;
    const url = URL.createObjectURL(image);
    return (
      <div key={url} className="image-preview">
        <Image
          className="absolute w-[149px] h-[180px] left-[6.10%] top-[51.90%] sm:w-[225px] sm:h-[297px] sm:left-[29.05%] sm:top-[44.50%] rounded-[10px]"
          width={400}
          height={400}
          src={url}
          alt={`Preview of ${image.name}`}
        />
      </div>
    );
  };
  const renderImagePreview2 = (image: File | null) => {
    if (!image) return null;
    const url = URL.createObjectURL(image);
    return (
      <div key={url} className="image-preview">
        <Image
          className="absolute w-[149px] h-[180px] left-[35.50%] top-[51.90%] sm:w-[225px] sm:h-[297px] sm:left-[50.9%] sm:top-[44.50%] rounded-[10px]"
          width={400}
          height={400}
          src={url}
          alt={`Preview of ${image.name}`}
        />
      </div>
    );
  };
  const renderImagePreview3 = (image: File | null) => {
    if (!image) return null;
    const url = URL.createObjectURL(image);
    return (
      <div key={url} className="image-preview">
        <Image
          className="absolute w-[149px] h-[180px] left-[64.70%] top-[51.90%] sm:w-[225px] sm:h-[297px] sm:left-[72.90%] sm:top-[44.50%] rounded-[10px]"
          width={400}
          height={400}
          src={url}
          alt={`Preview of ${image.name}`}
        />
      </div>
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('category', category);
    formData.append('recommendation', recommendation);
    formData.append('referenceLink', referenceLink);

    try {
      const response = await axios.post('/api/addPublication', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    window.location.href = '/';
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
          <Link className="text-lg text-blue-600" href="/publications">
            Black
          </Link>
        </button>
        <div className="h-[10px] my-6 rounded-full bg-slate-300 sm:w-[800px] ">
          <p className="w-[65%px] sm:w-[100%] bg-blue-800 h-[10px] rounded-full"></p>
        </div>
        <div className="flex flex-wrap sm:w-[800px] sm:h-[40px]">
          <h2 className="ml-[-100px] sm:ml-[-0px] mb-2 text-2xl font-bold ">
            Fotos
          </h2>
          <p className="mt-[50px] ml-[-90px] sm:m-[50px] mb-8 text-gray-600">
            Selecciona maxímo tres fotos para crear una galeria
          </p>
        </div>
        <div className="w-[550px] sm:w-[800px] sm:h-[600px] sm:mt-[100px] sm:ml-[-0px] px-3 h-[300px] p-2 border leading-tight border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline ">
          <form
            onSubmit={handleSubmit}
            className=" grid sm:w-full sm:max-w-lg grid-cols-3 sm:gap-[10px]"
          >
            <div className="mt-[40px] sm:mt-0 bg-slate-400 w-[150px] sm:w-[230px] h-180px sm:h-[300px] ">
              <input
                className=" w-[150px] sm:w-[230px] h-[180px] sm:h-[300px] bg-slate-400 text-slate-400 border leading-tight border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline "
                type="file"
                id="image1"
                onChange={handleImage1Change}
              />
              {renderImagePreview1(image1)}
            </div>
            <div className="mt-[40px] sm:mt-0 bg-slate-400 w-[150px] sm:w-[230px] h-180px sm:h-[300px] sm:ml-[95px]">
              <input
                className="w-[150px] sm:w-[230px] h-[180px] sm:h-[300px] bg-slate-400 text-slate-400 border leading-tight border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline "
                type="file"
                id="image2"
                onChange={handleImage2Change}
              />
              {renderImagePreview2(image2)}
            </div>
            <div className="mt-[40px] sm:mt-0 bg-slate-400 w-[150px] sm:w-[230px] h-180px sm:h-[300px]  sm:ml-[190px]">
              <input
                className="w-[150px] sm:w-[230px] h-[180px] sm:h-[300px] bg-slate-400 text-slate-400 border leading-tight border-gray-500 rounded-lg appearance-none focus:outline-none focus:shadow-outline "
                type="file"
                id="image3"
                onChange={handleImage3Change}
              />
              {renderImagePreview3(image3)}
            </div>
          </form>
        </div>
        <div className="mt-[50px]">
          <button
            className="mt-[20px] rounded-full mb-[30px] bg-[#1B4DB1] w-[124px] h-[47px] text-white"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Publicar'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondForm;
