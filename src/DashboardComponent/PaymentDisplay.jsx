import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeToCredit, changeToDebit } from '../features/dashBoardSlice';
import { paymentData } from '../custom.jsx/data';
import { useEffect } from 'react';
import Table from './Table';

const PaymentDisplay = () => {
  const { isCredit, payment } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();

  const debitPayment = paymentData.filter(
    (payment) => payment.paymentType === 'debit'
  );
  const creditPayment = paymentData.filter(
    (payment) => payment.paymentType === 'credit'
  );

  useEffect(() => {
    dispatch(changeToCredit(creditPayment));
  }, []);

  return (
    <Wrapper className="flex items-start gap-7 flex-col lg:flex-row">
      <div className="w-full lg:w-[67%]">
        <div className="bg-white py-8 md:py-4 px-0 md:px-4 rounded-xl w-full ">
          <div className="bg-[#F5F5F8] mb-6 ml-2 px-3 py-[6px] w-fit rounded-[32px] flex items-center gap-4">
            <button
              type="button"
              className={`${
                isCredit
                  ? 'btnTab w-28 lg:w-32 selected'
                  : 'btnTab w-28 lg:w-32'
              }`}
              onClick={() => dispatch(changeToCredit(creditPayment))}
            >
              credit
            </button>
            <button
              type="button"
              className={`${
                !isCredit
                  ? 'btnTab w-28 lg:w-32 selected'
                  : 'btnTab w-28 lg:w-32'
              }`}
              onClick={() => dispatch(changeToDebit(debitPayment))}
            >
              debit
            </button>
          </div>
          <Table />
        </div>
      </div>
    </Wrapper>
  );
};
export default PaymentDisplay;

const Wrapper = styled.article`
  .btnTab {
    border: none;
    background: transparent;
    display: grid;
    place-content: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    padding: 6px;
    line-height: 180%;
    color: #65696b;
    border-radius: 24px;
  }
  .btnTab.selected {
    background: #fff;
    color: #1c9b88;
  }
`;
