import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <main className='container mx-auto'>
        <div>
          <h1 className='text-5xl'>Have your best chat</h1>
          <p>Fast, easy &#38; unlimited confrence call services</p>
          <div className='flex gap-3'>
            <Link href='/signup'>
              <a>Signup</a>
            </Link>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
