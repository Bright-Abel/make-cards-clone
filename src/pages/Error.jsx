import { useRouteError, Link } from 'react-router-dom';
import img from './../assets/error.svg';
import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Error = () => {
  const error = useRouteError();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      // easing: 'ease-in-sine',
      anchorPlacement: 'center-bottom',
    });
  }, []);

  if (error.status === 404) {
    return (
      <Wrapper className="grid place-items-center min-h-[100vh] px-8">
        <div className="text-center">
          <img
            src={img}
            alt=""
            className="w-1/2 mx-auto"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
          <h1
            className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl"
            data-aos="zoom-in-right"
            data-aos-delay="400"
          >
            Page not found
          </h1>
          <p
            className="mt-6 text-lg leading-7 "
            data-aos="zoom-in-left"
            data-aos-delay="400"
          >
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 ">
            <Link
              to="/dashboard"
              className="border border-teal-500 px-4 py-2 rounded-lg text-emerald-500 buttonNew"
            >
              Go back home
            </Link>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};
export default Error;

const Wrapper = styled.main`
  .buttonNew {
    background-image: linear-gradient(to right, #d1fae5 50%, transparent 50%);
    background-position: 100% 0%;
    background-size: 200% 100%;
    transition: 1s;
  }
  .buttonNew:hover {
    background-position: 0% 100%;
    border-color: #fff;
    opacity: 0.7;
  }
`;
