// import { useEffect } from 'react';
// import { caseNavCol, faqNavCol2 } from '../features/contSlice';
// import { useDispatch } from 'react-redux';
import { policyLink } from '../custom.jsx/data';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PolicyHero = ({ title, details }) => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(faqNavCol2());
  //     dispatch(caseNavCol());
  //   }, []);

  return (
    <div className="text-center py-20 md:py-32 lg:py-24  mx-auto overflow-hidden text-[#2E2C34] px-4 ">
      <p className="text-teal-500">
        Last Updated: <b>23/12/2022</b>
      </p>

      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-normal text-[#2E2C34] tracking-tight md:leading-tight font-bold mt-4">
        {title}
      </h1>
      <p className="max-w-3xl mt-2 mx-auto text-[#667085] text-xl ">
        {details}
      </p>

      <div className=" pt-16">
        <ul className=" items-center justify-center gap-x-8 gap-y-2 bg-[#F2F4F7] inline-flex px-4 py-4  rounded-lg w-full lg:w-fit flex-col md:flex-row">
          {policyLink.map((link) => {
            const { id, text, url } = link;

            return (
              <Wrapper key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? 'w-full activeLink' : 'w-full'
                  }
                >
                  {text}
                </NavLink>
              </Wrapper>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default PolicyHero;

const Wrapper = styled.li`
  width: 100%;
  font-weight: 500;
  @media (min-width: 1024px) {
    width: fit-content;
  }
  .activeLink {
    background: rgb(255, 255, 255);
    box-shadow: rgba(16, 24, 40, 0.1) 0px 1px 3px,
      rgba(16, 24, 40, 0.06) 0px 1px 2px;
    border-radius: 9px;
    color: rgb(28, 155, 136);
    padding: 0.8rem 0.5rem;
  }
`;
