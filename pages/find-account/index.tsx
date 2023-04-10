import Link from 'next/link';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
};
export default function FindAccount() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
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
    <div className='bg-[url("/imagen-de-fondo.png")] grid md:grid-cols-2 h-screen flex'>
      <div className="items-center justify-center hidden md:flex "></div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-20 max-w-[580px] mx-auto">
        <div className="w-full text-left flex flex-col gap-8 bg-black opacity-80 sm:w-[557px] h-[529px] rounded items-center justify-center p-4 sm:p-14 max-w-[580px] border border-[#A7A6A7] border-style-dashed text-app-grayLight">
          <div>
            <h1 className="text-[32px] font-medium">Encontrémos tu cuenta</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="app-texto-1">
                Para restablecer tu contraseña, escribe la dirección de correo
                electrónico que puedes haber utilizado con Para cuándo?
              </span>
              <input
                className="p-4 bg-transparent border border-app-grayDark rounded-xl"
                type="email"
                {...register('email')}
              />
            </label>
            <button className="bg-app-yellow text-app-black">
              <Link href={'/pass-recovery'}>Cambiar la contraseña</Link>
            </button>
            <span className="text-center">
              <Link href={'/sign-in'} className="text-app-yellow">
                O volver a iniciar sesión
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
