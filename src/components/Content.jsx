import { useState, useEffect } from 'react';
// import TextCarousel from './TextCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from '../features/contSlice';
import TextTransition, { presets } from 'react-text-transition';
import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TEXTS = ['naira', 'rand', 'dollar', 'cedis', 'shilling'];

const Content = () => {
  const [index, setIndex] = useState(0);
  const { isUserTyping, nickname, loginCont } = useSelector(
    (store) => store.contState
  );
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      // easing: 'ease-in-sine',
      anchorPlacement: 'center-bottom',
    });

    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
    // return () => {
    //   AOS.refresh();
    // };
  }, []);

  const dispatch = useDispatch();

  const getNickName = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleClick = () => {
    if (nickname.length > 2) {
      navigate('/register');
    }
  };

  return (
    <div className="flex-col items-start flex max-w-[500px] lg:w-5/12 mx-auto lg:mx-0 ">
      <h1
        className="text-4xl leading-10 font-bold lg:text-5xl text-left aos-init "
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Online payments made easy
      </h1>
      <p
        className="text-lg w-full pt-4 leading-8 md:pb-7 lg:pr-10 lg:text-xl text-left"
        data-aos="zoom-in-right"
        data-aos-delay="1200"
      >
        Spend anytime, anywhere, with your
        <span className="bg-teal-500 px-2 py-1 rounded  capitalize font-semibold text-white mx-[.4rem]">
          <TextTransition springConfig={presets.wobbly} inline={true}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </span>
        card.
      </p>

      <div className="!px-0 max-w-[434px] w-full !my-2 !hidden lg:!flex ">
        <div className=" flex pl-2  w-[100%] max-w-[434px] !border border-[#CFDADC] rounded-[32px]  items-center  focus-within:border-teal-600">
          <input
            type="text"
            onChange={getNickName}
            name="nickname"
            value={nickname}
            placeholder="Enter Your Nickname"
            className=" bg-transparent  rounded-lg outline-none py-3   w-[65%] !border-b-0"
          />
          <button
            type="submit"
            disabled={isUserTyping}
            className={`w-[40%] max-w-[160px] px-5 bg-teal-600 whitespace-nowrap py-3 rounded-[32px] text-green-50 font-medium border-none ${
              isUserTyping ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleClick}
          >
            Create Card
          </button>
        </div>
      </div>
    </div>
  );
};
export default Content;
