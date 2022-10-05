interface Props {
  type?: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ type, className, placeholder }) => {
  return (
    <input
      className={`border-solid border-2 rounded-lg border-[#D0D0D0] w-full py-4 px-4 font-medium -rounded-lg h-16 ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
