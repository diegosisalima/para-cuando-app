import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export default function SingUpPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
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
      <div className="bg-black opacity-80 w-full sm:w-[557px] rounded flex flex-col items-center justify-center p-4 sm:p-14 max-w-[580px] border border-[#A7A6A7] border-style-dashed">
        <div className="w-full text-left flex flex-col gap-8 relative text-app-grayLight">
          <Link
            href={'/'}
            className="text-app-yellow border border-app-yellow rounded-[50%] absolute right-0 -top-2 w-7 h-7 flex justify-center items-center"
          >
            X
          </Link>
          <div className="">
            <h1 className="text-[32px] font-medium">Todos votamos :{')'}</h1>
            <p>Regístrate para ingresar</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Email</span>
              <input
                className="p-4 border border-app-grayDark bg-transparent rounded-xl"
                type="text"
                {...register('email')}
              />
            </label>
            <div className="flex gap-1">
              <label className="flex flex-col gap-1 min-w-[145px]">
                <span className="font-semibold">Nombre</span>
                <input
                  className="p-4 border border-app-grayDark bg-transparent rounded-xl"
                  type="text"
                  {...register('firstName')}
                />
              </label>
              <label className="flex flex-col gap-1 min-w-[145px]">
                <span className="font-semibold">Apellido</span>
                <input
                  className="p-4 border border-app-grayDark bg-transparent rounded-xl"
                  type="text"
                  {...register('lastName')}
                />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="font-semibold">Contraseña</span>
              <input
                className="p-4 border border-app-grayDark bg-transparent rounded-xl"
                type="password"
                {...register('password')}
              />
            </label>
            <span>
              ▪ La contraseña debe tener mayúsculas, minúsculas y números
            </span>
            <button className="bg-app-yellow text-app-black">
              Crear Cuenta
            </button>
            <span className="text-app-yellow text-center app-subtitle-2 pt-2">
              <Link href={'/sign-in'}>O inicia sesión</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
