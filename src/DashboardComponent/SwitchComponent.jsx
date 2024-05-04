import Switch from 'react-switch';
import { checkedTrue } from '../features/dashBoardSlice';
import { useSelector, useDispatch } from 'react-redux';
const SwitchComponent = () => {
  const { checked } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(checkedTrue());
  };
  return (
    <div>
      <Switch onChange={handleChange} checked={checked} />
    </div>
  );
};
export default SwitchComponent;
