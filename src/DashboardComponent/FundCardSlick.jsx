import styled from 'styled-components';
import { countryName } from '../custom.jsx/data';

const FundCardSlick = () => {
  return (
    <Wrapper>
      {countryName.map((country) => {
        const { name, src, rate } = country;
        return (
          <div key={name} className="cont text-sm">
            <img
              src={src}
              alt={name}
              className="w-[20px] h-[20px] object-cover rounded-full"
            />
            <span className="whitespace-nowrap">{rate}</span>
          </div>
        );
      })}
    </Wrapper>
  );
};
export default FundCardSlick;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
  background: transparent;
  width: 100%;

  .cont {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6d3;
    border-radius: 1.5rem;
    /* box-shadow: 0 0.625rem 1.875rem 0 rgba(42, 47, 86, 0.1); */
    gap: 5px;
    padding: 12px 1rem;
  }
`;
