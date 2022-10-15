import Link from 'next/link';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import InputField from '../../components/Forms/InputField';

const Login = () => {
  return (
    <div className='h-screen bg-gappi-gradient-01 text-white flex items-center justify-center px-3'>
      <div className='bg-gappi-bg-01 p-4 rounded-md shadow-gappi-shadow-01 w-full max-w-[500px]'>
        <h2 className='text-4xl'>Welcome Back!</h2>
        <form>
          <InputField
            type='email'
            name='email'
            id='email'
            placeholder='enter your email'
            label='Email'
          />
          <InputField
            type='password'
            name='password'
            id='password'
            label='Password'
            placeholder='enter your password'
          />
          <SubmitBtn btnText='Login Now' className='w-full mt-3' />
        </form>
        <p className='mt-3 flex gap-3'>
          <span>Don't have an account?</span>
          <Link href='./signup'>
            <a className='text-gappi-02'>Register Here</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
