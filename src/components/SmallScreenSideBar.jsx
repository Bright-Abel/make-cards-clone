import styled from 'styled-components';
import Navlinks from './Navlinks';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { LiaPowerOffSolid } from 'react-icons/lia';
import { sideBar } from '../features/dashBoardSlice';

const SmallScreenSideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sideBar());
  };
  return (
    <main
      // onClick={() => {
      //   dispatch(sideBar());
      // }}
      className={
        isSidebarOpen
          ? 'modal fixed top-0 left-0 w-full h-full block ease-in-out duration-1000 bg-[rgba(18,27,25,0.63)] z-[500] xl:hidden'
          : ''
      }
    >
      <div
        className={isSidebarOpen ? 'sidebar show-sidebar z-[800]' : 'sidebar'}
      >
        <Wrapper>
          <div className="flex flex-col justify-between  min-h-screen">
            <div className="">
              <Link
                to="/dashboard"
                className="ml-6  mb-7"
                end
                onClick={() => dispatch(sideBar())}
              >
                <img
                  src="https://makecards.co/static/media/logo.53f8e5ec3df0c5d0467bcc02018b6e52.svg"
                  alt="MakeGoCards logo"
                  className="w-12 lg:w-16 ml-10 mt-7 mb-4 sm:mb-14"
                />
              </Link>
              <Navlinks handleClick={handleClick} />
            </div>

            <div className="justify-end ">
              <hr className="bg-[#EAECF0]  "></hr>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active ' : 'nav-link'
                }
                onClick={() => dispatch(sideBar())}
              >
                <span className="icon pt-2">
                  <LiaPowerOffSolid />
                </span>
                Logout
              </NavLink>
            </div>
          </div>
        </Wrapper>
      </div>
    </main>
  );
};

export default SmallScreenSideBar;

const Wrapper = styled.div`
  .nav-links {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-700);
  }

  .nav-link:hover .icon {
    animation: icon 0.5s ease-in-out 1;
  }
  @keyframes icon {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-6deg);
    }
    50% {
      transform: rotate(6deg);
    }
    75% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .nav-link:hover .icon {
    color: var(--primary-500);
  }

  .icon {
    font-size: 1.2rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--primary-500);
    border-left: 7px solid var(--primary-600);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;
