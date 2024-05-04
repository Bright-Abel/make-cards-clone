import styled from 'styled-components';
import Navlinks from './Navlinks';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { LiaPowerOffSolid } from 'react-icons/lia';

const SideBar = () => {
  return (
    <Wrapper>
      <div
        className={`hidden xl:block bg-stone-50 min-h-screen h-full w-[290px] text-sm `}
      >
        <div
          className="flex flex-col justify-between min-h-screen sticky top-0"
          id="content"
        >
          <div className="">
            <Link to="/dashboard" className="ml-6 mb-8 " end>
              <img
                src="https://makecards.co/static/media/logo.53f8e5ec3df0c5d0467bcc02018b6e52.svg"
                alt="MakeGoCards logo"
                className="w-12 lg:w-16 ml-10 mt-7 mb-10"
              />
            </Link>

            <Navlinks />
          </div>

          <div className="">
            <hr className="bg-[#EAECF0]  "></hr>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active ' : 'nav-link'
              }
            >
              <span className="icon pt-2">
                <LiaPowerOffSolid />
              </span>
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.main`
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

  /* @media (max-width: 1279px) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 280px;
      z-index: 50;
      display: block;
      min-height: 100vh;
      height: 100%;
      transition: all linear 2s;
      background: white;
      transform: translateX(-100%);
    }

    .show-sidebar {
      transform: translateX(0);
    }
  } */
`;
