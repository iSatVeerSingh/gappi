import Link from 'next/link';
import { FormEventHandler, useState } from 'react';
import SubmitBtn from '../components/Buttons/SubmitBtn';
import InputField from '../components/Forms/InputField';
import { FormDataType, ValidateForm } from '../utils/validateForm';

const Login = () => {
  const [formErrors, setFormErrors] = useState<Partial<FormDataType> | null>(
    null
  );

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formValues = new FormData(e.currentTarget);

    const formData: Partial<FormDataType> = {
      username: formValues.get('username')?.toString().trim() || '',
      password: formValues.get('password')?.toString().trim() || '',
    };

    const isFormInvalid = ValidateForm(formData, 'login');
    if (isFormInvalid) {
      setFormErrors(isFormInvalid);
      return;
    }
    setFormErrors(null);
  };

  return (
    <div className='h-screen bg-gappi-gradient-01 text-white flex items-center justify-center px-3'>
      <div className='bg-gappi-bg-01 p-4 rounded-md shadow-gappi-shadow-01 w-full max-w-[500px]'>
        <h2 className='text-4xl'>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <InputField
            type='text'
            name='username'
            id='username'
            placeholder='enter your username'
            label='Username'
            inputError={formErrors?.username}
          />
          <InputField
            type='password'
            name='password'
            id='password'
            label='Password'
            placeholder='enter your password'
            inputError={formErrors?.password}
          />
          <SubmitBtn btnText='Login Now' className='w-full mt-3' />
        </form>
        <p className='mt-3 flex gap-3'>
          <span>Don&#39;t have an account?</span>
          <Link href='./signup'>
            <a className='text-gappi-02'>Register Here</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
