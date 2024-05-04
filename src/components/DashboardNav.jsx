import styled from 'styled-components';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sideBar } from '../features/dashBoardSlice';
import { CgMenuRightAlt } from 'react-icons/cg';
import { FaBarsStaggered } from 'react-icons/fa6';
import { BsPatchCheckFill } from 'react-icons/bs';

const DashboardNav = () => {
  const { isSidebarOpen } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="bg-white   py-4 z-20  px-5 lg:px-0 ">
        <div className=" xl:hidden container !px-0 md:!px-2 flex lg:!px-6 xl:!px-10 justify-between items-center">
          <NavLink to="" className=" ">
            <img
              src="https://makecards.co/static/media/logo.53f8e5ec3df0c5d0467bcc02018b6e52.svg"
              alt="MakeGoCards logo"
              className="w-12 lg:w-16 "
            />
          </NavLink>

          <button
            className="text-[2rem]  z-[500]"
            onClick={() => dispatch(sideBar())}
          >
            {isSidebarOpen ? <FaBarsStaggered /> : <CgMenuRightAlt />}
          </button>
        </div>

        <div className="hidden xl:flex gap-4 justify-end items-center pr-10">
          <div className="flex flex-col">
            <h2 className="flex justify-center items-center gap-2 text-black">
              Oluwasegun Ajibade
              <span>
                {/* <IoMdCheckmarkCircle className="text-teal-900" />
                 */}
                <BsPatchCheckFill className="text-teal-900" />
              </span>
            </h2>
            <small className="text-[12px] text-right text-zinc-400">
              abelbright120@gmail.com
            </small>
          </div>

          <div className="grid rounded-[40px] h-[40px] w-[40px] bg-teal-700 place-content-center text-white font-bold">
            <h2>OA</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardNav;
const Wrapper = styled.nav`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
  .slide-transition {
    transition: transform 0.3s ease; /* Apply transition to transform property */
  }

  .slide-transition svg:first-child {
    transform: translateX(0); /* Initial position for the first icon */
  }

  .slide-transition svg:last-child {
    transform: translateX(-100%); /* Initial position for the second icon */
  }

  .slide-transition.active svg:first-child {
    transform: translateX(100%); /* Slide the first icon out */
  }

  .slide-transition.active svg:last-child {
    transform: translateX(0); /* Slide the second icon in */
  }
`;
