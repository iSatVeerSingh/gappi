import Avatar from './Avatar';

type ChatProfileSmallProps = {
  name: string;
  lastMessage?: string;
  lastMessageTime?: string;
  numberOfUnreadMessages?: string | number;
  profileImage?: string;
};

const ChatProfileSmall = ({
  profileImage,
  name,
  lastMessage,
  lastMessageTime,
  numberOfUnreadMessages,
}: ChatProfileSmallProps) => {
  return (
    <div className='relative flex items-center gap-3 border border-gappi-04 p-2 rounded-md'>
      <Avatar src={profileImage || '/images/blank.jpg'} className='w-12 h-12' />
      <div className='h-14'>
        <h4 className='text-2xl font-medium'>{name}</h4>
        {lastMessage && <p className='text-gappi-06'>{lastMessage}</p>}
      </div>
      {lastMessageTime && (
        <span className='absolute top-2 right-2 text-sm text-gappi-06'>
          {lastMessageTime}
        </span>
      )}
      {numberOfUnreadMessages && (
        <p className='absolute bottom-2 right-2 bg-gappi-06 px-1 rounded-full text-sm'>
          {numberOfUnreadMessages}
        </p>
      )}
    </div>
  );
};

export default ChatProfileSmall;
