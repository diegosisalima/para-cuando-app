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
    <div className="relative bg-app-bgSignIn bg-cover bg-center grid md:grid-cols-2 h-screen flex ">
      <div className="md:flex items-center justify-center hidden">
        <Link href={'/'}>
          <Logo variant="yellow" onlyIcon={false} />
        </Link>
      </div>
      <div className="absolute bg-black opacity-80 w-[557px] h-[529px] right-0 top-[10%] left-[50%] rounded flex flex-col items-center justify-center p-4 sm:p-20 max-w-[580px] mx-auto border border-[#A7A6A7] border-style-dashed">
        <div className="w-full text-left flex flex-col gap-8">
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
            <span className="text-app-grayLight">
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
