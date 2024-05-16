import { useSelector, useDispatch } from 'react-redux';
import MerchantLogo from './MerchantLogo';
import { GoDotFill } from 'react-icons/go';
import {
  paymentInfoDisplay,
  paymentInfoSideBar,
} from '../features/dashBoardSlice';
import { paymentData } from '../custom.jsx/data';

const MobileTable = ({ payment }) => {
  // const { payment } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    const myPayment = paymentData.filter((item) => item.id === id);
    dispatch(paymentInfoDisplay(myPayment));
    dispatch(paymentInfoSideBar());
  };
  return (
    <div className="px-4 block md:hidden bg-white rounded-lg">
      {payment.map((item) => {
        const { merchant, id, timeStamp, amountInNaira, status } = item;

        return (
          <div
            className="pb-2 pt-2 border-b border-gray-300 flex justify-between items-center cursor-pointer hover:bg-gray-100"
            key={id}
            onClick={() => handleClick(id)}
          >
            <div className=" flex items-center gap-3 py-2">
              <MerchantLogo />
              <div className="text-sm flex flex-col gap-1">
                <h1 className="font-bold">{merchant}</h1>
                <p className="text-gray-400 text-xs">{timeStamp}</p>
              </div>
            </div>

            <div className="text-sm flex flex-col gap-1">
              <h1 className="font-bold">{amountInNaira}</h1>
              <span className="text-gray-400 text-xs flex items-center justify-center gap-1">
                <GoDotFill
                  className={`${
                    status === 'Successful'
                      ? 'text-emerald-900'
                      : status === 'Pending'
                      ? 'text-[#e9b949]'
                      : 'text-[#d66a6a]'
                  }`}
                />{' '}
                {status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MobileTable;
