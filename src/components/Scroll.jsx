import styled from 'styled-components';
import Scroller from './Scroller';

const Scroll = () => {
  return (
    <Wrapper>
      <div className="bg-[#F9FAFB] py-6 md:py-11 px-5 md:px-8 rounded-2xl w-full">
        <div className="bg-white w-full rounded-xl px-4 py-6 md:py-10 shadow">
          <div className="px-4 mb-6">
            <h5 className="text-[#101828] mb-3 text-lg md:text-xl">
              My transactions
            </h5>
            <hr />
          </div>
          <div className="scroll relative h-60">
            <div className="h-20  w-full bg-[#F8F8FC] rounded-lg"></div>
            <Scroller />
            <Scroller />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Scroll;

const Wrapper = styled.section`
  .shadow {
    filter: drop-shadow(rgba(0, 0, 0, 0.06) 0px 0px 32px);
  }
  .scroll {
    margin: auto;
    overflow: hidden;
    overflow-y: hidden;
    padding-bottom: 0.75rem;
    position: relative;
    scrollbar-width: none;
    width: 100%;
  }
`;
