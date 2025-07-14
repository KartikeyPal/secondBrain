import { useNavigate } from 'react-router-dom';
import { Button } from '../component/Button';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='flex w-screen h-screen items-center bg-slate-50'>
      <div className='flex flex-col items-center justify-center w-1/2 gap-8'>
        <h1 className='font-bold text-5xl text-purple-700 mb-4'>Welcome to Second Brain</h1>
        <p className='text-lg text-slate-600 mb-6 text-center max-w-md'>
          Organize, store, and manage your important tasks and content in one place. Sign up to start building your second brain!
        </p>
        <div className='flex gap-4'>
          <Button varient='Primary' size='md' text='Sign Up' onClick={()=>navigate('/signup')} />
          <Button varient='Secondary' size='md' text='Sign In' onClick={()=>navigate('/signin')} />
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <div className='solar-system'>
          <div className='sun'></div>
          <div className='orbit orbit1'>
            <div className='planet planet1'></div>
          </div>
          <div className='orbit orbit2'>
            <div className='planet planet2'></div>
          </div>
          <div className='orbit orbit3'>
            <div className='planet planet3'></div>
          </div>
          <div className='orbit orbit4'>
            <div className='planet planet4'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 