import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import FundCardSelect from './FundCardSelect';
import { fundCardAsideChange } from '../features/dashBoardSlice';
import FundCardSlick from './FundCardSlick';
import Slider from './FundSlide';
import FundSlide from './FundSlide';

const options = [
  {
    value: 'Dollar Card',
    label: 'Dollar Card',
  },
  {
    value: 'Naira Card',
    label: 'Naira Card',
  },
];

const currencyOptions = [
  {
    value: 'Nigeria Naira',
    label: 'Nigeria Naira',
  },

  {
    value: 'Ghanian Cedis',
    label: 'Ghanian Cedis',
  },

  {
    value: 'Kenyan Shillings',
    label: 'Kenyan Shillings',
  },

  {
    value: 'South Africa Shilling',
    label: 'South Africa Shilling',
  },

  {
    value: 'Uganda Shillings',
    label: 'Uganda Shillings',
  },
];
const FundCardAside = () => {
  const { fundCardAside } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();
  return (
    <main
      className={
        fundCardAside
          ? 'modal fixed top-0 right-0 w-full h-full ease-in-out duration-1000  bg-[rgba(18,27,25,0.63)] z-[700]'
          : ''
      }
    >
      <div className={fundCardAside ? 'fundAside show-sidebar' : 'fundAside'}>
        <div className="">
          <span
            onClick={() => dispatch(fundCardAsideChange())}
            className="flex justify-end text-[2rem] cursor-pointer"
          >
            <MdClose />
          </span>
          <div className="pb-10   ">
            <h1 className="font-bold text-[1.5rem]">Fund Your Card</h1>
            <p className="text-sm">
              Spend with ease. Credit your card to make a transaction.
            </p>
          </div>

          <form action="" className="w-full flex flex-col gap-8">
            <div className="">
              <label htmlFor="cardSelect" className="text-sm text-[#9CA1A5] ">
                Select card to fund
              </label>

              <FundCardSelect
                arr={options}
                name="cardSelect"
                defaultVal={options[0]}
                placeHolder="Select Card"
              />
            </div>

            <div className="">
              <label htmlFor="currency" className="text-sm text-[#9CA1A5] ">
                What currency are you funding with?
              </label>

              <FundCardSelect
                arr={currencyOptions}
                name="currency"
                placeHolder="Select Currency"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="amountToFund" className="text-[#9CA1A5] text-sm">
                Amount to Fund
              </label>

              <div className="bg-transparent w-full pb-2 outline-none border-b border-[#a4a9a1] focus-within:border-[#2FCFB7] flex gap-4 items-center pt-4">
                <h1 className="text-[#9CA1A5] font-bold text-md">USD</h1>
                <input
                  type="text"
                  name="amountToFund"
                  // value={value}
                  className="border-none outline-none w-full px-1  text-md"
                  placeholder="3.00"
                />
              </div>
              <span className="text-red-600 text-xs  text-right font-bold">
                Minimum amount is $3
              </span>
            </div>
          </form>

          {/* <FundCardSlick /> */}
          {/* <Slider /> */}
          <FundSlide />
        </div>
      </div>
    </main>
  );
};
export default FundCardAside;

const Wrapper = styled.div``;
