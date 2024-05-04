import styled from 'styled-components';
import Camera from './Camera';
import Consent from './Consent';
import { useSelector, useDispatch } from 'react-redux';

const VerificationForm = ({ viewID }) => {
  const { verificationID } = useSelector((store) => store.registerSlice);
  return (
    <Wrapper className={` ${viewID === 2 ? 'slide-in' : 'slide-out'}`}>
      {verificationID === 1 ? <Consent /> : <Camera />}
      {/* <div
        className={`absolute top-0   ${
          verificationID === 1 ? 'slideIn' : 'slideOut'
        }`}
      >
        <Consent />
      </div>
      <div
        className={`absolute top-0 left-0  ${
          verificationID === 2 ? 'slideIn' : 'slideOut'
        }`}
      >
        <Camera />
      </div> */}
    </Wrapper>
  );
};
export default VerificationForm;

const Wrapper = styled.main`
  .slideIn {
    animation: slideIn 2s ease 0s forwards;
  }

  .slideOut {
    animation: slideOut 2s ease 0s forwards;
  }

  @keyframes slideIn {
    /* from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    } */
    from {
      opacity: 0.2;
      /* display: hidden; */
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }

    to {
      opacity: 1;
      /* display: block; */
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    /* to {
      transform: translateX(-1000px);
    } */

    to {
      opacity: 0;
      -webkit-transform: translateX(-120%);
      transform: translateX(-120%);
      /* visibility: hidden; */
      /* z-index: -10; */
    }
  }
`;
