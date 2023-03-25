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
      <div className="md:flex items-center justify-center hidden "></div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-20 max-w-[580px] mx-auto">
        <div className="w-full text-left flex flex-col gap-8">
          <div>
            <h1 className="text-[32px] font-medium">Encontrémos tu cuenta</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">
                Para restablecer tu contraseña, escribe la dirección de correo
                electrónico que puedes haber utilizado con Para cuándo?
              </span>
              <input
                className="p-4 border border-app-grayDark"
                type="email"
                {...register('email')}
              />
            </label>
            <button className="bg-app-yellow">Cambiar la contraseña</button>
            <span>
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
