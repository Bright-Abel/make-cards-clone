import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { useEffect } from 'react';
import MerchantLogo from './MerchantLogo';
import { paymentData } from '../custom.jsx/data';
import {
  paymentInfoDisplay,
  paymentInfoSideBar,
} from '../features/dashBoardSlice';

const TableComp = () => {
  const { payment } = useSelector((store) => store.dashSlice);

  const dispatch = useDispatch();
  useEffect(() => {
    const firstPaymentDisplay = payment.filter(
      (item) => item.id === payment[0].id
    );
    dispatch(paymentInfoDisplay(firstPaymentDisplay));
  }, [payment]);

  const columns = [
    {
      title: 'MERCHANT',
      dataIndex: 'merchant',
      width: 200,
      render: (text, record) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ marginRight: '5px', order: '2' }}>{text}</span>
          <MerchantLogo />
        </div>
      ),
    },
    {
      title: 'DATE',
      dataIndex: 'timeStamp',
      // width: 250,
      sorter: {
        compare: (a, b) => {
          const numA = parseFloat(a.timeStamp.replace(/[^\d.]/g, ''));
          const numB = parseFloat(b.timeStamp.replace(/[^\d.]/g, ''));
          return numB - numA;
        },
      },
    },
    {
      title: 'AMOUNT (NGN)',
      dataIndex: 'amountInNaira',
      width: 160,
      sorter: {
        compare: (a, b) => {
          const numA = parseFloat(a.amountInNaira.replace(/[^\d.]/g, ''));
          const numB = parseFloat(b.amountInNaira.replace(/[^\d.]/g, ''));
          return numB - numA;
        },
      },
    },
    {
      title: '',
      dataIndex: 'logo',
      // width: 50,
    },
  ];

  const handleRowClick = (id) => {
    const myPayment = paymentData.filter((item) => item.id === id);
    dispatch(paymentInfoDisplay(myPayment));
    dispatch(paymentInfoSideBar());
  };

  return (
    <div className="hidden md:block">
      <Table
        className="font-semibold text-teal-900 cursor-pointer"
        columns={columns}
        dataSource={payment}
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleRowClick(record.id),
        })}
      />
    </div>
  );
};
export default TableComp;
