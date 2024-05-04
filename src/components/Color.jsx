import { useSelector } from 'react-redux';
import styled from 'styled-components';
import front from '../assets/frontCard.svg';
import back from '../assets/back.svg';
const Color = () => {
  const { nickname, color, isCardFront } = useSelector(
    (store) => store.contState
  );

  const cardBgColor =
    color === '#15803d'
      ? '#052e16'
      : color === '#1e40af'
      ? '#172554'
      : '#020617';
  return (
    <Wrapper>
      <section className=" flip-card">
        <div
          className={`flip-card-inner ${
            isCardFront === false ? 'backRotate' : null
          }`}
        >
          <div
            className="flip-card-front uppercase"
            style={{ background: color }}
          >
            <div className="relative">
              <img
                src="https://makecards.co/static/media/logo-white.6d119ed838528305f419488b6db412ea.svg"
                alt="make cards logo"
                className="absolute top-4 z-10 left-6 w-10 sm:w-14"
              />
              {/* <img src={front} alt="" className="" /> */}
              <svg
                width="434"
                height="274"
                className="w-full h-full"
                viewBox="0 0 434 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="434"
                  height="274"
                  rx="16"
                  className="bg-rect"
                  style={{ background: color }}
                  // style="fill: rgb(23, 61, 55);"
                ></rect>
                <path
                  d="M434 92C428.616 92 423.284 93.0605 418.31 95.1209C413.336 97.1814 408.816 100.201 405.009 104.009C401.201 107.816 398.181 112.336 396.121 117.31C394.06 122.284 393 127.616 393 133C393 138.384 394.06 143.716 396.121 148.69C398.181 153.664 401.201 158.184 405.009 161.991C408.816 165.799 413.336 168.819 418.31 170.879C423.284 172.939 428.616 174 434 174L434 92Z"
                  fill="#FFC700"
                ></path>
                <path
                  d="M195 74.5C195 68.1487 200.149 63 206.5 63H212C221.389 63 229 70.6112 229 80V86H206.5C200.149 86 195 80.8513 195 74.5Z"
                  fill="#FFC700"
                ></path>
                <path
                  d="M144 95H166.5C172.851 95 178 100.149 178 106.5C178 112.851 172.851 118 166.5 118H161C151.611 118 144 110.389 144 101V95Z"
                  fill="#FFC700"
                ></path>
                <path
                  d="M287 68H288C292.971 68 297 72.0294 297 77V81C297 83.7614 294.761 86 292 86C289.239 86 287 83.7614 287 81V68Z"
                  fill="#FFC700"
                ></path>
              </svg>
              <div className="absolute  top-[19px] md:-translate-y-[-214px] right-4 md:right-2 w-12 md:w-16">
                <img
                  src="	https://makecards.co/static/media/visa-white.28a2eac735936c5277f66691fef97381.svg"
                  alt=""
                />
              </div>
              {/* <div className="flex justify-between translate-y-[70px] md:translate-y-[140px]"> */}
              <p className="  bottom-4 absolute  left-2   max-w-[308px] calibri tracking-widest text-[12px] sm:text-sm uppercase font-medium text-white">
                {nickname === ''
                  ? "cardholder's name"
                  : nickname.length <= 28
                  ? nickname
                  : nickname.substring(0, 28) + '...'}
              </p>

              {/* <p className="">visa</p> */}
              {/* </div> */}
            </div>
          </div>

          <div
            className={`flip-card-back uppercase `}
            style={{ background: color }}
          >
            <div className="relative">
              <p className="absolute bottom-12 md:bottom-20 left-6 z-10 uppercase truncate max-w-[308px] calibri tracking-widest text-[12px] sm:text-base text-white">
                **** **** **** 2345
              </p>
              <p className="absolute bottom-6 md:bottom-10 left-6 z-10 uppercase truncate max-w-[308px] calibri tracking-widest text-[12px] sm:text-base text-white">
                VALID THRU 03/27
              </p>
              <svg
                width="434"
                height="274"
                className="w-full h-full"
                viewBox="0 0 434 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="bg-rect"
                  width="434"
                  height="274"
                  rx="16"
                  style={{ background: color }}
                ></rect>
                <rect
                  y="76"
                  width="38"
                  height="434"
                  transform="rotate(-90 0 76)"
                  fill="black"
                  fillOpacity="0.3"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Color;

const Wrapper = styled.main`
  .flip-card {
    background-color: transparent;
    height: 274px;
    margin: 0 auto;
    perspective: 1000px;
    width: 434px;
    /* max-width: 100%; */
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .backRotate {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 640px) {
    .flip-card,
    .flip-card-back,
    .flip-card-front {
      height: 206px;
      margin: 0 auto;
      max-width: 328px;
    }

    .flip-card-back svg,
    .flip-card-front svg {
      height: 206px;
      max-width: 328px;
    }
  }

  @media screen and (max-width: 440px) {
    .flip-card,
    .flip-card svg,
    .flip-card-back,
    .flip-card-back svg,
    .flip-card-front,
    .flip-card-front svg {
      max-width: 300px;
    }
  }
`;
