import { PropsWithChildren } from 'react';
import { useIsDesktop } from '../../hooks/useIsDesktop';
import ChatSidebar from '../Chats/ChatSidebar';

const ConversationLayout = ({ children }: PropsWithChildren) => {
  const isDesktop = useIsDesktop();

  console.log(isDesktop);

  return (
    <div className='grid grid-cols-[400px_auto]'>
      {isDesktop && <ChatSidebar />}
      <div>{children}</div>
    </div>
  );
};

export default ConversationLayout;
