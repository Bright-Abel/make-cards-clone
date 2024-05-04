import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import links from '../custom.jsx/data';
import { useSelector, useDispatch } from 'react-redux';
import { loginCont } from '../features/contSlice';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Navbar = ({ color, textCol, borderCol }) => {
  const { isLogin, faqBgCol, useCaseCol } = useSelector(
    (store) => store.contState
  );
  const dispatch = useDispatch();

  // {`${
  // useCaseCol ? 'bg-[#F9FAFB]' : null
  // } pt-8  lg:py-8 gap-y-6 ${
  //   faqBgCol ? 'bg-teal-900 text-teal-50' : null #134e4a
  // }`}
  // console.log(color);
  return (
    <Wrapper color={color} textCol={textCol}>
      <nav className={`pt-8  lg:py-8 gap-y-6`}>
        <div className=" container flex flex-wrap justify-between items-center">
          <div>
            <NavLink
              to="/"
              className="items-center md:w-full md:max-w-[154px]"
              onClick={() => dispatch(loginCont(true))}
            >
              <img
                src="https://makecards.co/static/media/logo.53f8e5ec3df0c5d0467bcc02018b6e52.svg"
                alt="MakeGoCards logo"
                className="w-12 lg:w-16"
              />
            </NavLink>
          </div>

          <ul className=" justify-center items-center  font-medium !hidden md:!flex h-12">
            {links.map((link) => {
              const { id, url, text, line } = link;

              return (
                <>
                  <NavLink
                    key={id}
                    onClick={() => dispatch(loginCont(false))}
                    className={({ isActive }) =>
                      isActive
                        ? 'capitalize tracking-[0.1rem] p-[1rem] hover:text-teal-600 duration-500 text-teal-600'
                        : 'capitalize tracking-[0.1rem] p-[1rem] hover:text-teal-600 duration-500'
                    }
                    to={url}
                  >
                    {text}
                  </NavLink>
                  {line && <li className="bg-gray-300 w-[1px] h-8"></li>}
                </>
              );
            })}
          </ul>

          <div className="flex items-center justify-end ">
            <div
              className={`text-teal-700 flex items-center ${
                borderCol ? 'text-white' : null
              }`}
            >
              {isLogin ? (
                <NavLink
                  to="/login"
                  onClick={() => dispatch(loginCont(false))}
                  className={`border  hover:bg-teal-500 px-6 py-2  rounded-[30px] text-md  duration-700 grid place-content-center
                    
                  `}
                  style={{ borderColor: borderCol ? borderCol : '#0f766e' }}
                >
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="/"
                  onClick={() => dispatch(loginCont(true))}
                  className="border border-teal-500 hover:bg-teal-500 hover:text-white hover:border-none px-6 py-2  rounded-[30px] text-md  duration-1000 grid place-content-center whitespace-nowrap"
                >
                  Create Card
                </NavLink>
              )}
              <NavLink
                to="/business"
                onClick={() => dispatch(loginCont(true))}
                className={`text-md ml-[10px] lg:ml-[2rem] rounded-[30px] px-6 py-2 border
                `}
                style={{ borderColor: borderCol ? borderCol : 'transparent' }}
              >
                Business
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.main`
  /* background: ${(props) =>
    props.color ? `#${props.color}` : 'transparent'}; */
  background: ${({ color }) => (color ? color : 'transparent')};
  color: ${({ textCol }) => (textCol ? textCol : 'null')};
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
`;
