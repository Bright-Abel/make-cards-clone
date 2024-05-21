import { country } from '../custom.jsx/data';
import styled from 'styled-components';
import { handleColor } from '../features/contSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Footer, FormSelectInput, Navbar } from '../components';
import { motion } from 'framer-motion';
const Login = () => {
  const { phoneNumber, countryName } = useSelector((store) => store.contState);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(faqNavCol(false));
  //   dispatch(caseNavCol(false));
  // }, []);

  const countryFlag =
    countryName === 'NG'
      ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg'
      : countryName === 'KE'
      ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KE.svg'
      : countryName === 'UG'
      ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UG.svg'
      : countryName === 'GH'
      ? 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GH.svg'
      : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg';

  const inputPlaceHolder =
    countryName === 'NG'
      ? '+234XXXXXXXXXX or 0XXXXXXXXXX'
      : countryName === 'KE'
      ? '+254XXXXXXXXX or 0XXXXXXXXX'
      : countryName === 'UG'
      ? '+256XXXXXXXXX or 0XXXXXXXXX'
      : countryName === 'GH'
      ? '+233XXXXXXXXX or 0XXXXXXXXX'
      : '+27XXXXXXXXX or 0XXXXXXXXX';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10 || phoneNumber.length < 11) {
      toast.error('Phone Number is too short.', {
        className:
          'border border-red-300 bg-red-50 text-sm px-1  rounded-lg mx-[4rem] my-[2rem] sm:mx-0',
        hideProgressBar: true,
        closeButton: false,
      });
    } else {
      navigate('/pin');
    }
  };

  const handleChange = (e) => {
    setErrorMsg('');
    const name = e.target.name;
    const value =
      name === 'phoneNumber'
        ? e.target.value.replace(/\D/g, '')
        : e.target.value;

    // .replace(/\D/g, '')
    dispatch(handleColor({ name, value }));
  };
  // container !mt-[1rem] md:pt-[5rem]   flex  flex-col items-center justify-center py-12 lg:py-[2rem] xl:pt-0
  return (
    <div className="flex flex-col justify-between min-h-screen w-full'">
      <Navbar />
      <Wrapper className=" z-50 ">
        <motion.div
          className="relative flex items-center justify-center w-full gap-4 p-4 xl:!py-[5rem]"
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
            <form action="" className="w-full" onSubmit={handleSubmit}>
              <div className="">
                <h2 className="text-2xl font-bold ">Welcome Back</h2>
                <p>Please, enter your phone number to login</p>
              </div>

              <FormSelectInput
                nameOfCountry="countryName"
                country={country}
                phoneName="phoneNumber"
                phoneVal={phoneNumber}
                handleChange={handleChange}
                countryFlag={countryFlag}
                countryVal={countryName}
                inputPlaceHolder={inputPlaceHolder}
                errorMsg={errorMsg}
                labelText="Phone number"
              />
              <button
                className="!w-full bg-teal-600 text-xl font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center mb-[1rem]"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </motion.div>
      </Wrapper>
      <Footer />
    </div>
  );
};
export default Login;

const Wrapper = styled.div`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
  .phoneInput {
    align-items: center;
    display: flex;
  }

  .PhoneInputCountryIcon--border {
    background-color: rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.5);
  }

  .PhoneInputCountrySelectArrow {
    border-bottom-width: 2px;
    border-color: currentColor;
    border-left-width: 0;
    border-right-width: 2px;
    border-style: solid;
    border-top-width: 0;
    content: '';
    display: block;
    height: 0.45em;
    margin-left: 0.35em;
    opacity: 0.45;
    transform: rotate(45deg);
    width: 0.45em;
  }
`;
