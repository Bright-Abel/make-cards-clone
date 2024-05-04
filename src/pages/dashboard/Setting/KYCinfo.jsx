import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { infoLink } from '../../../custom.jsx/data';
import { useDispatch, useSelector } from 'react-redux';
import { InfoKYCId, hideKYCinfo } from '../../../features/dashBoardSlice';
import { IoIosArrowBack } from 'react-icons/io';

import {
  UserPersonalInfo,
  MeansOfIdentity,
  ProofOfAddress,
} from '../../../DashboardComponent';
import { useEffect, useState } from 'react';
// import { InfoKYCId } from '../../../features/dashBoardSlice';

const KYCinfo = () => {
  const [pageWidth, setPageWidth] = useState(false);
  const { id, displayKYCInfo } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateWidths = () => {
      const screenWidth = window.innerWidth;

      //  logic for adjusting stroke and trail width
      if (screenWidth > 319 && screenWidth <= 480) {
        setPageWidth(true);
        dispatch(hideKYCinfo());
      } else {
        setPageWidth(false);
        dispatch(InfoKYCId(1));
      }
    };

    // Call the function initially and add event listener for window resize
    updateWidths();
    window.addEventListener('resize', updateWidths);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, []);
  return (
    <main className="lg:flex gap-8 lg:flex-row ">
      <section
        className={`bg-white rounded-[12px] px-10 py-6  lg:px-8 pt-6 pb-3  lg:w-[50%] w-full ${
          pageWidth && displayKYCInfo ? 'hidden' : 'block'
        }`}
      >
        <div className="">
          <h1 className="font-medium  md:text-xl text-lg text-[#383A3C]">
            KYC Information
          </h1>
          <p className="text-[#65696B] text-sm lg:text-md md:text-md">
            Complete verification to remove limit on your account.
          </p>
        </div>
        <div className="pt-4">
          {infoLink.map((link, index) => {
            const { id, text, status, logo, line } = link;
            //
            return (
              <div
                key={index}
                onClick={() => {
                  dispatch(InfoKYCId(id));
                }}
                className="cursor-pointer flex border-b-[0.2px] border-b-[#D5D5D5] last-of-type:border-b-0 pt-5 pb-5 hover:bg-[#F8F8F8] px-2 items-center justify-between "
              >
                <div className="flex flex-col">
                  <h2 className="text-sm mb-1 text-[16px] text-[#4D4F51]">
                    {text}
                  </h2>
                  <p className="text-xs text-[14px] text-[#767B7E] flex items-center gap-1">
                    {status === 'Completed' ? (
                      <>
                        <IoIosCheckmarkCircleOutline className="text-teal-500" />{' '}
                        {status}
                      </>
                    ) : (
                      <>
                        <FaRegCircleXmark className="text-red-500" /> {status}
                      </>
                    )}
                  </p>
                </div>
                <span className="text-teal-600 text-[1.6rem]">{logo}</span>
              </div>

              // <li className="bg-gray-300 w-full h-[1px]"></li>
            );
          })}
        </div>
      </section>
      {displayKYCInfo ? (
        <button
          type="button"
          className="lg:hidden flex items-center gap-3 my-3"
          onClick={() => dispatch(hideKYCinfo())}
        >
          <span>
            <IoIosArrowBack />
          </span>
          Back to KYC information
        </button>
      ) : null}

      {displayKYCInfo ? (
        id === 1 ? (
          <UserPersonalInfo />
        ) : id === 2 ? (
          <MeansOfIdentity />
        ) : id === 3 ? (
          <ProofOfAddress />
        ) : null
      ) : null}
    </main>
  );
};
export default KYCinfo;
