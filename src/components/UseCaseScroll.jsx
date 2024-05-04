import styled from 'styled-components';
import { TiPointOfInterestOutline } from 'react-icons/ti';
import { useCases } from '../custom.jsx/data';
import Scroll from './Scroll';
const UseCaseScroll = () => {
  return (
    <Wrapper>
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-8">
        <div>
          <p className="text-teal-700">Dollar cards</p>
          <h2 className="my-5 text-2xl md:text-3xl font-medium">
            A better way to spend
          </h2>
          <p className="leading-relaxed">
            Create and customize your unique virtual dollar card which does not
            require you to visit any physical bank to own an account or do a lot
            of paperwork.
          </p>
          <ul className="pt-5 pl-8">
            {useCases.map((text, index) => {
              return (
                <li
                  key={index}
                  className="py-2 relative leading-normal flex items-center gap-2"
                >
                  <TiPointOfInterestOutline className="text-teal-500" /> {text}
                </li>
              );
            })}
          </ul>
        </div>
        <Scroll />
      </section>
    </Wrapper>
  );
};
export default UseCaseScroll;

const Wrapper = styled.main`
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  @media (min-width: 768px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;
