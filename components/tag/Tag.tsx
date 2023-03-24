interface ITag {
  text: string;
}

const Tag: React.FC<ITag> = ({ text }) => {
  return (
    <div>
      <p className="text-[13px] bg-[#FFFFFF] text-app-grayDark border-solid border border-app-grayDark rounded-3xl px-4 py-1 hover:cursor-pointer">
        {text}
      </p>
    </div>
  );
};
export default Tag;
