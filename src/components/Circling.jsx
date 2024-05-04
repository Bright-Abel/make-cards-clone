import styled from 'styled-components';

const Circling = () => {
  // 	https://makecards.co/static/media/africa.6d840ac19f260cc5228b13c0ca39436a.svg
  return (
    <Wrapper>
      <div className="circle-div">
        <div id="outer-circle" className="circle">
          <span className="text">
            <img
              src="https://makecards.co/static/media/kenya.c5f66beb8808a8b4f02416342c5202e0.svg"
              alt="kenya"
            />
            <span>KES</span>
          </span>
          <span className="text">
            <img
              src="	https://makecards.co/static/media/South-Africa.140aa05d116b0d6728ee38713dfb3ed9.svg"
              alt="SA"
            />
            <span>ZAR</span>
          </span>
        </div>
        <div id="inner-circle" className="circle">
          <span className="text">
            <img
              src="https://makecards.co/static/media/ng.0d0edb990f97d04a933dc18db24c7219.svg"
              alt="nigeria"
            />
            <span>NGN</span>
          </span>
          <span className="text">
            <img
              src="https://makecards.co/static/media/uganda.a7d6ec6ba74b6980134566d34f7a711c.svg"
              alt="uganda"
            />
            <span>UGX</span>
          </span>
          <span className="text">
            <img
              src="https://makecards.co/static/media/ghana.7c58c56e40c139224767a7e7d22cb900.svg"
              alt="Ghana"
            />
            <span>GHS</span>
          </span>
        </div>
        <img
          src="https://makecards.co/static/media/africa.6d840ac19f260cc5228b13c0ca39436a.svg"
          alt="Africa"
          id="inner-most-circle"
          className="circle"
          style={{ border: 'none' }}
        />
      </div>
    </Wrapper>
  );
};
export default Circling;

const Wrapper = styled.div`
  .circle-div {
    display: block;
    height: 20rem;
    /* margin-left: auto; */

    position: relative;

    width: 20rem;
  }

  @media (min-width: 1024px) {
    .circle-div {
      height: 30rem;
      width: 30rem;
    }
  }

  @keyframes rotateForward {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotateBackward {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  /* CIRCLE ONE */
  .circle-div .circle {
    border-radius: 50%;
    position: absolute;
    border: 1px dashed #14b8a6;
  }

  .circle-div .text {
    align-items: center;
    background-color: #fff;
    border-radius: 1.5rem;
    box-shadow: 0 0.625rem 1.875rem 0 rgba(42, 47, 86, 0.1);
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    padding: 8px 7px;
    position: absolute;
  }

  .circle-div .text img,
  .circle-div .text svg {
    border-radius: 1000px;
    height: 24px;
    object-fit: cover;
    width: 24px;
  }

  .circle-div .text span {
    font-weight: 600;
  }

  .circle-div #outer-circle {
    animation: rotateForward 65s linear infinite;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
  }

  .circle-div #outer-circle .text {
    animation: rotateBackward 65s linear infinite;
  }

  .circle-div #outer-circle .text:first-of-type {
    left: -1.56%;
    top: 23.7%;
  }

  .circle-div #outer-circle .text:nth-of-type(2) {
    right: 6.56%;
    top: 12.88%;
  }

  /* CIRCLE TWO */

  .circle-div #inner-circle {
    animation: rotateBackward 55s linear infinite;
    height: 71.25%;
    left: 14.375%;
    top: 14.375%;
    width: 71.25%;
    z-index: 10;
  }

  .circle-div #inner-circle .text {
    animation: rotationForward 55s linear infinite;
  }

  .circle-div #inner-circle .text:first-of-type {
    left: 39.47%;
    top: -4.65%;
  }

  .circle-div #inner-circle .text:nth-of-type(2) {
    bottom: 3.07%;
    right: 14.39%;
  }

  .circle-div #inner-circle .text:nth-of-type(3) {
    bottom: 25.3%;
    left: -5.58%;
  }

  .circle-div #inner-most-circle {
    height: 42.5%;
    left: 28.75%;
    top: 28.75%;
    width: 42.5%;
  }
`;
