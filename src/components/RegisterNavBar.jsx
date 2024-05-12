import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { registerNavLink } from '../custom.jsx/data';
import { faqNavCol, loginCont } from '../features/contSlice';
import { useDispatch, useSelector } from 'react-redux';

const RegisterNavBar = () => {
  const { viewID, arrayID } = useSelector((store) => store.registerSlice);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <nav className="pt-8  lg:py-8 gap-y-6">
        <div className="container flex flex-wrap justify-between items-center">
          <NavLink to="/" className="items-center md:w-full md:max-w-[154px]">
            <img
              src="https://makecards.co/static/media/logo.53f8e5ec3df0c5d0467bcc02018b6e52.svg"
              alt="MakeGoCards logo"
              className="w-12 lg:w-16"
            />
          </NavLink>

          <ul className="w-full progress-steps lg:w-auto">
            {registerNavLink.map((link, index) => {
              const { id, text } = link;
              return (
                <li
                  key={id}
                  className={`step   ${
                    arrayID.includes(index + 1) ? 'step-primary' : null
                  } ${
                    index + 1 === viewID
                      ? ' !text-black active-step'
                      : 'after:!w-0 after:!h-0'
                  }`}
                >
                  {text}
                </li>
              );
            })}
          </ul>

          <div className={`text-teal-600 flex items-center`}>
            <NavLink
              onClick={() => dispatch(loginCont(false))}
              to="/login"
              className={`border border-teal-300  hover:bg-teal-100 px-6 py-2  rounded-[30px] text-md  duration-700 grid place-content-center`}
            >
              Login
            </NavLink>

            <NavLink
              to="/business"
              className={`text-md ml-[10px] lg:ml-[2rem] rounded-[30px] `}
            >
              Business
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default RegisterNavBar;
const Wrapper = styled.section`
  .progress-steps {
    counter-reset: step;
    display: inline-grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    overflow: hidden;
    overflow-x: auto;
  }

  .progress-steps .step-primary {
    color: #1c9b88;
    font-weight: 700;
  }

  .progress-steps .step-primary:after,
  .progress-steps .step-primary:before {
    background-color: #1c9b88 !important;
    color: #fff !important;
    font-weight: 600 !important;
  }

  .progress-steps .step {
    cursor: pointer;
    display: grid;
    font-size: 12px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-columns: auto;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-rows: 20px 1fr;
    min-width: 7rem;
    place-items: center;
    text-align: center;
  }

  .progress-steps .step.active-step {
    min-width: 7rem !important;
  }

  .progress-steps .step:after {
    border-radius: 9999px;
    counter-increment: step;
    display: grid;
    font-weight: 400;
    height: 11px;
    place-items: center;
    place-self: center;
    position: relative;
    width: 11px;
    z-index: 1;
  }

  .progress-steps .step:after,
  .progress-steps .step:before {
    background-color: #e1e2e2;
    content: '';
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .progress-steps .step:before {
    color: #a6adba;
    height: 0.25rem;
    margin-left: -100%;
    top: 0;
    width: 100%;
  }

  @media (max-width: 768px) {
    .progress-steps .step {
      grid-template-rows: 20px 1fr;
      min-width: 4rem;
    }

    .progress-steps .step:after {
      content: '';
      display: grid;
      grid-column-start: 1;
      grid-row-start: 1;
      height: 11px;

      position: relative;
      width: 11px;
      z-index: 1;
    }
  }
`;
