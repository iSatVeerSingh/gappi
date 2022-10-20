import { FiFile, FiMic, FiSend } from 'react-icons/fi';

const MessageInput = () => {
  return (
    <div className='bg-gappi-05 text-white flex items-center gap-3 px-3 py-2'>
      <div className='flex items-center flex-grow gap-2'>
        <input
          type='text'
          name='newMessage'
          id='newMessage'
          placeholder='type message here'
          className='border border-gappi-04 rounded-md bg-transparent text-lg py-2 px-3 flex-grow'
        />

        <button>
          <FiSend size='25px' />
        </button>
      </div>

      <div className='flex gap-2 items-center'>
        <button>
          <FiMic size='25px' />
        </button>
        <button>
          <FiFile size='25px' />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
