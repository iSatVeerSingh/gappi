type SubmitBtnProps = {
  btnText: string;
  className?: string;
};

const SubmitBtn = ({ btnText, className }: SubmitBtnProps) => {
  return (
    <button
      type='submit'
      className={`text-white text-xl bg-gappi-02 px-4 py-2 rounded-md ${
        className ? className : ''
      }`}
    >
      {btnText}
    </button>
  );
};

export default SubmitBtn;
