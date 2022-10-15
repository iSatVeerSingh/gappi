import SubmitBtn from '../../components/Buttons/SubmitBtn';
import InputField from '../../components/Forms/InputField';

const Signup = () => {
  return (
    <div className='h-screen bg-gappi-gradient-01 flex items-center justify-center text-white'>
      <div className='w-full max-w-[500px] bg-gappi-bg-01 p-4 rounded-md shadow-gappi-shadow-01'>
        <h2 className='text-4xl'>Create An Account</h2>
        <form>
          <InputField
            type='text'
            name='fullName'
            id='fullName'
            placeholder='enter your full name'
            label='Full Name'
          />
          <InputField
            type='text'
            name='username'
            id='username'
            placeholder='pick a username'
            label='Username'
          />
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
            placeholder='pick strong password'
            label='Password'
          />
          <InputField
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='enter password again'
            label='Confirm Password'
          />

          <SubmitBtn btnText='Signup Now' className='w-full mt-3' />
        </form>
      </div>
    </div>
  );
};

export default Signup;
