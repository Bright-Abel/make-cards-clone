import Payment from './Payment';
import PaymentDisplay from './PaymentDisplay';

const PaymentInfo = () => {
  return (
    <div className="flex items-start gap-7 flex-col lg:flex-row">
      <PaymentDisplay />
      <Payment />
    </div>
  );
};
export default PaymentInfo;
