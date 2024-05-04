import { useSelector, useDispatch } from 'react-redux';
import {
  changeView,
  handleCamera,
  handleUserInput,
} from '../features/register';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import BVNSelect from './BVNSelect';
import Input from '../DashboardComponent/Input';
import SubmitBtn from './SubmitBtn';
import { toast } from 'react-toastify';

const options = [{ value: 'BVN', label: 'bank verification number' }];
const Camera = () => {
  const { camera, BVN } = useSelector((store) => store.registerSlice);
  const [selectedOption, setSelectedOption] = useState(null);

  const webcamRef = useRef(null);

  const dispatch = useDispatch();

  const storeImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(handleCamera(imageSrc));
  };

  const handleChange = (e) => {
    const name = 'BVN';
    const value = e.target.value.replace(/\D/g, '');

    dispatch(handleUserInput({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption || !BVN) {
      toast.error('Please select valid means of identification.', {
        className:
          'border border-red-300 bg-red-50 text-xs text-black px-1 font-bold',
        hideProgressBar: true,
        closeButton: false,
      });
    } else {
      dispatch(changeView(3));
    }
  };

  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: 'user',
  };
  return (
    <Wrapper
      className="flex flex-col items-center justify-center z-[40] p-6 gap-8 relative"
      camera={camera}
    >
      <div
        className="bg-white w-full sm:max-w-[30rem] rounded-lg relative overflow-hidden shadow-lg px-4 lg:px-8 lg:py-8 py-6"
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
          <h3 className="text-xl font-bold lg:text-2xl mb-">
            Liveliness verification
          </h3>

          <div className="flex flex-col items-center gap-10">
            {!camera ? (
              <>
                <div className="camera-container mt-10">
                  <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={200}
                    videoConstraints={videoConstraints}
                    style={{ borderRadius: '50%' }}
                  />
                </div>

                <button
                  type="button"
                  onClick={storeImage}
                  className="w-full bg-teal-600 text-md font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center"
                >
                  Take Picture
                </button>
              </>
            ) : (
              <>
                <div className="camera-container mt-10">
                  <img src={camera} alt="" style={{ borderRadius: '50%' }} />
                </div>

                <div className="flex  gap-4 font-bold items-center">
                  <button
                    type="button"
                    className="flex  items-center gap-4 text-sm bg-gray-50  px-8 py-2 rounded-[32px]  text-teal-500 cursor-default"
                  >
                    <GiCheckMark /> Selfie Registered
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(handleCamera(''))}
                    className="px-10 py-2 rounded-[32px] border text-sm border-teal-500 text-teal-500"
                  >
                    Retake Photo
                  </button>
                </div>

                <form
                  action=""
                  className="w-full flex-col flex gap-4 "
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-bold text-[1rem]">
                    Enter your Bank Verification Number
                  </h3>

                  <div className=" flex flex-col gap-8 pb-4">
                    <BVNSelect
                      defaultVal={selectedOption}
                      handleChange={setSelectedOption}
                      options={options}
                      placeholder="Select ID Type"
                    />

                    <Input
                      type="text"
                      name="BVN"
                      placeholder="Kindly enter your BVN"
                      value={BVN}
                      handleChange={handleChange}
                      max={11}
                      min={11}
                    />
                  </div>

                  <SubmitBtn text="Continue" />
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Camera;

const Wrapper = styled.section`
  .camera-container {
    position: relative;
    display: inline-block;
    height: 210px;
    display: grid;
    place-content: center;
    width: 210px;
    border-radius: 50%;
    padding: 10px;
    transform: scaleX(-1);
    box-sizing: border-box;
    border-width: 2px;
    border-style: dotted;

    border-color: ${({ camera }) =>
      camera ? '#14b8a6' : 'rgb(229, 231, 235)'};
    /* border-image: initial; */
  }
  .webcam {
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Optional - to remove margin */
  }
`;
