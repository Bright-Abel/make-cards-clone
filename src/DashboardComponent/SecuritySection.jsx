import { securityLink } from '../custom.jsx/data';
import SwitchComponent from './SwitchComponent';
import { useDispatch, useSelector } from 'react-redux';
import { PiEyeClosedLight } from 'react-icons/pi';
import { IoEyeOutline } from 'react-icons/io5';
import { securityIdDispalyChange } from '../features/dashBoardSlice';
import { useEffect } from 'react';
const SecuritySection = ({ pageWidth }) => {
  console.log(pageWidth);
  const { checked, securityId, displaySecurity } = useSelector(
    (store) => store.dashSlice
  );
  const dispatch = useDispatch();

  //   useEffect
  return (
    <section
      className={`bg-white rounded-[12px] px-10 py-6  lg:px-8 pt-6 pb-10  lg:w-[50%] ${
        pageWidth && displaySecurity ? 'hidden' : 'block'
      }`}
    >
      <div className="">
        <h1 className="font-medium  md:text-xl text-lg text-[#383A3C]">
          Security
        </h1>
        <p className="text-[#65696B] text-sm lg:text-md md:text-md">
          Manage your account settings. Update your login PIN and block your
          card(s).
        </p>
      </div>

      <div className="pt-4">
        {securityLink.map((link, index) => {
          const { id, text, logo } = link;
          return (
            <div
              key={index}
              onClick={() => {
                id < 3 ? dispatch(securityIdDispalyChange(id)) : null;
              }}
              className="cursor-pointer flex border-b-[0.2px] border-b-[#D5D5D5]  pt-5 pb-5 hover:bg-[#F8F8F8] px-2 items-center justify-between "
            >
              <h2 className="text-sm mb-1 text-[16px] text-[#4D4F51]">
                {!logo ? (
                  <span className="flex items-center gap-2">
                    {text}{' '}
                    {checked ? (
                      <IoEyeOutline className="text-xl" />
                    ) : (
                      <PiEyeClosedLight className="text-xl" />
                    )}
                  </span>
                ) : (
                  text
                )}
              </h2>

              <span className="text-teal-600 text-[1.6rem]">
                {logo ? logo : <SwitchComponent />}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default SecuritySection;
