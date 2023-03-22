import Input from '../../input/Input';

export function Footer() {
  return (
    <div className="h-[483px] bg-[url('/footer-banner.png')] bg-center bg-no-repeat bg-cover lg:h-[488px] relative">
      <div className="absolute bottom-[137px] -translate-x-2/4 left-2/4 w-[362px] sm:w-[465px]">
        <Input />
      </div>
    </div>
  );
}
