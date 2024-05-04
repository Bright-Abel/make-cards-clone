import { useSelector, useDispatch } from 'react-redux';
import { FormInput, Navbar } from '../components';
import { handleColor, loginCont } from '../features/contSlice';
import { useEffect } from 'react';

const Business = () => {
  const { password, email } = useSelector((store) => store.contState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginCont(true));
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleColor({ name, value }));
  };
  return (
    <div className="min-h-screen">
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

          <form
            action=""
            className="w-full flex flex-col gap-16"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="">
              <h2 className="text-2xl font-bold ">Login with Password</h2>
              <p>Enter your Email and Password</p>
            </div>

            <div className=" flex flex-col gap-8">
              <FormInput
                labelText="Email"
                labelFor="email"
                type="email"
                name="email"
                value={email}
                placeholder="brightabel@gmail.com"
                handleChange={handleChange}
              />
              <FormInput
                labelText="Password"
                labelFor="password"
                type="password"
                name="password"
                value={password}
                placeholder="password"
                handleChange={handleChange}
              />
            </div>
            <button
              className="!w-full bg-teal-600 text-xl font-bold text-teal-50 py-3 px-20 rounded-[32px] grid place-content-center mb-[1rem]"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Business;
