import styled from 'styled-components';
import {
  Navbar,
  PolicyHero,
  PrivacyAside,
  PrivacyAsideBody,
} from '../components';
import { loginCont } from '../features/contSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { privacyPolicyLink, privacyPolicyLinkBody } from '../custom.jsx/data';

const PrivacyPolicy = () => {
  const [activeLink, setActiveLink] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginCont(true));

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.02;
      console.log(threshold);
      privacyPolicyLinkBody.forEach((link) => {
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
            title="Privacy Policy"
            details="Your privacy is important to us at Makecards. We respect your privacy regarding any information we may collect from you across our website."
          />
        </div>

        <div className="container relative !mt-20 flex items-start">
          <PrivacyAside linkHead={privacyPolicyLink} activeLink={activeLink} />

          <PrivacyAsideBody linkBody={privacyPolicyLinkBody} />
        </div>
      </Wrapper>
    </main>
  );
};

export default PrivacyPolicy;

const Wrapper = styled.div`
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
