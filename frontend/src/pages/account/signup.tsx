import Link from 'next/link';
import { useState, FormEventHandler } from 'react';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import InputField from '../../components/Forms/InputField';
import { FormDataType, ValidateForm } from '../../utils/validateForm';

const Signup = () => {
  const [formErrors, setFormErrors] = useState<Partial<FormDataType> | null>(
    null
  );

  const handleSignup: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formValues = new FormData(e.currentTarget);

    const formData: Partial<FormDataType> = {
      fullName: formValues.get('fullName')?.toString().trim() || '',
      username: formValues.get('username')?.toString().trim() || '',
      email: formValues.get('email')?.toString().trim() || '',
      password: formValues.get('password')?.toString().trim() || '',
      confirmPassword:
        formValues.get('confirmPassword')?.toString().trim() || '',
    };

    const isFormInvalid = ValidateForm(formData, 'signup');
    if (isFormInvalid) {
      setFormErrors(isFormInvalid);
      return;
    }
    setFormErrors(null);
  };

  return (
    <div className='min-h-screen py-3 bg-gappi-gradient-01 flex items-center justify-center text-white'>
      <div className='w-full max-w-[500px] bg-gappi-bg-01 p-4 rounded-md shadow-gappi-shadow-01'>
        <h2 className='text-4xl'>Create An Account</h2>
        <form onSubmit={handleSignup}>
          <InputField
            type='text'
            name='fullName'
            id='fullName'
            placeholder='enter your full name'
            label='Full Name'
            inputError={formErrors?.fullName}
          />
          <InputField
            type='text'
            name='username'
            id='username'
            placeholder='pick a username'
            label='Username'
            inputError={formErrors?.username}
          />
          <InputField
            type='email'
            name='email'
            id='email'
            placeholder='enter your email'
            label='Email'
            inputError={formErrors?.email}
          />
          <InputField
            type='password'
            name='password'
            id='password'
            placeholder='pick strong password'
            label='Password'
            inputError={formErrors?.password}
          />
          <InputField
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='enter password again'
            label='Confirm Password'
            inputError={formErrors?.confirmPassword}
          />

          <SubmitBtn btnText='Signup Now' className='w-full mt-3' />
        </form>
        <p className='mt-3 flex gap-3'>
          <span>Already have an account?</span>
          <Link href='./login'>
            <a className='text-gappi-02'>Login Here</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
