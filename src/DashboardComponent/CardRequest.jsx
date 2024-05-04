import { useSelector } from 'react-redux';
const CardRequest = () => {
  const { nickname } = useSelector((store) => store.contState);
  return (
    <div className=" w-full px-8 pt-12 shadow">
      <div className="relative max-w-[434px] mx-auto">
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 z-50 rounded-xl"></div>
        <img
          src="https://makecards.co/static/media/PhysicalCardImg.d53c631b80100809572359141f78505b.svg"
          alt=""
          className="w-full"
        />
        <img
          src="https://makecards.co/static/media/mastercard-white.f9bd83cc07dac07af85935b68d6ceb1c.svg"
          alt=""
          className=" bottom-6 right-6 z-10 w-14 absolute"
        />
        <p className="absolute bottom-5 left-5 z-10 truncate max-w-[308px] calibri tracking-widest text-[12px] sm:text-sm uppercase font-medium text-white">
          {nickname === '' ? 'nick name' : nickname}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className=" m-6 lg:w-[90%] w-1/2  bg-teal-600 py-4 rounded-[50px] text-white font-semibold cursor-not-allowed opacity-[.6]"
          disabled={true}
        >
          Request card
        </button>
      </div>
    </div>
  );
};
export default CardRequest;
