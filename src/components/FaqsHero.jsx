import styled from 'styled-components';
import logo from '../assets/faq.svg';

const FaqsHero = () => {
  return (
    <Wrapper>
      <div className="align-element">
        <div className="hero  flex flex-col items-center py-[4rem] justify-center gap-[1rem] text-center align-element ">
          <h1 className="text-[2rem] md:text-[4rem]">
            Frequently Asked Questions
          </h1>
          <img src={logo} alt="" className="w-[8rem] md:w-[auto]" />
        </div>
      </div>
    </Wrapper>
  );
};
export default FaqsHero;

const Wrapper = styled.div`
  /* .hero {
    height: calc(70vh - 5rem);
  } */
`;
