type Props = {
  title: string;
  handleClick: () => void;
  value: string;
  label: string;
};

function ButtonTrend({ title, handleClick, label }: Props) {
  const textColor = label === 'day' ? ' gradientText font-semibold' : '';
  const bgColor = label === 'day' ? '' : 'bg-[#ECC943]';
  return (
    <button
      className={`lg:w-[150px] w-full  flex items-center justify-center  transition-colors text-xl ${textColor} z-20 ${bgColor}
       `}
      onClick={handleClick}
    >
      {title}{' '}
    </button>
  );
}

export default ButtonTrend;
