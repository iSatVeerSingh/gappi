import { FiMoreVertical, FiPhoneCall, FiSearch, FiVideo } from 'react-icons/fi';
import Avatar from './Avatar';

const ConversationHead = () => {
  return (
    <div className='flex items-center justify-between gap-3 bg-gappi-05 text-white p-2'>
      <Avatar src='/images/01.jpg' className='w-12 h-12' />
      <div className='ml-auto flex items-center gap-2'>
        <input type='text' hidden />
        <button>
          <FiSearch size='25px' />
        </button>
      </div>
      <div className='flex items-center gap-4'>
        <button>
          <FiVideo size='25px' />
        </button>
        <button>
          <FiPhoneCall size='25px' />
        </button>
        <button>
          <FiMoreVertical size='25px' />
        </button>
      </div>
    </div>
  );
};

export default ConversationHead;
