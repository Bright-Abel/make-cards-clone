import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../custom.jsx/data';
import {
  handleChange,
  handleColor,
  changeCardView,
} from '../features/contSlice';
import { FaCheck } from 'react-icons/fa';
import { TbRotate360 } from 'react-icons/tb';
import Color from './Color';
import MultiColor from './MultiColor';
import { useNavigate } from 'react-router-dom';
const Card = () => {
  const { nickname, color, isUserTyping, colorPalette } = useSelector(
    (store) => store.contState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getNickName = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const myCol = (e) => {
    const name = e.target.dataset.name;
    const value = e.target.dataset.color;
    // console.log(name, value);
    dispatch(handleColor({ name, value }));
  };
  const handleClick = () => {
    if (nickname.length > 2) {
      navigate('/register');
    }
  };
  return (
    <Wrapper>
      <main className=" relative w-full  anime md:w-auto">
        <div className="flex flex-col mx-auto lg:flex-row gap-y-4 gap-x-10 my-[3rem] md:my-0 md:mx-0">
          <Color />

          {/* CARD BACKGROUND COLOR CHANGING BUTTON */}
          <div className=" flex   items-center  gap-3  lg:mx-0 lg:flex-col md:justify-between">
            {colors.map((col, index) => {
              return (
                <div
                  key={index}
                  // className={`${color === col ? 'container ' : null}`}
                >
                  <div
                    href="#"
                    key={index}
                    data-name="color"
                    onClick={myCol}
                    data-color={col}
                    className={`${
                      color === col && !colorPalette
                        ? 'color-btn active '
                        : 'color-btn'
                    } `}
                    style={{ background: col }}
                  >
                    {color === col && !colorPalette ? <FaCheck /> : null}
                  </div>
                </div>
              );
            })}

            {/* MULTI-COLOR BACKGROUND CHANGING */}
            <div className="relative">
              <MultiColor />
            </div>

            {/* CARD ROTATION BUTTON */}
            <div className="relative">
              <div
                onClick={() => dispatch(changeCardView())}
                className="inline-grid bg-white rounded-full shadow-lg cursor-pointer w-14 h-14 place-items-center"
              >
                <TbRotate360 className="text-[2rem]" />
              </div>
            </div>
          </div>
        </div>

        {/* INPUT FIELD ON MOBILE VIEW */}
        <div className="!px-0 max-w-[434px]  mx-auto !my-8 lg:hidden">
          <div className="  !pr-0 flex  gap-6 py-0 flex-col">
            <input
              type="text"
              onChange={getNickName}
              name="nickname"
              value={nickname}
              placeholder="Enter Your Nickname"
              className=" bg-transparent   outline-none !px-3 !border-b border-b-[#CFDADC]  focus:border-b-teal-800 focus:border-b "
            />
            <button
              type="submit"
              onClick={handleClick}
              disabled={isUserTyping}
              className={`w-full px-5 bg-teal-600 whitespace-nowrap py-4  rounded-[32px] text-green-50 font-medium border-none ${
                isUserTyping ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Create Your Card
            </button>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Card;

const Wrapper = styled.main`
  .anime {
    animation: bounce 2s ease-in;
  }
  @keyframes bounce {
    0%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }

    50% {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      -webkit-transform: none;
      transform: none;
    }
  }
  .color-btn {
    border: 2px solid hsla(0, 0%, 100%, 0.5);
    border-radius: 50%;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    cursor: pointer;
    height: 2.9rem;
    padding: 5px;
    width: 2.9rem;
    display: grid;
    place-content: center;
    svg {
      font-size: 1.5rem;
      color: #dcfce7;
      /* font-weight: ; */
    }
  }
  .active {
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #05f;
    transition: none;
    width: calc(2.9rem - 2px);
  }

  .colorInput {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  .colorInput::-webkit-color-swatch {
    border-radius: 50%;
    /* border: 1px solid blue; */
  }
  .colorInput::-moz-color-swatch {
    border-radius: 50%;
    /* border: 1px solid blue; */
  }
`;
