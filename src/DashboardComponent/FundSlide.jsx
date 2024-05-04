import FundCardSlick from './FundCardSlick';
import Marquee from 'react-fast-marquee';
const FundSlide = () => {
  return (
    <div className="pt-4">
      <Marquee
        style={{
          display: 'flex',
          gap: '1rem',
        }}
        pauseOnHover
      >
        <FundCardSlick />
      </Marquee>
    </div>
  );
};
export default FundSlide;
