import { useSelector, useDispatch } from 'react-redux';
import PaymentDataDisplay from './PaymentDataDisplay';

const Payment = () => {
  const { paymentInfo } = useSelector((store) => store.dashSlice);
  return (
    <section className="bg-white py-8 md:!pt-4  md:!pb-14 md:px-4 rounded-xl w-[38%] hidden lg:block">
      <PaymentDataDisplay />
    </section>
  );
};
export default Payment;
