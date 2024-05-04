import styled from 'styled-components';
import { Content, Card, Navbar, Footer } from '../components';
import { closeColorPalette, loginCont } from '../features/contSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const Landing = () => {
  const { colorPalette } = useSelector((store) => store.contState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginCont(true));
  }, []);
  return (
    <Wrapper className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div
        onClick={(e) => {
          e.target.id !== 'excludedElement'
            ? colorPalette
              ? dispatch(closeColorPalette())
              : null
            : null;
        }}
      >
        {/* <img
          src="https://makecards.co/static/media/bg.5d37529d9c1911edd3df9b274733cd95.svg"
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-[-20]"
        /> */}
        <div className="z-50">
          {/* container relative flex-col items-center mx-auto lg:flex-row justify-between gap-y-8 gap-x-28 max-w-7xl z-60 pt-12 lg:pt-0 */}
          <div className="container relative flex flex-col items-center mx-auto lg:flex-row justify-between gap-y-8 gap-x-28 max-w-7xl z-60 pt-12 lg:pt-0">
            <Content />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
export default Landing;

const Wrapper = styled.div`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
`;
