import { IoMdCheckmarkCircle } from 'react-icons/io';
import logo from '../assets/mine.jpg';
import styled from 'styled-components';
const UserPersonalInfo = () => {
  return (
    <Wrapper>
      <section className="">
        <div className=" flex gap-2 items-center">
          <img
            src={logo}
            alt=""
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <h1>Oluwasegun Ajibade</h1>
          <span>
            <IoMdCheckmarkCircle className="text-teal-900" />
          </span>
        </div>

        <div className=" flex flex-col gap-3 pt-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#9CA1A5] md:text-md text-sm">Phone Number</h1>
            <p className="border-p !border-[#A4A9A1] !border-b !px-2 flex items-center gap-3 focus-within:!border-primary">
              +234 906 705 9501
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <h1 className="md:text-md text-sm text-[#9CA1A5]">Email Address</h1>
            <p className="border-p !border-[#A4A9A1] !border-b !px-2 flex items-center gap-3 focus-within:!border-primary">
              abelbright22@gmail.com
            </p>
          </div>

          <div className=" grid grid-cols-2 gap-10 pt-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#9CA1A5] md:text-md text-sm">Gender</h1>
              <p className="border-p !border-[#A4A9A1] !border-b !px-2 flex items-center gap-3 focus-within:!border-primary">
                Male
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[#9CA1A5] md:text-md text-sm">Country</h1>
              <p className="border-p !border-[#A4A9A1] !border-b !px-2 flex items-center gap-3 focus-within:!border-primary">
                Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default UserPersonalInfo;

const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem 2.5rem;
  height: fit-content;

  @media (min-width: 1024px) {
    width: 50%;
    padding-bottom: 4rem;
  }
  .border-p {
    padding: 0.65rem 1rem;
    border-bottom: 1px solid rgb(229, 231, 235);
    width: 100%;
    background: transparent;
    outline: 0px;
  }
`;
