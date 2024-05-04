import { Link } from 'react-router-dom';
import { footer } from '../custom.jsx/data';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      <hr className="bg-[#EAECF0]"></hr>
      <div className="flex py-6 md:py-8 text-sm font-medium text-center relative w-full items-center flex-col md:flex-row justify-between text-[#98A2B3] gap-y-5 z-[200]">
        <p className="">
          &copy; {new Date().getFullYear()}. Makecards.co. All Rights Reserved.
        </p>
        <div className=" flex items-center gap-4 lg:gap-6 relative flex-wrap text-sm justify-center lg:justify-start">
          {footer.map((foot) => {
            const { id, url, text } = foot;
            return (
              <Link key={id} to={url} className="hover:text-teal-600">
                {text}
              </Link>
            );
          })}
          <img
            src="	https://makecards.co/static/media/pcidss-square.64e07f76e904e8cc179b08c46c43cbd2.svg"
            alt="logo"
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
const Wrapper = styled.footer`
  position: relative;
  margin: 0 auto;
  max-width: 80rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;
`;
