import { FaqsHero, Footer, Navbar, Questions } from '../components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginCont } from '../features/contSlice';
import styled from 'styled-components';

const Faqs = () => {
  const [activeID, setActiveID] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginCont(true));
  }, []);

  const toggleQuestion = (id) => {
    const newId = id === activeID ? null : id;
    setActiveID(newId);
  };
  return (
    <Wrapper className="flex flex-col justify-between min-h-screen">
      <Navbar color="#134e4a" textCol="#f0fdfa" borderCol="#ffffff" />
      <div className="bg-teal-900 text-teal-50">
        <FaqsHero />
      </div>
      <section className="container">
        <Questions activeID={activeID} toggleQuestion={toggleQuestion} />
      </section>
      <Footer />
    </Wrapper>
  );
};
export default Faqs;

const Wrapper = styled.main`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }
`;
