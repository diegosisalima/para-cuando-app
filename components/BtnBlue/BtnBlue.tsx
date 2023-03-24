interface IBtnBlue {
  text: string;
}

const BtnBlue: React.FC<IBtnBlue> = ({ text }) => {
  return (
    <button className="bg-app-blue text-white px-5 py-3 rounded-3xl">
      {text}
    </button>
  );
};

export default BtnBlue;
