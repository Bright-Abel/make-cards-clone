import { Line } from 'rc-progress';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { GiCheckMark } from 'react-icons/gi';
const RangeComponent = ({ percent, text, range }) => {
  const [strokeWidth, setStrokeWidth] = useState(4);

  useEffect(() => {
    // Function to update stroke and trail width based on screen size
    const updateWidths = () => {
      const screenWidth = window.innerWidth;

      //  logic for adjusting stroke and trail width
      if (screenWidth < 1024 && screenWidth > 540) {
        setStrokeWidth(2);
      } else if (screenWidth < 540) {
        setStrokeWidth(4);
      } else {
        setStrokeWidth(6);
      }
    };

    // Call the function initially and add event listener for window resize
    updateWidths();
    window.addEventListener('resize', updateWidths);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, []);

  return (
    <Wrapper>
      <div className="range text-sm pt-4">
        <h2 className=" text-sm text-[#383A3C] font-medium">{text}</h2>
        <Line
          percent={percent}
          strokeWidth={strokeWidth}
          trailWidth={strokeWidth}
          strokeColor="#14b8a6"
          className="wrap"
        />
        <p className=" text-sm text-[#65696B] flex items-center gap-2 ">
          {range}
          {percent === 100 ? (
            <GiCheckMark className="text-teal-600 text-lg" />
          ) : null}
        </p>
        <p></p>
      </div>
    </Wrapper>
  );
};
export default RangeComponent;
const Wrapper = styled.div`
  .range {
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* gap: 2px; */
  }

  .wrap {
    border-radius: 100px;
  }
  @media (min-width: 1024px) {
    .range {
      display: grid;
      grid-template-columns: 30% 1fr 25%;
      gap: 10px;
      align-items: center;
    }
  }
`;
