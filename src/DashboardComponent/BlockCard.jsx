import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { blockCardSwitch, openModal } from '../features/dashBoardSlice';

const BlockCard = () => {
  const { switchState } = useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();
  return (
    <main className="bg-white rounded-[12px] px-10 py-6  lg:px-8 pt-6 pb-10 lg:w-[50%]">
      <h1 className="font-medium  md:text-xl text-lg text-[#383A3C]">
        Block Card
      </h1>

      <div className="cursor-pointer flex border-b-[0.2px] border-b-[#D5D5D5]  mt-10 pb-1 px-2 items-center justify-between ">
        <h2 className="text-lg text-[#4D4F51]">Dollar card</h2>

        <span className=" flex items-center gap-3">
          <p className="capitalize text-lg">
            {switchState ? 'unblock' : 'block'}
          </p>
          <Wrapper class="switch" checked={switchState}>
            <input
              id="checkbox"
              type="checkbox"
              checked={switchState}
              onChange={() => {
                dispatch(blockCardSwitch());
              }}
              onClick={() => (!switchState ? dispatch(openModal()) : null)}
            />
          </Wrapper>
        </span>
      </div>
    </main>
  );
};
export default BlockCard;
// 3
const Wrapper = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 25px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ checked }) => (checked ? '#fb7185' : '#9CA1A5')};
  display: block;
  border-radius: 100px;
  position: relative;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (!checked ? '0px' : 'calc(60% - 0px)')};
    /* top: 50%;
    transform: translateY(-50%); */
    width: 23px;
    height: 23px;
    background-color: ${({ checked }) => (checked ? '#fb7185' : '#9CA1A5')};
    border-radius: 90px;
    transition: 0.3s;
  }
`;
