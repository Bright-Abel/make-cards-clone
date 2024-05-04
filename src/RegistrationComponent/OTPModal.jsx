import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PinInput from 'react-pin-input';
import { useState, useEffect, useRef } from 'react';
import SubmitBtn from './SubmitBtn';
import { toast } from 'react-toastify';
import { handleColor } from '../features/contSlice';
import styled from 'styled-components';
import { changeView, modalHandler } from '../features/register';
const OTPModal = () => {
  const { email, OTP } = useSelector((store) => store.contState);

  const [time, setTime] = useState(60);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerRef.current); // Clear the interval when time reaches zero
          return 0; // Reset time to 0
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  // Restart Timer
  const startTimer = () => {
    clearInterval(timerRef.current); // Clear the previous timer
    setTime(60); // Reset time to 60
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerRef.current); // Clear the interval when time reaches zero
          return 0; // Reset time to 0
        }
      });
    }, 1000);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleChange = (value) => {
    const name = 'OTP';

    dispatch(handleColor({ name, value }));
  };
  const handleClick = () => {
    if (OTP.length < 6 && OTP.length > 0) {
      toast.error('The one time password must be up to 6.', {
        className: 'border border-red-300 bg-red-50 text-sm px-1',
        hideProgressBar: true,
        closeButton: false,
      });
    } else if (OTP === '') {
      toast.error('The one time password field is require.', {
        className: 'border border-red-300 bg-red-50 text-sm px-1',
        hideProgressBar: true,
        closeButton: false,
      });
    } else if (OTP !== '245678') {
      toast.error('USE "2-4-5-6-7-8" FOR THE OTP.', {
        className: 'border border-red-300 bg-red-50 text-sm px-1 py-4',
        hideProgressBar: true,
        closeButton: false,
      });
    } else {
      dispatch(changeView(2));
      dispatch(modalHandler());
    }
  };
  return (
    <div
      className={`modal absolute top-0 bottom-0 left-0 w-full h-full bg-[rgba(18,27,25,0.63)]
           flex items-center justify-center z-[1000]  px-6
          `}
    >
      <section
        className="z-10 mx-auto rounded-md   bg-white py-6 lg:py-8 w-full sm:max-w-[29rem] px-8 relative overflow-hidden block"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 8px 16px' }}
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-[-20] -left-10 -top-20 w-52 opacity-10"
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
            <button
              type="button"
              onClick={() => dispatch(modalHandler())}
              className="text-[1.4rem] "
            >
              <HiOutlineArrowLeft />
            </button>
          </div>
          <div className="flex flex-col  items-center  gap-6">
            <img
              src="https://makecards.co/static/media/otp.4590bbe9d5b85f5fa2d7c2b9cbeabc27.svg"
              alt="svg"
              className=" w-[20rem]"
            />

            <p className="text-stone-500">
              Enter the 6-digit code sent to
              <span className="font-bold"> {email}</span>
            </p>

            <div className="w-full text-center grid gap-10 ">
              <PinInput
                length={6}
                placeholder="•"
                secret
                onChange={(value, index) => handleChange(value)}
                type="numeric"
                inputMode="number"
                inputStyle={{
                  borderColor: '#d1d5db',
                  width: '2.2rem',
                  height: '2.5rem',
                  borderRadius: '5px',
                  marginRight: '2px',
                  borderWidth: '1px',
                  fontSize: '1rem',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                }}
                inputFocusStyle={{ borderColor: '#2dd4bf' }}
                autoSelect={true}
                // regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />

              <button
                type="button"
                className="!w-full bg-teal-600 text-md font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center"
                onClick={handleClick}
              >
                Validate OTP
              </button>
            </div>
          </div>

          <p className="text-center text-sm pt-2">
            Not getting OTP?
            {time > 0 ? (
              <span className="ml-2 text-teal-500 font-semibold  ">
                {minutes < 1 && seconds > 10
                  ? `0${minutes} : ${seconds}`
                  : minutes < 1 && seconds < 10
                  ? `0${minutes} : 0${seconds}`
                  : null}
              </span>
            ) : (
              <button
                type="button"
                onClick={startTimer}
                className="ml-2 text-teal-500 font-semibold"
              >
                Resend
              </button>
            )}
          </p>
        </div>
      </section>
    </div>
  );
};
export default OTPModal;

const Wrapper = styled.main``;
