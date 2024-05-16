import { paymentData } from '../custom.jsx/data';
import { Table } from 'antd';
import MerchantLogo from './MerchantLogo';
import { GoDotFill } from 'react-icons/go';
const TransactionTable = () => {
  const customStyles = {
    // Custom styles for the OK button in the filter dialog
    '.ant-table-filter-dropdown-btns .ant-btn-primary': {
      backgroundColor: '#ff9900',
      borderColor: '#ff9900',
      color: '#fff',
      // Additional styles as needed
    },
  };
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
      width: 200,
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
      title: 'PAYMENT TYPE',
      dataIndex: 'paymentType',
      width: 160,

      filters: [
        { text: 'debit', value: 'debit' },
        { text: 'credit', value: 'credit' },
      ],
      onFilter: (value, record) => record.paymentType.startsWith(value),
      filterSearch: true,
    },

    {
      title: 'STATUS',
      dataIndex: 'status',
      width: 160,
      render: (text, record) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ marginRight: '5px', order: '2' }}>{text}</span>
          <span className="text-gray-400 text-xs flex items-center justify-center gap-1">
            <GoDotFill
              className={`${
                text === 'Successful'
                  ? 'text-emerald-900'
                  : text === 'Pending'
                  ? 'text-[#e9b949]'
                  : 'text-[#d66a6a]'
              }`}
            />
          </span>
        </div>
      ),

      filters: [
        { text: 'Pending', value: 'Pending' },
        { text: 'Failed', value: 'Failed' },
        { text: 'Successful', value: 'Successful' },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
    },
  ];

  return (
    <div className="hidden md:block">
      <Table
        className="font-semibold text-teal-900 cursor-pointer"
        columns={columns}
        dataSource={paymentData}
        style={customStyles}
      />
    </div>
  );
};
export default TransactionTable;
