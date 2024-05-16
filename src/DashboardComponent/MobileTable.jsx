import { useSelector, useDispatch } from 'react-redux';
import MerchantLogo from './MerchantLogo';
import { GoDotFill } from 'react-icons/go';
import {
  paymentInfoDisplay,
  paymentInfoSideBar,
} from '../features/dashBoardSlice';
import { paymentData } from '../custom.jsx/data';
import { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const MobileTable = ({ payment, infoPerPage }) => {
  // const { payment } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    const myPayment = paymentData.filter((item) => item.id === id);
    dispatch(paymentInfoDisplay(myPayment));
    dispatch(paymentInfoSideBar());
  };
  // PAGINATION
  const [pageNumber, setPageNumber] = useState(0);

  const pageVisited = pageNumber * infoPerPage;

  const displayInfo = payment
    .slice(pageVisited, pageVisited + infoPerPage)
    .map((item) => {
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
    });

  const numberOfPages = Math.ceil(payment.length / infoPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Wrapper className="px-4 md:hidden bg-white rounded-lg flex flex-col gap-10">
      <div className="">{displayInfo}</div>

      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={numberOfPages}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'disabledBttn'}
        activeClassName={'active'}
      />
    </Wrapper>
  );
};
export default MobileTable;

const Wrapper = styled.div`
  .paginationBttns {
    /* width: 80%; */
    height: 40px;
    display: flex;
    justify-content: right;
    /* gap: 10px; */
  }
  .previous a,
  .next a {
    margin-right: 1rem;
    margin-left: 1rem;
    border: 1px solid #d1d5db;
    background: transparent !important;
    border-radius: 5px;
  }

  .paginationBttns a {
    padding: 5px 7px;
    margin-top: 8px;
    background: #d1d5db;
  }

  .active a {
    background: #dce3ec;
    color: #fff;
  }
`;
