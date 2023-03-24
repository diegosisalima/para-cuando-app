import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';

type FormValues = {
  email: string;
  password: string;
};
export default function SingInPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
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
    <div className='bg-[url("/imagen-de-fondo.png")] grid md:grid-cols-2 h-screen flex'>
      <div className="md:flex items-center justify-center hidden ">
        <Link href={'/'}>
          <Logo variant="yellow" onlyIcon={false} />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-20 max-w-[580px] mx-auto">
        <div className="w-full text-left flex flex-col gap-8">
          <div>
            <h1 className="text-[32px] font-medium">¡Hola!</h1>
            <p>Inicie sesión con los datos que ingresó durante su registro.</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Email</span>
              <input
                className="p-4 border border-app-grayDark"
                type="text"
                {...register('email')}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold">Contraseña</span>
              <input
                className="p-4 border border-app-grayDark"
                type="password"
                {...register('password')}
              />
            </label>
            <span>
              ¿Olvidaste tu contraseña?{' '}
              <Link href={'/find-account'} className="text-app-yellow">
                recupérala aquí
              </Link>
            </span>
            <button className="bg-app-yellow">Iniciar sesión</button>
            <span className="text-app-yellow text-center app-subtitle-2 pt-2">
              <Link href={'/sign-up'}>O crea una nueva cuenta</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
