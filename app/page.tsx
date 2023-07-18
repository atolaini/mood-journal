import { auth } from '@clerk/nextjs';
import Link from 'next/link';

const Home = async () => {
  const { userId } = await auth();
  let href = userId ? '/journal' : '/new-user';

  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      <div className='w-full max-w-[600px] mx-auto'>
        <h1 className='text-6xl mb-7'>Your personal journal</h1>
        <p className='text-2xl text-white/60 mb-7'>
          The journal that knows you better than you know yourself...just be
          honest.
        </p>
        <div>
          <Link href={href}>
            <button className='bg-blue-600 px-4 py-2 rounded-lg text-xl'>
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
