import {
  PolicyHero,
  Navbar,
  PrivacyAside,
  PrivacyAsideBody,
} from '../components';
import { loginCont } from '../features/contSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  termsAndServiceKinkBody,
  termsAndServiceLink,
} from '../custom.jsx/data';

const TermsOfService = () => {
  const [activeLink, setActiveLink] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginCont(true));

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.02;

      termsAndServiceKinkBody.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && isElementInViewport(section, threshold)) {
          setActiveLink('#' + link.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el, threshold) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= threshold && rect.bottom >= threshold;
  };
  return (
    <main className="">
      <Navbar color="#F9FAFB" />
      <Wrapper>
        <div className="bg-[#F9FAFB]">
          <PolicyHero
            title="Terms of Service"
            details="This is a contract between you and Makecards. By creating an account on this website and using any of our services, you are deemed a user and agree to our Terms of Service."
          />
        </div>

        <div className="container relative !mt-20 flex items-start">
          <PrivacyAside
            linkHead={termsAndServiceLink}
            activeLink={activeLink}
          />

          <PrivacyAsideBody
            linkBody={termsAndServiceKinkBody}
            spanText=" Please take the time to read this document carefully before you
              access or use any of the Makecards services, as it forms a legally
              binding contract between you and Makecards."
            subText="This agreement is effective from the date you first access or use
            any of Makecards services and continues until terminated."
          />
        </div>
      </Wrapper>
    </main>
  );
};
export default TermsOfService;

const Wrapper = styled.section`
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding: 0 1.25rem;
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0 1rem;
    }
  }
`;
