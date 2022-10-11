import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  type?: string;
  value?: string;
  id?: string;
  error?: FieldError;
  onChange?: any;
  className?: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { type, value, id, onChange, className, placeholder, error, ...rest },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        className={`border-solid border-2 rounded-lg border-[#D0D0D0] text-md w-full py-4 px-4 font-medium -rounded-lg h-16 ${className} ${
          error && 'border-red-400'
        }`}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    );
  },
);
export default Input;
