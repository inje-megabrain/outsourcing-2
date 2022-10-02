interface Props {
  type?: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ type, className, placeholder }) => {
  return <input className={className} type={type} placeholder={placeholder} />;
};

export default Input;
