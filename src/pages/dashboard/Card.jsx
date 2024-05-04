import styled from 'styled-components';
import { Cards } from '../../DashboardComponent';

const Card = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="mb-[3rem] mt-4">
          <p className="text-[#65696b] font-bold text-[1rem] mb-[2rem]">
            Select a card to see complete details.
          </p>
          <Cards />
        </div>
      </div>
    </Wrapper>
  );
};
export default Card;

const Wrapper = styled.main`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
  .shadow {
    background: #ffffff;
    box-shadow: hsla(0, 0%, 8.627450980392156%, 0.04) 0px 4px 16px;
    border-radius: 12px;
  }
`;
