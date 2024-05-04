import styled from 'styled-components';
import {
  Footer,
  Navbar,
  UseCaseCardCreation,
  UseCaseCircle,
  UseCaseScroll,
  UsecaseHero,
} from '../components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginCont } from '../features/contSlice';

const UseCases = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginCont(true));
  }, []);
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Navbar color="#F9FAFB" />
      <div className="bg-[#F9FAFB] ">
        <UsecaseHero />
      </div>
      {/* my-0 mx-[80rem] px-[1.25rem] md:px-[1.5rem] lg:px-[2rem] */}
      <Wrapper>
        <div className="container gap-24  py-20 ">
          <UseCaseScroll />
          <UseCaseCircle />
          <UseCaseCardCreation />
        </div>
      </Wrapper>
      <Footer />
    </main>
  );
};
export default UseCases;
const Wrapper = styled.div`
  .container {
    margin: 0 auto;
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
