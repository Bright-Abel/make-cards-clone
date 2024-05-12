import styled from 'styled-components';
import { toast } from 'react-toastify';
import { DashboardNav, SideBar, SmallScreenSideBar } from '../../components';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FundCardAside } from '../../DashboardComponent';
import { redirect } from 'react-router-dom';

export const loader = (store) => () => {
  const phoneNumber = store.getState().contState.phoneNumber;
  const pin = store.getState().contState.pin;

  if (!phoneNumber && !pin) {
    toast.error(
      'You must login or create an account before you can access the dashboard',
      {
        className:
          'border border-red-300 bg-red-50 text-sm px-1 rounded-lg mx-[2rem] my-[2rem] sm:mx-0',
        hideProgressBar: true,
        closeButton: false,
      }
    );
    return redirect('/');
  }

  return null;
};

const SharedLayout = () => {
  const { fundCardAside } = useSelector((store) => store.dashSlice);
  console.log(fundCardAside);
  return (
    <Wrapper>
      <SmallScreenSideBar />
      <div className="dashboard relative">
        <SideBar />
        <div>
          <DashboardNav />
          <div
            className={`dashboard-page  pt-2  pb-10 bg-gray-200 ${
              fundCardAside ? 'overflow-hidden' : 'overflow-auto'
            }`}
          >
            <Outlet className="" />
          </div>
        </div>
      </div>
      <FundCardAside />
    </Wrapper>
  );
};
export default SharedLayout;

const Wrapper = styled.main`
  .dashboard-page {
    /* width: 90vw; */
    min-height: calc(100vh - 4rem);
  }
  .modal {
    backdrop-filter: blur(2px);
  }
  @media (min-width: 1280px) {
    .dashboard {
      display: grid;
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      /* width: 90%; */
    }
  }
`;
