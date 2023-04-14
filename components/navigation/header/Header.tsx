import Link from 'next/link';
import { useState } from 'react';
/*icons */
import IconLogo from '../../assets/logo/IconLogo';
import Plus from '../../assets/svg/Plus';
import User from '../../assets/svg/User';
/*components */
import { useUserMe } from '../../../lib/services/user.services';
import ProfileOptions from '../../profileOptions/ProfileOptions';
const LblPublication = () => {
  return (
    <Link
      href={'/publications'}
      className="font-medium text-xs leading-[14px] text-app-blue flex justify-center items-center gap-2"
    >
      <Plus />
      Crear publicación
    </Link>
  );
};
const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { data: login } = useUserMe();

  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm relative">
      <Link href={'/'}>
        <IconLogo />
      </Link>
      <nav className="flex sm:gap-12">
        {login ? (
          <>
            <div className="items-center justify-center hidden md:flex hover:cursor-pointer">
              <LblPublication />
            </div>
            <div className="items-center justify-center hidden gap-2 md:flex hover:cursor-pointer">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.675 1C3.09313 1 1 3.00868 1 5.4864C1 9.97279 6.525 14.0513 9.5 15C12.475 14.0513 18 9.97279 18 5.4864C18 3.00868 15.9069 1 13.325 1C11.744 1 10.3458 1.75331 9.5 2.90631C9.06891 2.31705 8.49622 1.83614 7.8304 1.50431C7.16458 1.17248 6.42525 0.999492 5.675 1Z"
                  stroke="#FF64BC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>mis votos</p>
            </div>
            <div className="flex items-center gap-3 ">
              <Link href="/profile" target={'_parent'}>
                <div className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <User stroke="white" />
                  <p>example@gmail.com</p>
                </div>
              </Link>
              <div
                onClick={() => setIsShow(!isShow)}
                className="p-1 hover:cursor-pointer"
              >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1L5 6L0 1L0.8875 0.1125L5 4.225L9.1125 0.1125L10 1Z"
                    fill="#A7A6A7"
                  />
                </svg>
              </div>
            </div>
            <ProfileOptions isShow={isShow} />
          </>
        ) : (
          <>
            <LblPublication />
            <p className="font-medium text-xs leading-[14px] ml-[31px]">
              <Link href={'/sign-in'}>Log In</Link>
            </p>
            <p className="font-medium text-xs leading-[14px] ml-[21px]">
              <Link href={'/sign-up'}>Sign Up</Link>
            </p>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
