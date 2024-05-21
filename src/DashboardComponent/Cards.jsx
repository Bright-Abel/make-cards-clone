import { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Cards = () => {
  useEffect(
    () => async () => {
      const url =
        'https://jumia-service.p.rapidapi.com/api/products/samsung-galaxy-a12-blanc-4gb-ram-128gb-6.5-hd-5000mah-blanc-45397926/reviews';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '06da49f710msh123bd3f5cab4e11p153eaejsn3b7df5a544f6',
          'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        console.log('i am a boy');
      } catch (error) {
        console.error(error);
      }
    },
    []
  );
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
      <div className="relative">
        <div className="shadow border flex rounded-2xl h-[210px] p-5 hover:!scale-105 !duration-[500ms] cursor-pointer hover:text-current transition ease-in-out flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="font-medium">Dollar Card</p>
            <IoIosArrowForward />
          </div>
          <div className="flex justify-between items-center">
            <img
              src="https://makecards.co/static/media/usa.14abad61351d512234363fd6c0af113a.svg"
              alt=""
              className="w-6 h-6 rounded-3xl object-cover"
            />
            <p className="font-medium">$0</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="shadow border flex rounded-2xl h-[210px] p-5 hover:!scale-105 !duration-[500ms] cursor-pointer hover:text-current transition ease-in-out flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="font-medium">Naira Card</p>
            <IoIosArrowForward />
          </div>
          <div className="flex justify-between items-center">
            <img
              src="https://makecards.co/static/media/ng.0d0edb990f97d04a933dc18db24c7219.svg"
              alt=""
              className="w-6 h-6 rounded-3xl object-cover"
            />
            <p className="font-medium">#0.00</p>
          </div>
          <div className="absolute bg-[#121B19] bg-opacity-70 rounded-xl flex  top-0 left-0 w-full h-full z-10 flex-col items-center justify-center">
            <p className="text-sm mb-2 text-white">Your card is processing</p>
            <div className="text-sm text-white bg-teal-500 bg-opacity-20 py-1 px-3 w-28 rounded-3xl hover:!scale-110 !duration-[500ms] cursor-pointer grid place-items-center">
              <Link to="">Pending</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="shadow border flex rounded-2xl h-[210px] p-5 hover:!scale-105 !duration-[500ms] cursor-pointer hover:text-current transition ease-in-out flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="font-medium">Physical Dollar Card</p>
            <IoIosArrowForward />
          </div>
          <img
            src="https://makecards.co/static/media/physical-dashboard.3603695a7a2352769255d1c510869827.svg"
            alt=""
            className="absolute top-0 bottom-0 h-full w-full  right-0 left-0 object-cover rounded-2xl z-[1]"
          />
          <div className="flex justify-between items-center">
            <img
              src="https://makecards.co/static/media/ng.0d0edb990f97d04a933dc18db24c7219.svg"
              alt=""
              className="w-6 h-6 rounded-3xl object-cover"
            />
            <p className="font-medium">$0</p>
          </div>
          <div className="absolute bg-[#121B19] bg-opacity-70 rounded-xl flex  top-0 left-0 w-full h-full z-10 flex-col items-center justify-center">
            <p className="text-sm mb-2 text-white">
              Request physical dollar card
            </p>
            <div className="text-sm text-white bg-teal-500 bg-opacity-80 py-1 px-3 w-28 rounded-3xl hover:!scale-110 !duration-[500ms] cursor-pointer grid place-items-center">
              <Link to="physical-card">Request</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
