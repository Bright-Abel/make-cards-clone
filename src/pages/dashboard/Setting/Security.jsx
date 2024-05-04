import {
  BlockCard,
  LoginUpdate,
  SecuritySection,
} from '../../../DashboardComponent';
import { useSelector, useDispatch } from 'react-redux';
import {
  securityIdDispalyChange,
  securityIdDispalyChangeToFalse,
} from '../../../features/dashBoardSlice';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
const Security = () => {
  const { securityID, displaySecurity } = useSelector(
    (store) => store.dashSlice
  );
  const [pageWidth, setPageWidth] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const updateWidths = () => {
      const screenWidth = window.innerWidth;

      //  logic for adjusting stroke and trail width
      if (screenWidth >= 320 && screenWidth <= 480) {
        setPageWidth(true);
        dispatch(securityIdDispalyChangeToFalse());
      } else {
        setPageWidth(false);
        dispatch(securityIdDispalyChange(1));
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
    <main className="flex flex-col gap-x-8 gap-y-6 lg:flex-row relative">
      <SecuritySection pageWidth={pageWidth} />

      {displaySecurity ? (
        <button
          type="button"
          className="lg:hidden flex items-center gap-3"
          onClick={() => dispatch(securityIdDispalyChangeToFalse())}
        >
          <span>
            <IoIosArrowBack />
          </span>
          Back to KYC information
        </button>
      ) : null}

      {displaySecurity ? (
        securityID == 1 ? (
          <LoginUpdate />
        ) : securityID == 2 ? (
          <BlockCard />
        ) : null
      ) : null}
    </main>
  );
};
export default Security;
