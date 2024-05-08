import PinInput from 'react-pin-input';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { handleColor } from '../features/contSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styled from 'styled-components';
const ForgotPin = () => {
  const { OTP } = useSelector((store) => store.contState);
  const navigate = useNavigate();
  const [time, setTime] = useState(60);
  const dispatch = useDispatch();
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
    // console.log('WHAT IS THE TIME');
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

  const handleChange = useCallback((value) => {
    const name = 'OTP';
    dispatch(handleColor({ name, value }));
  }, []);

  const handleClick = () => {
    if (OTP.length < 6 && OTP.length > 0) {
      toast.error('The one time password must be up to 6.', {
        className:
          'border border-red-300 bg-red-50 text-sm px-1  rounded-lg mx-[4rem] my-[2rem] sm:mx-0',
        hideProgressBar: true,
        closeButton: false,
      });
    } else if (OTP === '') {
      toast.error('The one time password field is require.', {
        className:
          'border border-red-300 bg-red-50 text-sm px-2 rounded-lg mx-[4rem] my-[2rem] sm:mx-0',
        hideProgressBar: true,
        closeButton: false,
      });
    } else {
      navigate('/reset-pin');
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />

      <Wrapper>
        <motion.div
          className="relative flex items-center justify-center w-full gap-4 p-4 xl:!py-[5rem] "
          initial={{ transform: 'translateX(100%)' }}
          animate={{
            transform: 'translateX(0%)',
            transition: { duration: 0.7 },
          }}
          exit={{
            transform: 'translateX(-100%)',
          }}
        >
          <div
            className="rounded-md bg-white py-6 lg:py-8 w-full sm:max-w-lg px-4 md:px-6 lg:px-8 relative overflow-hidden block"
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

            <div className="text-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Reset PIN</h2>
                <p>
                  Enter the 6-digit code sent to your phone number registered
                </p>
              </div>

              <div className="!px-0 relative !my-14">
                <PinInput
                  length={6}
                  placeholder="*"
                  secret
                  // secretDelay={100}
                  onChange={(value, index) => handleChange(value)}
                  type="numeric"
                  inputMode="number"
                  // style={{ padding: '10px' }}
                  inputStyle={{
                    borderColor: '#d1d5db',
                    fontSize: '1rem',
                    width: '2.5rem',
                    height: '2.8rem',
                    borderRadius: '5px',
                    marginRight: '8px',
                    borderWidth: '2px',
                  }}
                  inputFocusStyle={{ borderColor: '#0d9488' }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
              <button
                className={`!w-full bg-teal-600 text-xl font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center mb-[1rem] `}
                type="submit"
                onClick={handleClick}
              >
                Submit
              </button>
              <div className="flex justify-center z-[800] text-sm pt-2">
                <p> Not getting OTP?</p>
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
                    className="ml-2 text-teal-500 font-semibold cursor-pointer z-[800]"
                  >
                    Resend
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Wrapper>
      <Footer />
    </div>
  );
};
export default ForgotPin;

const Wrapper = styled.div`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
`;
