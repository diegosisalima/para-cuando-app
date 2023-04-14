import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import {
  createPublication,
  usePublicationsTypes,
} from '../../lib/services/publications.services';
import { useTags } from '../../lib/services/tags.services';

const Publicaciones = () => {
  const router = useRouter();
  type Publicacion = {
    title: string;
    type: any;
    category: any;
    whyRecommend: string;
    referenceLink: string;
    images: File[];
    publications_types_id: number;
    tags: Array<any>;
    id: string;
  };
  const [step, setStep] = useState<number>(1);

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const { register, handleSubmit, reset, watch } = useForm<Publicacion>();

  const [typeNames, setTypeNames] = useState('');
  const [categoryNames, setCategoryNames] = useState('');

  const { data: publicationTypes } = usePublicationsTypes();

  const { data: tags } = useTags();
  console.log(publicationTypes);
  const onSubmit = (data: Publicacion) => {
    const typeName = publicationTypes.results.results.filter(
      (type: any) => type.id === typeNames
    );
    console.log(typeName);
    const categoryName = tags.results.results.filter(
      (tag: any) => tag.id === categoryNames
    );

    const publication = {
      title: data.title,
      description: data.whyRecommend,
      content: `${typeName[0]?.name}/${categoryName[0]?.name}`,
      reference_link: data.referenceLink,
      publications_types_id: Number(data.type),
      tags: [Number(data.category)],
    };

    createPublication(publication);
    alert('Publicado!');
    setStep(1);
    data.images = imageFiles;
    setImageFiles([]);
    reset();
    router.push('/');
  };
  console.log();
  const errorNext = () => {
    if (
      !watch('title') ||
      !watch('type') ||
      !watch('category') ||
      !watch('whyRecommend') ||
      !watch('referenceLink')
    ) {
      return true;
    } else {
      return false;
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const boxes: number[] = [1, 2, 3];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = e.target.files;
    if (fileList) {
      const files = Array.from(fileList);
      setImageFiles((prevImageFiles) => [...prevImageFiles, ...files]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImageFiles = [...imageFiles];
    newImageFiles.splice(index, 1);
    setImageFiles(newImageFiles);
  };

  const [labelClass, setLabelClass] = useState<string>('');
  const [selectedInput, setSelectedInput] = useState<string>('');

  const handleFocus = (id: string) => {
    setLabelClass('transform -translate-y-3');
    setSelectedInput(id);
  };

  const handleBlur = (id: string) => {
    if (selectedInput === id) {
      setLabelClass('');
      setSelectedInput('');
    }
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

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
          {step === 1 && (
            <div className="">
              <div className="mt-10 sm:mx-auto sm:w-[1200px]  sm:max-w-screen-sm font-roboto">
                <h1 className="mt-8 text-2xl font-bold">Publicación</h1>
                <p className="text-[#6E6A6C] mt-2">Información básica</p>
                <div className="relative mt-4 mb-4">
                  <label
                    htmlFor="title"
                    className={`block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1 transition-all duration-300 ease-in-out ${labelClass}`}
                  >
                    Título de publicación
                  </label>
                  <input
                    id="title"
                    {...register('title', { required: true })}
                    type="text"
                    className="w-full px-3 py-2 mt-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onFocus={() => handleFocus('title')}
                    onBlur={() => handleBlur('title')}
                  />
                </div>
                <div className="flex flex-col mb-4 sm:flex-row">
                  <div className="w-full text-gray-500 sm:w-1/2 sm:mr-2">
                    <label
                      htmlFor="type"
                      className="block mb-2 font-bold"
                    ></label>
                    <select
                      id="type"
                      {...register('type', { required: true })}
                      className="w-full px-3 py-2 bg-white border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      onChange={(e) => setTypeNames(e.target.value)}
                    >
                      <option value="">Tipo</option>
                      {publicationTypes?.results.results.map((type: any) => (
                        <option value={type.id} key={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full mt-2 text-gray-500 bg-white sm:w-1/2 sm:ml-2 sm:mt-0">
                    <label
                      htmlFor="category"
                      className="block mb-2 font-bold"
                    ></label>
                    <select
                      id="category"
                      {...register('category', { required: true })}
                      className="w-full px-3 py-2 bg-white border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      onChange={(e) => setCategoryNames(e.target.value)}
                    >
                      <option value="">Categoría</option>
                      {tags?.results.results.map((category: any) => (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="whyRecommend"
                    className={`block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1 transition-all duration-300 ease-in-out ${labelClass}`}
                  >
                    ¿Por qué lo recomiendas?
                  </label>
                  <textarea
                    id="whyRecommend"
                    {...register('whyRecommend', { required: true })}
                    rows={3}
                    className="w-full px-3 py-2 mt-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field"
                    onFocus={() => handleFocus('whyRecommend')}
                    onBlur={() => handleBlur('whyRecommend')}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    className={`block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1 transition-all duration-300 ease-in-out ${labelClass}`}
                  >
                    Link de referencia
                  </label>
                  <input
                    id="referenceLink"
                    type="text"
                    {...register('referenceLink')}
                    className="w-full px-3 py-2 mt-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field"
                    onFocus={() => handleFocus('referenceLink')}
                    onBlur={() => handleBlur('referenceLink')}
                  />
                </div>
                <div className="flex justify-center py-5">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-800 rounded-full hover:bg-blue-500"
                    onClick={() => {
                      errorNext()
                        ? alert('Completa los datos de la publicacion')
                        : setStep(2);
                    }}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <>
              <div className="mt-10 md:mx-auto md:w-4/6 md:max-w-screen-sm">
                <h1
                  className="pt-10 mt-5 font-semibold"
                  style={{ color: '#1A1E2E' }}
                >
                  Fotos
                </h1>
                <p className="mt-1 text-gray-600">
                  Selecciona máximo 3 fotos para crear una galería:
                </p>
                <div className="h-auto p-2 mx-auto mt-8 border border-gray-400 rounded-lg md:p-6">
                  <div className="grid grid-cols-3 gap-1 sm:gap-4">
                    {boxes.map((box, i) => (
                      <div
                        key={box}
                        className="relative flex items-center justify-center w-full h-24 bg-gray-300 cursor-pointer sm:h-36"
                        onClick={handleBoxClick}
                      >
                        {imageFiles[i] ? (
                          <>
                            <Image
                              src={URL.createObjectURL(imageFiles[i])}
                              alt={`Imagen ${i}`}
                              width={200}
                              height={200}
                              className="object-cover w-full h-full"
                            />
                            <button
                              type="button"
                              className="absolute rounded-full top-1 right-1"
                              onClick={() => handleRemoveImage(i)}
                            ></button>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-blue-500 rounded-full">
                              +
                            </div>
                            <input
                              type="file"
                              multiple
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer file-input"
                              {...register(`images.${i}`, {
                                required: false,
                              })}
                              onChange={handleImageUpload}
                            />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center py-10 my-5">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-800 rounded-full hover:bg-blue-500"
                  >
                    Publicar
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Publicaciones;
