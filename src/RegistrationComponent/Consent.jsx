import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleInput,
  changeView,
  handleVerificationID,
  removeDataFromArray,
} from '../features/register';
const Consent = () => {
  const { consent } = useSelector((store) => store.registerSlice);

  const dispatch = useDispatch();

  return (
    <section className="flex flex-col items-center justify-center z-[40] p-6 gap-8">
      <div className="bg-white w-full sm:max-w-lg rounded-lg shadow-lg px-4 lg:px-8 lg:py-8 py-6">
        <div className="">
          <h3 className="text-xl font-bold">Verify your Identity</h3>
          <p className="text-sm text-[#9CA1A5]">
            To proceed, please take a selfie
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <img
            src="https://makecards.co/static/media/selfie.72304617f9175045f2595d6ecbb70b29.svg"
            alt="svg"
            className="w-[15rem]"
          />

          <div className="cursor-pointer text-sm">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              value={consent}
              onChange={() => dispatch(handleInput())}
              className="w-3 h-3 accent-[#1c9b88] mr-3"
            />
            <label htmlFor="consent" className="text-[#9CA1A5] font-semibold">
              I consent to the collection, use and disclosure of my personal
              data for identity verification and safety purposes.
            </label>
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <button
              onClick={() => dispatch(handleVerificationID(2))}
              className={`w-full bg-teal-600 text-md font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center ${
                consent ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
              }`}
              type="button"
            >
              Take a selfie
            </button>

            <button
              type="button"
              onClick={() => {
                dispatch(changeView(1));
                dispatch(removeDataFromArray(1));
              }}
              className={`flex items-center justify-center gap-2 text-teal-500 text-sm `}
            >
              <HiOutlineArrowLeft /> Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Consent;
