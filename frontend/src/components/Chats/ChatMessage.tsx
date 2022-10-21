type ChatMessageProps = {
  type: 'incoming' | 'outgoing';
  message: string;
};

const ChatMessage = ({ type, message }: ChatMessageProps) => {
  return (
    <div
      className={`relative text-white p-3 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] ${
        type === 'incoming'
          ? 'bg-gappi-07 self-start rounded-r-lg rounded-bl-lg'
          : 'bg-gappi-08 self-end rounded-l-lg rounded-br-lg'
      }`}
    >
      <p className='text-lg'>{message}</p>
      <span
        className={`text-gappi-06 absolute top-0 ${
          type === 'incoming'
            ? 'right-0 translate-x-[110%]'
            : 'left-0 -translate-x-[110%]'
        }`}
      >
        8:34 PM
      </span>
    </div>
  );
};

export default ChatMessage;
