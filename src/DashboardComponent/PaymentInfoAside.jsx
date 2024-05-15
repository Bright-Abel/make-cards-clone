import { useSelector, useDispatch } from 'react-redux';
import { paymentInfoSideBar } from '../features/dashBoardSlice';
import { MdClose } from 'react-icons/md';
import PaymentDataDisplay from './PaymentDataDisplay';
const PaymentInfoAside = () => {
  const { paymentInfoAside, paymentInfo } = useSelector(
    (store) => store.dashSlice
  );

  const dispatch = useDispatch();
  return (
    <main
      className={
        paymentInfoAside
          ? 'modal fixed lg:hidden block  top-0 right-0 w-full h-full ease-in-out duration-1000  bg-[rgba(18,27,25,0.63)] z-[700]'
          : ''
      }
    >
      <div
        className={
          paymentInfoAside ? 'paymentAside show-sidebar' : 'paymentAside'
        }
      >
        <div className="">
          <span
            onClick={() => dispatch(paymentInfoSideBar())}
            className="flex justify-end text-[2rem] cursor-pointer z-[1000]"
          >
            <MdClose />
          </span>

          <PaymentDataDisplay />
        </div>
      </div>
    </main>
  );
};
export default PaymentInfoAside;
