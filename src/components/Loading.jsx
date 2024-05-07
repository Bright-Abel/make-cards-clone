import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper className="section section-center">
      <div className="loading"></div>
    </Wrapper>
  );
};
export default Loading;

const Wrapper = styled.div`
  .section {
    padding: 5rem 0;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: red;
    animation: spinner 0.6s linear infinite;
  }
`;
