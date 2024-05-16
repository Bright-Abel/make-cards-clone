import {
  TableComp,
  MobileTable,
  TransactionTable,
} from '../../DashboardComponent';
import { paymentData } from '../../custom.jsx/data';

const Transactions = () => {
  return (
    <div className="px-8 py-4">
      {/* <TableComp /> */}
      <TransactionTable />
      <MobileTable payment={paymentData} infoPerPage={7} />
    </div>
  );
};
export default Transactions;
