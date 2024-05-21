import { FormSelectInput } from '../components';
import { country } from '../custom.jsx/data';
import styled from 'styled-components';
import { handleColor } from '../features/contSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Input from '../DashboardComponent/Input';
import { modalHandler, changeView } from '../features/register';
import OTPModal from './OTPModal';
import SubmitBtn from './SubmitBtn';
import { toast } from 'react-toastify';

const KycRegForm = ({ isModalOpen, viewID }) => {
  const { phoneNumber, countryName, email, nickname, OTP } = useSelector(
    (store) => store.contState
  );
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState('');
  // const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10 || phoneNumber.length < 11) {
      toast.error('Phone Number is too short.', {
        className:
          'border border-red-300 bg-red-50 text-sm px-1  rounded-lg mx-[4rem] my-[2rem] sm:mx-0',
        hideProgressBar: true,
        closeButton: false,
      });
    } else if (OTP.length === 6) {
      dispatch(changeView(2));
    } else {
      dispatch(modalHandler());
      toast.success('Use "2-4-5-6-7-8" for the OTP.', {
        className:
          'border border-teal-500 bg-teal-50 text-sm px-1  rounded-lg mx-[4rem] my-[2rem] sm:mx-0',
        hideProgressBar: true,
        closeButton: false,
      });
    }
  };

  const handleChange = (e) => {
    setErrorMsg('');
    const name = e.target.name;
    console.log(name);
    const value =
      name === 'phoneNumber'
        ? e.target.value.replace(/\D/g, '')
        : e.target.value;

    // .replace(/\D/g, '')
    dispatch(handleColor({ name, value }));
  };

  return (
    <div
      className={`z-20 flex items-center justify-center center1 px-4 lg:py-10
      `}
      // style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 8px 16px' }}
    >
      <Wrapper
        action=""
        className={`flex flex-col-reverse items-center justify-center w-full gap-20 lg:flex-row ${
          !isModalOpen && viewID === 1
            ? 'visible slide-in '
            : 'slide-out hidden'
        } `}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start w-full max-w-lg p-6 bg-white rounded-lg shadow-lg lg:p-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold capitalize lg:text-2xl">
              Hi {nickname},
            </h2>
            <p className="text-[#9CA1A5] text-sm">
              Enter your phone number and email address.
            </p>
          </div>

          <div className="flex flex-col gap-10 pb-6 pt-6 px-2 w-full">
            <FormSelectInput
              nameOfCountry="countryName"
              country={country}
              phoneName="phoneNumber"
              phoneVal={phoneNumber}
              handleChange={handleChange}
              countryFlag={countryFlag}
              countryVal={countryName}
              inputPlaceHolder="Enter phone number"
              errorMsg={errorMsg}
            />

            <Input
              type="email"
              name="email"
              value={email}
              placeholder="example.com"
              logo={true}
              handleChange={handleChange}
            />
          </div>
          <SubmitBtn text="Submit" />
        </div>
      </Wrapper>
      {isModalOpen && <OTPModal />}
    </div>
  );
};
export default KycRegForm;

const Wrapper = styled.form`
  .phoneInput {
    align-items: center;
    display: flex;
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
    height: 0.4em;
    margin-left: 0.35em;
    opacity: 0.45;
    transform: rotate(45deg);
    width: 0.4em;
  }
`;
