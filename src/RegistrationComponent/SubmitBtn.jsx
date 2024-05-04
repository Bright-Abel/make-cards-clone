const SubmitBtn = ({ text }) => {
  return (
    <button
      className="!w-full bg-teal-600 text-md font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center"
      type="submit"
    >
      {text}
    </button>
  );
};
export default SubmitBtn;
