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
  disabled?: boolean;
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
        className={`border-solid border-2 rounded-lg border-[#D0D0D0] text-lg w-full py-4 px-4 font-medium -rounded-lg h-16 ${className} ${
          error && 'border-red-400'
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
