import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  type?: string;
  value?: string;
  id?: string;
  error?: FieldError;
  onChange?: any;
  className?: string | boolean;
  placeholder?: string;
  disabled?: boolean;
  isEdited?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type,
      value,
      id,
      onChange,
      className,
      placeholder,
      error,
      disabled,
      isEdited,
      ...rest
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        className={`border-solid border-2 rounded-lg outline-none border-[#D0D0D0] text-xl w-full py-5 px-5 font-normal -rounded-lg h-16  ${
          typeof className === 'string' && className
        } ${error && 'focus:border-red-400 border-red-400'} ${
          isEdited && !error && 'focus:border-[#00B247]'
        }`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
    );
  },
);
export default Input;
