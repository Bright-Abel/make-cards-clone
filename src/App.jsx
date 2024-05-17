import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Landing,
  HomePage,
  UseCases,
  DevTools,
  Faqs,
  Login,
  Business,
  Error,
  Pin,
  ResetPin,
  ForgotPin,
  TermsOfService,
  PrivacyPolicy,
  CookiePolicy,
  Register,
  HomeError,
} from './pages';

import {
  DashBoard,
  Card,
  Transactions,
  SharedLayout,
  PhysicalCard,
} from './pages/dashboard';

import {
  HomeLayout,
  HelpAndSupport,
  KYCinfo,
  Security,
} from './pages/dashboard/Setting';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './store';
import { loader as registerLoader } from './pages/Register';
// import { loader as dashboardLoader } from './pages/dashboard/SharedLayout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <HomeError />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/usecases',
        element: <UseCases />,
        // errorElement: <ErrorElement />,
      },
      {
        path: '/faqs',
        element: <Faqs />,
        // errorElement: <ErrorElement />,
      },
      {
        path: '/devtools',
        element: <DevTools />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/business',
        element: <Business />,
      },
      {
        path: '/pin',
        element: <Pin />,
      },
      {
        path: '/forgot-pin',
        element: <ForgotPin />,
      },
      {
        path: '/reset-pin',
        element: <ResetPin />,
      },
      {
        path: '/register',
        element: <Register />,
        loader: registerLoader(store),
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/cookie-policy',
        element: <CookiePolicy />,
      },
      {
        path: '/terms-of-service',
        element: <TermsOfService />,
      },
    ],
  },

  // DASHBOARD ROUTE
  {
    path: '/dashboard',
    element: <SharedLayout />,
    // loader: dashboardLoader(store),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: 'cards',
        element: <Card />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
      {
        path: 'physical-card',
        element: <PhysicalCard />,
      },

      {
        path: 'settings',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <KYCinfo />,
          },
          {
            path: 'security',
            element: <Security />,
          },
          {
            path: 'support',
            element: <HelpAndSupport />,
          },
        ],
        // DASHBOARD ROUTE END
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
};
export default App;
