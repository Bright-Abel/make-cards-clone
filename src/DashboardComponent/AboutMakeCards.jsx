import { Link } from 'react-router-dom';
import { aboutMakeCardsLink } from '../custom.jsx/data';
import { aboutMakeCardsIDChange } from '../features/dashBoardSlice';
import { useDispatch } from 'react-redux';

const AboutMakeCards = () => {
  const dispatch = useDispatch();
  return (
    <section className="bg-white rounded-[12px] px-10 py-6  lg:px-8 pt-6 pb-10  lg:w-[50%]">
      <div className="">
        <h1 className="font-medium  md:text-xl text-lg text-[#383A3C] ">
          Security
        </h1>
        <p className="text-[#65696B] text-sm lg:text-md md:text-md mt-2">
          Manage your account settings. Update your login PIN and block your
          card(s).
        </p>
      </div>

      <div className="pt-4">
        {aboutMakeCardsLink.map((link) => {
          const { id, text, logo, url } = link;
          return (
            <>
              {id < 4 ? (
                <Link
                  key={id}
                  to={url}
                  target="_blank"
                  // onClick={() => {
                  //   dispatch(caseNavCol());
                  //   dispatch(faqNavCol2());
                  // }}
                  className="cursor-pointer flex border-b-[0.2px] border-b-[#D5D5D5]   pt-5 pb-5 hover:bg-[#F8F8F8] px-2 items-center justify-between "
                >
                  <h2 className="text-sm mb-1 text-[16px] text-[#4D4F51] capitalize ">
                    {text}
                  </h2>

                  <span className="text-teal-600 text-[1.2rem]">{logo}</span>
                </Link>
              ) : (
                <div
                  key={id}
                  onClick={() => {
                    dispatch(aboutMakeCardsIDChange(id));
                  }}
                  className="cursor-pointer flex   pt-5 pb-5 hover:bg-[#F8F8F8] px-2 items-center justify-between "
                >
                  <h2 className="text-sm mb-1 text-[16px] text-[#4D4F51] capitalize ">
                    {text}
                  </h2>

                  <span className="text-teal-600 text-[1.2rem]">{logo}</span>
                </div>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};
export default AboutMakeCards;
