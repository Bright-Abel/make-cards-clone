import styled from 'styled-components';
import { scroll } from '../custom.jsx/data';

const Scroller = () => {
  return (
    <Wrapper>
      <div className="w-full myScroll">
        {scroll.map((text) => {
          const { id, logo, bigPrice, smallPrice, name, date } = text;
          return (
            <div
              key={id}
              className="flex justify-between items-center px-4 py-4"
            >
              <div className="flex items-center">
                <img
                  src={logo}
                  alt={name}
                  className="w-7 h-7 lg:w-9 lg:h-9 object-cover rounded-full"
                />
                <div className="ml-2 lg:ml-4">
                  <h5 className="text-[#101828] mb-1 font-medium text-sm lg:text-base capitalize">
                    {name}
                  </h5>
                  <p className="text-[#101828] text-xs">{date}</p>
                </div>
              </div>
              <div className="">
                <h5 className="text-[#101828] mb-1 font-medium text-sm lg:text-base capitalize">
                  {bigPrice}
                </h5>
                <p className="text-[#101828] text-xs">{smallPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Scroller;
const Wrapper = styled.div`
  .myScroll {
    animation: scroll 6s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-120%);
    }
  }
`;
