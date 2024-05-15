import { useSelector, useDispatch } from 'react-redux';
const Pagination = () => {
  const { payment, numOfPages, page } = useSelector((store) => store.dashSlice);
  return <div>Pagination</div>;
};
export default Pagination;
