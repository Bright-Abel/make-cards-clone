import styled from 'styled-components';

import { Circle } from 'rc-progress';
import { CardRequest, Requirement } from '../../DashboardComponent';

const PhysicalCard = () => {
  return (
    <Wrapper>
      <div className="container ">
        <div className="shadow relative pb-[6rem] text-center mt-[2rem] pt-10 mb-4">
          <h1 className="font-bold text-xl">Check your eligibility.</h1>
          <p>Improve your rating score to request for a physical dollar card</p>
        </div>
        <div className="relative z-[400] ">
          <div className=" z-[1000] absolute shadow h-[10rem] w-[10rem] border  !rounded-[50%] -translate-y-[60%] -translate-x-[50%] left-[50%]">
            <Circle
              percent={56}
              strokeWidth={10}
              trailWidth={10}
              strokeColor="#0d9488"
              className="wrap"
            />
          </div>
          <div className="absolute -translate-y-[60%] -translate-x-[50%] left-[50%] text-center z-[1000]">
            <p className="text-[14px]">Rating Score</p>
            <h1 className="font-extrabold text-[1.6rem]">56%</h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-6 gap-x-3 mt-3">
          <Requirement />
          <CardRequest />
        </div>
      </div>
    </Wrapper>
  );
};
export default PhysicalCard;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding: 0 2.8rem;
    width: 100%;
  }
  .shadow {
    background: #ffffff;
    box-shadow: hsla(0, 0%, 8.627450980392156%, 0.04) 0px 4px 16px;
    border-radius: 12px;
  }

  .wrap {
    padding: 1rem;
    width: 100%;
    position: relative;
  }

  /* .cardRequest {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 15px;
  } */
  @media (min-width: 1024px) {
    .cardRequest {
      display: grid;
      grid-template-columns: 1fr 41.666667%;
      gap: 15px;
      /* 58.333333% */
    }
  }
`;
