import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import CheckStatus from '../../components/atoms/CkeckStatus';
import EyeSlash from '../../components/atoms/EyeSlash';
import { signUp } from '../../lib/services/auth.service';

const SingUpPage = () => {
  interface FormValues {
    statusText: string;
    status: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const user = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    };
    if (isValid) {
      signUp(user).then((res) => {
        if (res.status === 201) {
          alert('Cuenta creada con Exito!');
          router.push('/login');
        } else {
          alert('ha! ocurrido un error, Intente de nuevo!');
        }
      });
    }
  };

  const [show, setShow] = useState(false);

  const email = watch('email');
  const nombre = watch('firstName');
  const apellido = watch('lastName');
  const contraseña = watch('password');

  return (
    <div className="relative flex flex-col items-center justify-around min-h-screen px-4 bg-center bg-cover bg-app-bgSignIn md:flex-row ">
      <div className="items-center justify-center md:flex">
        <Link href={'/'}>
          <Logo variant="yellow" onlyIcon={false} />
        </Link>
      </div>
      <div className="bg-black opacity-80 w-full sm:w-[557px] rounded flex flex-col items-center justify-center p-4 sm:p-14 max-w-[580px] border border-[#A7A6A7] border-style-dashed">
        <div className="relative flex flex-col w-full gap-8 text-left text-app-grayLight">
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
            <label className="flex flex-col gap-1"></label>
            <span className="font-semibold">Email</span>
            <input
              className="p-4 bg-transparent border border-app-grayDark rounded-xl"
              type="text"
              {...register('email', {
                required: {
                  value: true,
                  message: '* Este campo es obligatorio',
                },
                minLength: {
                  value: 13,
                  message: '* Tu email debe ser mayor a 13 caracteres',
                },
                maxLength: {
                  value: 30,
                  message: '* Tu email debe ser menor a 30 caracteres',
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                  message: '* Procura que tu correo este escrito correctamente',
                },
              })}
            />

            {errors.email && <p>{errors.email.message}</p>}
            <div className="absolute top-[142px] sm:top-[62px] right-12">
              {!errors.email && email && <CheckStatus iconType={true} />}

              {errors.email && !email && <CheckStatus iconType={false} />}
            </div>

            <div className="mt-[20px] flex gap-1">
              <label className="flex flex-col gap-1 min-w-[145px]">
                <span className="font-semibold">Nombre</span>
                <input
                  className="p-4 bg-transparent border border-app-grayDark rounded-xl"
                  {...register('firstName', {
                    required: {
                      value: true,
                      message: '* Este campo es obligatorio',
                    },
                    minLength: {
                      value: 2,
                      message: '* Minimo 2 caracteres',
                    },
                    maxLength: {
                      value: 20,
                      message: '* máximo 20 caracteres',
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: '* Caracteres invalidos ',
                    },
                  })}
                  type="text"
                  placeholder="Dream"
                  id="firstName"
                />
              </label>
              {errors.firstName && (
                <p className="absolute mt-[-20px] w-[200px]">
                  {errors.firstName.message}
                </p>
              )}
              <div className="absolute top-[245px] lg:top-[266px] left-[125px] sm:left-[137px] lg:left-[230px] z-10">
                {!errors.firstName && nombre && <CheckStatus iconType={true} />}

                {errors.firstName && !nombre && (
                  <CheckStatus iconType={false} />
                )}
              </div>
              <label className="flex flex-col gap-1 min-w-[145px]">
                <span className="font-semibold">Apellido</span>
                <input
                  className="p-4 bg-transparent border border-app-grayDark rounded-xl"
                  type="text"
                  placeholder="Smith"
                  id="lastName"
                  {...register('lastName', {
                    required: {
                      value: true,
                      message: '* Este campo es obligatorio',
                    },
                    minLength: {
                      value: 2,
                      message: '* minimo 2 caracteres',
                    },
                    maxLength: {
                      value: 20,
                      message: '* máximo 20 caracteres',
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: '* Caracteres inválidos',
                    },
                  })}
                />
              </label>
              {errors.lastName && (
                <p className=" absolute ml-[220px] mt-[-20px] w-[200px] h-[20px]  ">
                  {errors.lastName.message}
                </p>
              )}
              <div className="absolute top-[245px] lg:top-[266px] right-12 z-10">
                {!errors.lastName && apellido && (
                  <CheckStatus iconType={true} />
                )}

                {errors.lastName && !apellido && (
                  <CheckStatus iconType={false} />
                )}
              </div>
            </div>
            <label className="flex flex-col">
              <span className="font-semibold">Contraseña</span>
              <input
                className="p-4 bg-transparent border border-app-grayDark rounded-xl"
                type={show ? 'text' : 'password'}
                placeholder="***********"
                id="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: '* Este campo es obligatorio',
                  },
                  minLength: {
                    value: 8,
                    message: '* Su contraseña debe tener más de 7 caracteres',
                  },
                  maxLength: {
                    value: 20,
                    message:
                      '* Su contraseña debe tener menos de 25 caracteres',
                  },
                })}
              />
            </label>
            <div onClick={() => setShow(!show)}>
              <EyeSlash
                styles="absolute right-12 bottom-[160px] lg:bottom-[169px] cursor-pointer"
                show={show}
              />
            </div>
            {errors.password && <p className="">{errors.password.message}</p>}
            <div className="absolute top-[348px] lg:top-[370px] right-20 z-10">
              {!errors.password && contraseña && (
                <CheckStatus iconType={true} />
              )}

              {errors.password && !contraseña && (
                <CheckStatus iconType={false} />
              )}
            </div>
            <span>
              ▪ La contraseña debe tener mayúsculas, minúsculas y números
            </span>
            <button type="submit" className="bg-app-yellow text-app-black">
              Crear Cuenta
            </button>
            <span className="pt-2 text-center text-app-yellow app-subtitle-2">
              <Link href={'/sign-in'}>O inicia sesión</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SingUpPage;
