import { FiSearch, FiMoreVertical } from 'react-icons/fi';
import users from '../../../demodata/users';
import ChatProfileSmall from '../../components/Chats/ChatProfileSmall';

const ChatSidebar = () => {
  return (
    <div className='bg-gappi-03 text-white h-screen grid grid-rows-[64px_auto]'>
      <div className='py-2 px-2 flex items-center justify-between gap-1 bg-gappi-05 text-white border-r border-r-gappi-04'>
        <h2 className='text-3xl'>Gappi</h2>
        <div className='flex items-center gap-2'>
          <input
            type='text'
            name='recentSearch'
            placeholder='search here'
            className='bg-transparent bg-gappi-04 py-1 px-2 w-full rounded-md'
            hidden
          />
          <button>
            <FiSearch size='25px' />
          </button>
          <button>
            <FiMoreVertical size='25px' />
          </button>
        </div>
      </div>
      <div className='grid gap-2 p-2 overflow-y-scroll'>
        {users.map((user) => (
          <ChatProfileSmall
            key={user.id}
            name={user.name}
            profileImage={user.profileImage}
            lastMessage={user.lastMessage}
            lastMessageTime={user.lastMessageTime}
            numberOfUnreadMessages={user.numberOfUnreadMessages}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
