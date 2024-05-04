import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginCont } from '../features/contSlice';
import { toast } from 'react-toastify';
import { Footer, Navbar } from '../components';
const DevTools = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginCont(true));
  }, []);

  const [val, setVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val !== 'SEGUN') {
      toast.error('Incorrect password, check and try again.', {
        className: 'border border-red-300 bg-red-50 text-sm px-1',
        hideProgressBar: true,
        closeButton: false,
      });
    }
  };
  return (
    <div className=" flex flex-col justify-between min-h-screen">
      <Navbar />
      {/* <img
        src="	https://makecards.co/static/media/bg.5d37529d9c1911edd3df9b274733cd95.svg"
        alt=""
        className="absolute w-full h-full bottom-0 top-0 object-cover opacity-50 z-[-1]"
      /> */}
      <div className="flex justify-center items-center p-6 gap-4">
        <div
          className="rounded-md bg-white py-6 lg:py-8 w-full sm:max-w-lg px-4 md:px-6 lg:px-8 relative overflow-hidden block"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 8px 16px' }}
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-0 -left-10 -top-20 w-52 opacity-10"
          >
            <path
              fill="#1C9B88"
              d="M34.9,-39.1C42.8,-27.1,44.9,-13.6,47.5,2.6C50.2,18.8,53.3,37.6,45.5,50.6C37.6,63.6,18.8,70.8,-0.7,71.5C-20.3,72.3,-40.5,66.5,-57,53.5C-73.4,40.5,-85.9,20.3,-82.6,3.3C-79.3,-13.6,-60,-27.2,-43.6,-39.2C-27.2,-51.2,-13.6,-61.6,0,-61.5C13.6,-61.5,27.1,-51.1,34.9,-39.1Z"
              transform="translate(100 100)"
            ></path>
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-0 -right-14 -bottom-20 w-52 opacity-10"
          >
            <path
              fill="#1C9B88"
              d="M33.7,-28.9C44.9,-22.4,56.1,-11.2,57.2,1C58.2,13.3,49.1,26.6,37.8,33.2C26.6,39.8,13.3,39.7,2.1,37.6C-9.2,35.6,-18.4,31.6,-27,25C-35.6,18.4,-43.6,9.2,-50.5,-6.9C-57.4,-22.9,-63.1,-45.9,-54.5,-52.4C-45.9,-58.9,-22.9,-49,-5.9,-43.1C11.2,-37.3,22.4,-35.5,33.7,-28.9Z"
              transform="translate(100 100)"
            ></path>
          </svg>
          <form action="" className="w-full " onSubmit={handleSubmit}>
            <div className="">
              <h2 className="text-2xl font-bold ">Login with Password</h2>
              <p>Kindly input your password to access the documentation.</p>
            </div>

            <div className=" !px-0 relative !my-14 flex flex-col gap-4">
              <label htmlFor="password" className="text-zinc-500 text-sm">
                Password
              </label>
              <input
                type="password"
                name="passW"
                id="password"
                placeholder="•••••••••"
                className="border-none outline-none"
                required
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
              <hr className="bg-gray-300 " />
            </div>
            <button
              className="!w-full bg-teal-600 text-xl font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center mb-[.6rem]"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DevTools;
