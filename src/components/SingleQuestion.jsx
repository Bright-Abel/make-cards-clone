import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import styled from 'styled-components';
// import { toggleQuestion } from '../features/contSlice';

const SingleQuestion = ({ id, info, title, activeID, toggleQuestion }) => {
  //   const { isActive, activeID } = useSelector((store) => store.contState);
  //   console.log('active', isActive);
  //   console.log('ID', activeID);

  const isActive = id === activeID;
  //   const dispatch = useDispatch();

  //   console.log('active', isActive);
  //   console.log('ID', activeID);

  return (
    <Wrapper>
      <article className=" hover:px-[1rem] duration-500 py-[.8rem] px-[1.5rem] border-2 mb-[2rem] rounded-[10px] bg-gray-50 text-slate-700  ">
        <header
          className={`flex justify-between items-center gap-[1rem] ${
            isActive ? 'pb-[1rem]' : 'pb-0'
          }`}
        >
          <h4 className="text-[.8rem] md:text-[1.2rem] font-semibold">
            {title}
          </h4>
          <button
            onClick={() => toggleQuestion(id)}
            className="bg-transparent border-transparent grid place-content-center "
          >
            {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </header>
        {info.map((myInfo, index) => {
          // if (isActive) {
          if (info.length > 1) {
            return (
              <>
                {isActive && (
                  <p className="para" key={index}>
                    <GoDotFill /> <span>{myInfo}</span>
                  </p>
                )}
              </>
            );
          }

          return <>{isActive && <p key={index}>{myInfo}</p>}</>;
        })}
      </article>
    </Wrapper>
  );
};
export default SingleQuestion;

const Wrapper = styled.section`
  .para {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    place-content: center;
  }
`;
