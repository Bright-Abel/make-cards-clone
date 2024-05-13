import { useSelector, useDispatch } from 'react-redux';
import Input from '../DashboardComponent/Input';
import FundSlide from '../DashboardComponent/FundSlide';
import { Link } from 'react-router-dom';
import { clearState } from '../features/register';

const FundCardForm = ({ viewID }) => {
  const { nickname } = useSelector((store) => store.contState);

  const dispatch = useDispatch();
  return (
    <div className="relative flex items-center justify-center w-full gap-4 py-10 px-5">
      <div
        className={`rounded-md bg-white py-6 lg:py-8 w-full sm:max-w-[30rem] px-4 md:px-6 lg:px-10 relative overflow-hidden block ${
          viewID === 4 ? 'slide-in' : 'slide-out'
        }`}
        style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 8px 16px' }}
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 -left-10 -top-20 w-52 opacity-10"
        >
          <path
            fill="#1C9B88"
            d="M34.9,-39.1C42.8,-27.1,44.9,-13.6,47.5,2.6C50.2,18.8,53.3,37.6,45.5,50.6C37.6,63.6,18.8,70.8,-0.7,71.5C-20.3,72.3,-40.5,66.5,-57,53.5C-73.4,40.5,-85.9,20.3,-82.6,3.3C-79.3,-13.6,-60,-27.2,-43.6,-39.2C-27.2,-51.2,-13.6,-61.6,0,-61.5C13.6,-61.5,27.1,-51.1,34.9,-39.1Z"
            transform="translate(100 100)"
          ></path>
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 -right-14 -bottom-20 w-52 opacity-10"
        >
          <path
            fill="#1C9B88"
            d="M33.7,-28.9C44.9,-22.4,56.1,-11.2,57.2,1C58.2,13.3,49.1,26.6,37.8,33.2C26.6,39.8,13.3,39.7,2.1,37.6C-9.2,35.6,-18.4,31.6,-27,25C-35.6,18.4,-43.6,9.2,-50.5,-6.9C-57.4,-22.9,-63.1,-45.9,-54.5,-52.4C-45.9,-58.9,-22.9,-49,-5.9,-43.1C11.2,-37.3,22.4,-35.5,33.7,-28.9Z"
            transform="translate(100 100)"
          ></path>
        </svg>

        <div className="">
          <div className="">
            <h1 className="text-2xl font-bold">Fund Your Card</h1>
            <p className="text-gray-500 text-sm">
              With a dollar card, the possibilities are limitless
            </p>
          </div>

          <div className="w-full relative mx-auto pt-6">
            {/* CARD */}
            <div className="h-[240px] w-full bg-teal-600 rounded-[1rem] relative">
              <svg
                width="100%"
                height="274"
                className=" absolute top-0 left-0 right-0 bottom-0"
                viewBox="0 0 434 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="100%"
                  height="100%"
                  rx="16"
                  className="bg-rect"
                  style={{ background: 'rgb(23, 61, 55)' }}
                  // style="fill: rgb(23, 61, 55);"
                ></rect>
                <path
                  d="M434 92C428.616 92 423.284 93.0605 418.31 95.1209C413.336 97.1814 408.816 100.201 405.009 104.009C401.201 107.816 398.181 112.336 396.121 117.31C394.06 122.284 393 127.616 393 133C393 138.384 394.06 143.716 396.121 148.69C398.181 153.664 401.201 158.184 405.009 161.991C408.816 165.799 413.336 168.819 418.31 170.879C423.284 172.939 428.616 174 434 174L434 92Z"
                  fill="#FFC700"
                ></path>
                <path
                  d="M195 74.5C195 68.1487 200.149 63 206.5 63H212C221.389 63 229 70.6112 229 80V86H206.5C200.149 86 195 80.8513 195 74.5Z"
                  fill="#FFC700"
                ></path>
                <path
                  d="M144 95H166.5C172.851 95 178 100.149 178 106.5C178 112.851 172.851 118 166.5 118H161C151.611 118 144 110.389 144 101V95Z"
                  fill="#FFC700"
                ></path>
                <path
                  d="M287 68H288C292.971 68 297 72.0294 297 77V81C297 83.7614 294.761 86 292 86C289.239 86 287 83.7614 287 81V68Z"
                  fill="#FFC700"
                ></path>
              </svg>
              <div className="w-full py-4 px-6 relative">
                <img
                  src="https://makecards.co/static/media/logo-white.6d119ed838528305f419488b6db412ea.svg"
                  alt="MakeCards logo"
                  className="absolute"
                />
                <div className="flex justify-between translate-y-[180px] items-center">
                  <p className=" z-10 truncate max-w-[308px] calibri tracking-widest text-[12px] sm:text-sm uppercase font-medium text-white">
                    {nickname}
                  </p>
                  <img
                    src="	https://makecards.co/static/media/mastercard-white.f9bd83cc07dac07af85935b68d6ceb1c.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* END OF CARD */}
            <div className="w-full pt-10 pb-5">
              <label htmlFor="amountToFund" className="text-[#9CA1A5] text-sm">
                Amount to fund
              </label>
              <div className="  w-full pb-2 outline-none border-b border-[#a4a9a1] focus-within:border-[#2FCFB7] flex gap-4 items-center pt-4">
                <h1 className="text-[#9CA1A5] font-bold text-md">USD</h1>
                <input
                  type="text"
                  name="amountToFund"
                  id="amountToFund"
                  // value={value}
                  className="border-none outline-none w-full px-1  text-md"
                  placeholder="3.00"
                />
              </div>
              <span className="text-red-600 text-xs  flex justify-end font-semibold">
                Minimum amount is $3
              </span>
            </div>
            <FundSlide />
            <Link
              to="/dashboard"
              onClick={() => dispatch(clearState())}
              className="!w-full bg-teal-600 text-sm mt-8 font-bold text-teal-50 py-4 sm:py-3 px-20 rounded-[32px] grid place-content-center whitespace-nowrap"
            >
              Skip and continue to dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FundCardForm;
