interface IBtnBlue {
  text: string;
}

const BtnBlue: React.FC<IBtnBlue> = ({ text }) => {
  return (
    <button className="bg-app-blue text-white px-5 py-[12px] rounded-3xl w-full">
      {text}
    </button>
  );
};

export default BtnBlue;
