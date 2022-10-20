import { HTMLInputTypeAttribute } from 'react';

type InputFieldProps = {
  label?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  id?: string;
  placeholder?: string;
  inputError?: string;
};

const InputField = ({
  label,
  type,
  name,
  id,
  placeholder,
  inputError,
}: InputFieldProps) => {
  return (
    <div className='mt-3'>
      {label && (
        <label htmlFor={id} className='text-xl'>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='w-full bg-transparent border border-gappi-02 text-lg py-2 px-3 rounded-md'
      />
      {inputError && <p className='text-red-500'>{inputError}</p>}
    </div>
  );
};

export default InputField;
