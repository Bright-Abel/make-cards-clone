import styled from 'styled-components';
import { verificationLinks } from '../custom.jsx/data';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SettingNav = () => {
  const { switchState, isModalOpen } = useSelector((store) => store.dashSlice);
  return (
    <Wrapper>
      <ul className="cont !gap-x-4 lg:!gap-x-8 w-full  my-8">
        {verificationLinks.map((link) => {
          const { id, url, text } = link;
          return (
            <NavLink
              key={id}
              to={url}
              className={({ isActive }) =>
                isActive && !isModalOpen
                  ? ' link text-sm md:text-base active !z-10'
                  : isActive && isModalOpen
                  ? '!z-0'
                  : 'link text-sm md:text-base '
              }
              end
            >
              {/*  */}
              {text}
            </NavLink>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export default SettingNav;

const Wrapper = styled.div`
  .cont .active {
    background-color: transparent;
    border-bottom: 3px solid #1c9b88;
    color: #1c9b88 !important;
    font-weight: 700;
    opacity: 1 !important;
    z-index: 1;
  }

  .cont:after {
    background: #ededed;
    bottom: 0;
    clear: both;
    content: '';
    display: block;
    height: 3px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  @media (max-width: 427px) {
    .cont:after {
      content: '';
      display: none;
    }
  }

  .cont {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: none;
    gap: 1.5rem;
    position: relative;
    width: 100%;
  }

  .cont .link {
    color: #65696b;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 0 3px 6px;
  }

  @media (max-width: 768px) {
    .cont .link {
      min-width: 4rem;
    }
  }
`;
