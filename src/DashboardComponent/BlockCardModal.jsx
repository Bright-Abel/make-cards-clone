import { IoMdCloseCircleOutline } from 'react-icons/io';
import { blockCardSwitch, openModal } from '../features/dashBoardSlice';
import { TbLockAccess } from 'react-icons/tb';
const BlockCardModal = ({
  dispatch,
  blockCardReason,
  handleMessage,
  handleSubmit,
}) => {
  return (
    <section
      // onClick={() => {
      //   dispatch(blockCardSwitch()), dispatch(openModal());
      // }}
      className={`modal absolute top-0 left-0 w-full h-full bg-[rgba(18,27,25,0.63)]
            z-[700 ] flex items-center justify-center px-4 
          `}
    >
      <div className="z-[1000] bg-white rounded-[12px] px-10 py-6 lg:px-8 pt-6 pb-10 mt-[3rem]  w-full sm:max-w-lg">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              dispatch(blockCardSwitch()), dispatch(openModal());
            }}
            className="text-pink-300 text-[2rem] "
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-[65px] h-[65px] bg-pink-100 rounded-full grid place-content-center">
            <div className="w-[45px] h-[45px] bg-pink-200 rounded-full grid place-content-center">
              <TbLockAccess className="text-[1.5rem] text-pink-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-4">
          <h1 className="text-gray-700 text-center font-bold">Block card</h1>
          <p className="text-center text-gray-600 font-medium pt-3">
            Once this card is blocked, you won’t be able to fund or use it for
            any transaction. You can unblock it anytime.
          </p>

          <form className="pt-8" onSubmit={handleSubmit}>
            <label
              htmlFor="blockCardReason"
              className="text-gray-700 font-bold flex items-center gap-2"
            >
              Please state your reason for blocking this card
              <span className="text-red-600 text-[1.4rem]"> *</span>
            </label>

            <textarea
              maxlength="10000"
              class="border resize-none rounded-lg p-3 w-full outline-none focus:border-pink-300 mt-3"
              placeholder="Type Here..."
              cols="30"
              rows="5"
              name="blockCardReason"
              value={blockCardReason}
              required
              onChange={handleMessage}
            ></textarea>
            <div className="w-full pt-5 flex gap-8">
              <button
                type="button"
                className="border-[2px] border-black text-black rounded-[32px] py-2 w-1/2 grid place-content-center font-bold text-lg"
                onClick={() => {
                  dispatch(blockCardSwitch()), dispatch(openModal());
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`w-1/2 py-2 bg-pink-500 rounded-[32px] text-white font-bold ${
                  !blockCardReason
                    ? 'cursor-not-allowed opacity-40'
                    : 'cursor-pointer'
                }`}
              >
                Block Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default BlockCardModal;
