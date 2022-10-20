type ChatMessageProps = {
  type: 'incoming' | 'outgoing';
  message: string;
};

const ChatMessage = ({ type, message }: ChatMessageProps) => {
  return (
    <div
      className={`relative text-white p-3 rounded-md max-w-[280px] sm:max-w-[400px] md:max-w-[500px] ${
        type === 'incoming' ? 'bg-gappi-07 self-start' : 'bg-gappi-08 self-end'
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
