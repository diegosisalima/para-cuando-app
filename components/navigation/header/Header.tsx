import IconLogo from '../../assets/logo/IconLogo';

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <IconLogo />
      <nav className="flex">
        <p className="font-medium text-xs leading-[14px] text-app-blue">
          + Crear publicación
        </p>
        <p className="font-medium text-xs leading-[14px] ml-[31px]">Log In</p>
        <p className="font-medium text-xs leading-[14px] ml-[21px]">Sign Up</p>
      </nav>
    </div>
  );
};

export default Header;
