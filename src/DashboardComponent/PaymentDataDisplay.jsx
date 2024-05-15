import { useSelector } from 'react-redux';
import { GoDotFill } from 'react-icons/go';
import { BsCreditCard } from 'react-icons/bs';
const PaymentDataDisplay = () => {
  const { paymentInfo } = useSelector((store) => store.dashSlice);
  return (
    <div className="">
      {paymentInfo.map((payment) => {
        const {
          id,
          paymentType,
          status,
          reference,
          amountInNaira,
          amountInUSD,
          paymentMethod,
          merchant,
          currency,
          timeStamp,
        } = payment;
        return (
          <div key={id} className="flex flex-col gap-6">
            <div
              className={`${
                status === 'Successful'
                  ? 'bg-emerald-50'
                  : status === 'Pending'
                  ? 'bg-[#fcefc7]'
                  : 'bg-[#ffeeee]'
              } w-[40%] flex gap-1 py-2 rounded-[32px] justify-center items-center  font-bold ${
                status === 'Successful'
                  ? 'text-emerald-900'
                  : status === 'Pending'
                  ? 'text-[#e9b949]'
                  : 'text-[#d66a6a]'
              }`}
            >
              <GoDotFill />
              {status}
            </div>
            {/* 2 */}
            <div className="w-full flex justify-between items-center">
              <div
                className={`h-12 w-12 text-white flex justify-center items-center text-xl rounded-full ${
                  status === 'Successful'
                    ? 'bg-emerald-900'
                    : status === 'Pending'
                    ? 'bg-[#e9b949]'
                    : 'bg-[#d66a6a]'
                }`}
              >
                <BsCreditCard />
              </div>

              <div className="font-semibold">
                <h1
                  className={` ${
                    status === 'Successful'
                      ? 'text-emerald-900'
                      : status === 'Pending'
                      ? 'text-[#e9b949]'
                      : 'text-[#d66a6a]'
                  } text-[1.2rem] font-bold`}
                >
                  <span className="text-[1.5rem]">
                    {paymentType === 'credit' ? '+' : '-'}
                  </span>
                  {amountInNaira}
                </h1>
                <p>{timeStamp}</p>
              </div>
            </div>

            {/* 3 */}
            <div className="w-1/2 mx-auto bg-[#f3f4f6d3] flex items-center gap-3 py-3 justify-center rounded-[32px]">
              <img
                src="https://makecards.co/static/media/ng.0d0edb990f97d04a933dc18db24c7219.svg "
                alt="Nigeria Flag"
                className="w-[28px] h-[28px] object-cover rounded-full"
              />
              <span className="whitespace-nowrap font-bold text-lg">
                $1 = ₦1175.00
              </span>
            </div>

            {/* 4 */}
            <div className="text-sm flex justify-between items-center">
              <h1 className="text-gray-500">Payment Method</h1>
              <p className=" font-extrabold">{paymentMethod}</p>
            </div>

            {/* 5 */}
            <div className="text-sm flex justify-between items-center">
              <h1 className="text-gray-500 ">USD Equivalent</h1>
              <p className=" font-extrabold">{amountInUSD}</p>
            </div>

            {/* 6 */}
            <div className="text-sm flex justify-between items-center">
              <h1 className="text-gray-500 ">Reference</h1>
              <p className=" font-extrabold">{reference}</p>
            </div>

            {/* 7 */}
            <div className="text-sm flex justify-between items-center">
              <h1 className="text-gray-500 ">Merchant</h1>
              <p className=" font-extrabold">{merchant}</p>
            </div>

            {/* 8 */}
            <div className="text-sm flex justify-between items-center">
              <h1 className="text-gray-500 ">Currency</h1>
              <p className=" font-extrabold">{currency}</p>
            </div>

            {/* 9 */}
            <div className="text-sm flex justify-between items-center">
              <h1 className="text-gray-500 ">Status</h1>
              <p className=" font-extrabold">{status}</p>
            </div>

            {/* 10 */}
            <div className="text-sm flex justify-between items-center">
              <h1 className="text-gray-500 ">Time stamp</h1>
              <p className=" font-extrabold">{timeStamp}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PaymentDataDisplay;
