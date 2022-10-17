import ChatMessage from '../../components/Chats/ChatMessage';
import ConversationHead from '../../components/Chats/ConversationHead';
import MessageInput from '../../components/Chats/MessageInput';

const Conversation = () => {
  return (
    <div className='grid grid-rows-[64px_auto_64px] h-screen bg-gappi-03 text-white'>
      <ConversationHead />
      <div className='overflow-y-scroll px-2 py-2 flex flex-col gap-2'>
        <ChatMessage
          message='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis itaque suscipit omnis nihil iure aliquam ipsam, amet alias debitis! Architecto voluptatibus optio eum odit a facilis, aspernatur laboriosam quis?'
          type='incoming'
        />
        <ChatMessage
          message='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis itaque suscipit omnis nihil iure aliquam ipsam, amet alias debitis! Architecto voluptatibus optio eum odit a facilis, aspernatur laboriosam quis?'
          type='outgoing'
        />
        <ChatMessage
          message='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis itaque suscipit omnis nihil iure aliquam ipsam, amet alias debitis! Architecto voluptatibus optio eum odit a facilis, aspernatur laboriosam quis?'
          type='incoming'
        />
        <ChatMessage
          message='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis itaque suscipit omnis nihil iure aliquam ipsam, amet alias debitis! Architecto voluptatibus optio eum odit a facilis, aspernatur laboriosam quis?'
          type='outgoing'
        />
        <ChatMessage
          message='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis itaque suscipit omnis nihil iure aliquam ipsam, amet alias debitis! Architecto voluptatibus optio eum odit a facilis, aspernatur laboriosam quis?'
          type='outgoing'
        />
        <ChatMessage
          message='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis itaque suscipit omnis nihil iure aliquam ipsam, amet alias debitis! Architecto voluptatibus optio eum odit a facilis, aspernatur laboriosam quis?'
          type='incoming'
        />
      </div>

      <MessageInput />
    </div>
  );
};

export default Conversation;
