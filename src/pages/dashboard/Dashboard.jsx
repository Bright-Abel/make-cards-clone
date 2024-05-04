import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GoCreditCard } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import PaymentDisplay from '../../DashboardComponent/PaymentDisplay';
import { Cards } from '../../DashboardComponent';
import { fundCardAsideChange } from '../../features/dashBoardSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="px-5 lg:px-10 container mx-auto relative mt-4">
        <section>
          <div className="mb-[3rem]">
            <p className="text-[#65696b] font-bold text-[1rem] mb-[0.5rem]">
              Overview
            </p>

            <div className="shadow grid gap-y-4 grid-cols-1 lg:grid-cols-5 py-6 px-8 lg:place-items-center">
              <div className="flex justify-between items-center flex-row lg:flex-col lg:items-start w-full gap-y-2 gap-x-8 md:my-2 lg:my-0 flex-wrap">
                <h3>
                  Welcome, <span className="font-bold">Oluwasegun</span>
                </h3>
                <button
                  onClick={() => dispatch(fundCardAsideChange())}
                  className="flex gap-2 items-center justify-center text-teal-500 text-md text-primary hover:opacity-70 cursor-pointer font-semibold"
                >
                  Fund your card
                  <IoIosArrowRoundForward className="text-[1.6rem] text-current" />
                </button>
              </div>
              <div className="h-full w-[1px] border-l"></div>

              <div className="py-5 lg:py-0 border-y lg:border-y-0 flex items-center gap-6">
                <div className="grid rounded-full text-teal-500 bg-[#F1FFFD] p-4">
                  <GoCreditCard />
                </div>

                <div className="">
                  <h4 className="font-bold text-lg">1</h4>
                  <p>Active card</p>
                </div>
              </div>
              <div className="h-full w-[1px] border-l"></div>

              <div className=" py-0 flex items-center gap-6">
                <div className="rounded-full text-teal-500 bg-[#F1FFFD] p-4">
                  <GrTransaction />
                </div>
                <div className="">
                  <h4 className="font-bold text-lg">$1 = #1,348.30</h4>
                  <p>Exchange rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="mb-[3rem]">
            <p className="text-[#65696b] font-bold text-[1rem] mb-[0.5rem]">
              Cards
            </p>
            <Cards />
          </div>

          <PaymentDisplay />
        </section>
      </div>
    </Wrapper>
  );
};
export default Dashboard;

const Wrapper = styled.main`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
  .shadow {
    background: #ffffff;
    box-shadow: hsla(0, 0%, 8.627450980392156%, 0.04) 0px 4px 16px;
    border-radius: 12px;
  }
`;
