import RangeComponent from './RangeComponent';
import { Link } from 'react-router-dom';
import { RiCloseCircleFill } from 'react-icons/ri';
const Requirement = () => {
  return (
    <div className="shadow px-10 w-full ">
      <div className="py-10">
        <h2 className="font-semibold">Physical Card Requirement</h2>
      </div>
      <RangeComponent
        percent={75}
        text=" KYC verification"
        range="2/3 completed"
      />

      <RangeComponent
        percent={0}
        text="Transactions amount"
        range="$0 / $5000"
      />
      <RangeComponent
        percent={100}
        text="Days spent with Makecards"
        range="60 /60 days"
      />
      <div className="">
        <p className="text-red-500 text-sm flex-wrap">
          *You can request for a physical dollar card after you have completed
          all the requirements
        </p>
      </div>
      <div className="py-10">
        <h1 className="pb-7">TO-DO List</h1>
        <div className="">
          <button
            type="button"
            className="w-full border border-gray-300 py-3 rounded-lg"
          >
            <Link
              to=""
              className="flex items-center gap-5 px-5 hover:text-teal-700 duration-300 text-sm font-medium"
            >
              <span className="text-[1.2rem] text-red-500">
                <RiCloseCircleFill />
              </span>
              Verify your Address
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Requirement;
