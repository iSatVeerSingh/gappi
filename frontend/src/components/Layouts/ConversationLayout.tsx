import { PropsWithChildren, useEffect, useRef } from 'react';
import { useIsDesktop } from '../../hooks/useIsDesktop';
import { useMatchMinWidth } from '../../hooks/useMinWidth';
import ChatSidebar from '../Chats/ChatSidebar';

const ConversationLayout = ({ children }: PropsWithChildren) => {
  const isMinWidth = useMatchMinWidth('1024px');
  const isDesktop = useIsDesktop();

  return (
    <div
      className={
        isMinWidth && isDesktop ? 'grid grid-cols-[400px_auto]' : 'grid'
      }
    >
      {isMinWidth && isDesktop && <ChatSidebar />}
      <div>{children}</div>
    </div>
  );
};

export default ConversationLayout;
