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
import { cookieAndPolicyLink, cookiePolicyLinkBody } from '../custom.jsx/data';

const CookiePolicy = () => {
  const [activeLink, setActiveLink] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginCont(true));

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.02;
      console.log(threshold);
      cookiePolicyLinkBody.forEach((link) => {
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
            title="Cookie Policy"
            details="We respect your privacy regarding any information we collect from you across our website."
          />
        </div>

        <div className="container relative !mt-20 flex items-start">
          <PrivacyAside
            linkHead={cookieAndPolicyLink}
            activeLink={activeLink}
          />

          <PrivacyAsideBody linkBody={cookiePolicyLinkBody} />
        </div>
      </Wrapper>
    </main>
  );
};
export default CookiePolicy;
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
