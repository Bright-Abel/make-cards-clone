import { Outlet } from 'react-router-dom';
import { BlockCardModal, SettingNav } from '../../../DashboardComponent';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from '../../../features/dashBoardSlice';
import { toast } from 'react-toastify';
// import { blockCardSwitch } from '../../../features/dashBoardSlice';
import { switchStateChange, openModal } from '../../../features/dashBoardSlice';

const HomeLayout = () => {
  const { isModalOpen, blockCardReason } = useSelector(
    (store) => store.dashSlice
  );
  const dispatch = useDispatch();

  const handleMessage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (blockCardReason.length < 5) {
      toast.error(
        'Reason for blocking your card must at least be greater than 5 letters',
        {
          className: 'border border-red-300 bg-red-50 text-sm px-1',
          hideProgressBar: true,
          closeButton: false,
        }
      );
    } else {
      toast.success('You Card has been successfully blocked', {
        className: 'border border-teal-300 bg-teal-50 text-sm px-1',
        hideProgressBar: true,
        closeButton: false,
      });
      dispatch(switchStateChange(true));
      dispatch(openModal());
    }
  };
  return (
    <Wrapper>
      <SettingNav />
      <div className="">
        <Outlet />
      </div>

      {isModalOpen && (
        <BlockCardModal
          dispatch={dispatch}
          blockCardReason={blockCardReason}
          handleMessage={handleMessage}
          handleSubmit={handleSubmit}
        />
      )}
    </Wrapper>
  );
};
export default HomeLayout;
const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 2.8rem;
  width: 100%;
  .modal {
    backdrop-filter: blur(2px);
  }
`;
