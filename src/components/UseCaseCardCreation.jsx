import { Link } from 'react-router-dom';

const UseCaseCardCreation = () => {
  return (
    <div className="px-6">
      <div className="flex items-center  flex-col gap-x-3 gap-y-5 mb-6">
        <p className="font-medium text-teal-700">
          Ready for your virtual cards?
        </p>
        <h1 className="font-medium text-3xl lg:text-4xl">
          Spend online, anytime, anywhere with Makecards
        </h1>
        <Link
          to="/"
          className="px-16 py-[.8rem] rounded-[32px] text-teal-50 w-full md:w-auto bg-teal-600 grid place-content-center"
        >
          Create card
        </Link>
      </div>
      <div className="container bg-[#F9FAFB] hidden md:block">
        <img
          src="	https://makecards.co/static/media/map.f7e6761907e23248af4d6312bee3f8a7.svg"
          alt="map"
          className="w-full"
        />
      </div>
    </div>
  );
};
export default UseCaseCardCreation;
