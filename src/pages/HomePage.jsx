import { Navbar, Footer, Loading } from '../components';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginCont } from '../features/contSlice';
import { AnimatePresence } from 'framer-motion';
// /dist/framer-motion

const HomePage = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(loginCont(true));
  }, []);
  return (
    <div className="relative">
      <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <img
          src="https://makecards.co/static/media/bg.5d37529d9c1911edd3df9b274733cd95.svg"
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover  z-[-20]"
        />
        {isPageLoading ? (
          <Loading />
        ) : (
          // <section className="justify-between flex flex-col min-h-screen relative undefined">
          <AnimatePresence>
            <Outlet location={location} />
          </AnimatePresence>
          // </section>
        )}
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default HomePage;
