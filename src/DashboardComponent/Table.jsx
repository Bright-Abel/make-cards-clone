import { useSelector, useDispatch } from 'react-redux';
import { BsCreditCard } from 'react-icons/bs';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const Table = () => {
  const { payment } = useSelector((store) => store.dashSlice);
  return (
    <Wrapper>
      <div className="ant-table-content" style={{ overflow: 'auto hidden' }}>
        <table
          style={{
            width: 'auto',
            minWidth: '100%',
            tableLayout: 'auto',
          }}
        >
          <thead className="ant-table-thead">
            <tr>
              <th className="ant-table-cell" style={{ textAlign: 'left' }}>
                Merchant
              </th>
              <th
                className="ant-table-cell ant-table-column-sort ant-table-column-has-sorters"
                style={{ textAlign: 'left' }}
              >
                Date
              </th>
              <th
                className="ant-table-cell ant-table-column-sort"
                style={{ textAlign: 'right' }}
              >
                Amount (NGN)
              </th>
              <th className="ant-table-cell" style={{ textAlign: 'right' }}>
                segun
              </th>
            </tr>
            <tbody className="ant-table-tbody">
              {payment.map((paymentHistory) => {
                const { id, merchant, amountInNaira, timeStamp } =
                  paymentHistory;
                return (
                  <tr
                    key={id}
                    className="ant-table-row ant-table-row-level-0 !bg-[#F8F8F8]"
                  >
                    <td
                      className="flex gap-3 items-center"
                      // style={{ textAlign: 'left' }}
                    >
                      <div className="w-8 h-8  p-2 bg-[#027A48] rounded-full grid place-content-center text-white">
                        <BsCreditCard />
                      </div>
                      <p className="font-medium truncate">
                        {merchant.split(' ')[0]}
                      </p>
                    </td>

                    <td
                      className="ant-table-cell"
                      // style={{ textAlign: 'left' }}
                    >
                      {amountInNaira}
                    </td>

                    <td
                      className="ant-table-cell"
                      // style={{ textAlign: 'right' }}
                    >
                      {timeStamp}
                    </td>

                    <td
                      className="ant-table-cell"
                      // style={{ textAlign: 'right' }}
                    >
                      <IoIosArrowForward />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </thead>
        </table>
      </div>
    </Wrapper>
  );
};
export default Table;

const Wrapper = styled.article`
  .ant-table-wrapper {
    clear: both;
    max-width: 100%;
  }
  .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before {
    background-color: rgba(0,0,0,.06);
    content: "";
    height: 1.6em;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .3s;
    width: 1px
}
  .ant-table-wrapper:before {
    content: '';
    display: table;
  }
  .ant-table-wrapper:after {
    clear: both;
    content: '';
    display: table;
  }

  ////
  .ant-spin-nested-loading {
    position: relative;
  }
  /////
  .ant-spin-container {
    position: relative;
    transition: opacity 0.3s;
  }
  //////

  .ant-table {
    background: #fefefe;
  }

  .ant-table {
    font-feature-settings: 'tnum';
    background: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .ant-table table {
    border-collapse: initial;
    border-radius: 2px 2px 0 0;
    border-spacing: 0;
    text-align: left;
    width: 100%;
  }

  .ant-table-container {
    border-top-right-radius: 2px;
  }
  .ant-table .ant-table-container:after,
  .ant-table .ant-table-container:before {
    bottom: 0;
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: box-shadow 0.3s;
    width: 30px;
    z-index: 4;
  }
  .ant-spin-container:after {
    background: #fff;
    bottom: 0;
    content: "";
    display: none\9;
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .3s;
    width: 100%;
    z-index: 10
}
`;
