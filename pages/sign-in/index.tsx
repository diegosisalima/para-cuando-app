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
    <div className="px-4 relative bg-app-bgSignIn bg-cover bg-center min-h-screen flex flex-col justify-around items-center md:flex-row ">
      <div className="md:flex items-center justify-center">
        <Link href={'/'}>
          <Logo variant="yellow" onlyIcon={false} />
        </Link>
      </div>
      <div className="bg-black opacity-80 w-full sm:w-[557px] h-[529px] rounded flex flex-col items-center justify-center p-4 sm:p-14 max-w-[580px] border border-[#A7A6A7] border-style-dashed">
        <div className="w-full text-left flex flex-col gap-8 relative">
          <Link
            href={'/'}
            className="text-app-yellow border border-app-yellow rounded-[50%] absolute right-0 -top-5 w-7 h-7 flex justify-center items-center"
          >
            X
          </Link>
          <div className="text-app-grayLight">
            <h1 className="text-[32px] font-medium">¡Hola!</h1>
            <p>Inicie sesión con los datos que ingresó durante su registro.</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold text-app-grayLight">Email</span>
              <input
                className=" p-4 border border-app-grayDark bg-transparent rounded text-[#A7A6A7]"
                placeholder="ejemplo@mail.com"
                type="text"
                {...register('email')}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold text-app-grayLight">
                Contraseña
              </span>
              <input
                className="p-4 border border-app-grayDark bg-transparent rounded text-[#A7A6A7]"
                type="password"
                {...register('password')}
              />
            </label>
            <span className="text-app-grayLight text-center">
              ¿Olvidaste tu contraseña?{' '}
              <Link
                href={'/find-account'}
                className="text-app-yellow underline underline-offset-1"
              >
                recupérala aquí
              </Link>
            </span>
            <button className="bg-app-yellow p-[18px]">Iniciar sesión</button>
            <span className="text-app-yellow text-center app-subtitle-2 pt-2 underline underline-offset-1">
              <Link href={'/sign-up'}>O crea una nueva cuenta</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
