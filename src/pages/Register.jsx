import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import { RegisterNavBar, Footer, Loading } from '../components';
import {
  CreatePin,
  FundCardForm,
  KycRegForm,
  VerificationForm,
} from '../RegistrationComponent';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const loader = (store) => () => {
  const nickName = store.getState().contState.nickname;
  if (!nickName) {
    toast.error('You must input a nickname', {
      className:
        'border border-red-300 bg-red-50 text-sm px-1 rounded-lg whitespace-nowrap mx-[4rem] my-[2rem] ',
      hideProgressBar: true,
      closeButton: false,
    });
    return redirect('/');
  }

  return null;
};

const Register = () => {
  const { viewID, isModalOpen } = useSelector((store) => store.registerSlice);

  // useEffect(() => {
  //   const disableNavigation = () => {
  //     window.history.pushState(null, '', window.location.href);
  //   };

  //   disableNavigation(); // Call the function to disable initial navigation

  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = ''; // Needed for older browsers
  //   };

  //   const handlePopstate = () => {
  //     disableNavigation(); // Call the function again if the user tries to navigate
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   window.addEventListener('popstate', handlePopstate);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //     window.removeEventListener('popstate', handlePopstate);
  //   };
  // }, []);
  return (
    <Wrapper className="min-h-screen flex justify-between flex-col">
      {/* <div className=" "> */}
      <header className="z-[1] gap-3">
        <RegisterNavBar />
      </header>
      <section className="">
        {viewID === 1 ? (
          <KycRegForm isModalOpen={isModalOpen} viewID={viewID} />
        ) : viewID === 2 ? (
          <VerificationForm viewID={viewID} />
        ) : viewID === 3 ? (
          <CreatePin viewID={viewID} />
        ) : (
          <FundCardForm viewID={viewID} />
        )}
      </section>

      <Footer />
    </Wrapper>
  );
};
export default Register;

const Wrapper = styled.main`
  .modal {
    backdrop-filter: blur(2px);
  }
  .container {
    margin: 0 auto;
    max-width: 80rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
  }

  .center1 {
    margin-bottom: 4rem;
    margin-top: 1rem;
    /* min-height: 100%; */
  }
  /* SLIDE START */
  /* .registration-form {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .form-section {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100%;
  } */

  .slide-in {
    animation: slideIn 2s ease 0s forwards;
  }

  .slide-out {
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
