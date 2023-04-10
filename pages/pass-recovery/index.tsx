import { useForm } from 'react-hook-form';

type FormValues = {
  password: string;
};
export default function PassRecovery() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className='bg-[url("/imagen-de-fondo.png")] grid md:grid-cols-2 h-screen'>
      <div className="items-center justify-center hidden md:flex "></div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-20 max-w-[580px] mx-auto">
        <div className="w-full text-left flex flex-col gap-8 bg-black opacity-80 sm:w-[557px] h-[529px] rounded items-center justify-center p-4 sm:p-14 max-w-[580px] border border-[#A7A6A7] border-style-dashed text-app-grayLight ">
          <div>
            <h1 className="text-[32px] font-medium">
              Elige una nueva contraseña
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Elige una nueva contraseña</span>
              <input
                className="p-4 bg-transparent border border-app-grayDark rounded-xl"
                type="password"
                {...register('password')}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold">Escríbela de nuevo</span>
              <input
                className="p-4 bg-transparent border border-app-grayDark rounded-xl"
                type="password"
                {...register('password')}
              />
            </label>
            <button className="bg-app-yellow text-app-black">
              Cambiar la contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
