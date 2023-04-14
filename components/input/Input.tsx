import Link from 'next/link';
import Search from '../assets/svg/Search';
const Input = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
        className="border px-6 py-4 rounded-3xl w-full relative"
      />
      <Link href={'/search'}>
        <div className="absolute right-6 -translate-y-2/4 top-2/4">
          <Search />
        </div>
      </Link>
    </div>
  );
};

export default Input;
