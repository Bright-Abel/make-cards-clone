import styled from 'styled-components';
import { DashBoard } from '.';
import { DashboardNav, SideBar, SmallScreenSideBar } from '../../components';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FundCardAside } from '../../DashboardComponent';
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
