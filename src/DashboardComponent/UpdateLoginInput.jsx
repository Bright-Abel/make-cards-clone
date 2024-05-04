import { useDispatch, useSelector } from 'react-redux';
import { PiEyeClosedLight } from 'react-icons/pi';
import { IoEyeOutline } from 'react-icons/io5';
import { updatedValue, updatedValueFalse } from '../features/dashBoardSlice';
import { useEffect } from 'react';

const UpdateLoginInput = ({
  labelText,
  name,
  value,
  placeholder,
  type,
  handleChange,
}) => {
  const { checked, viewUpdatedValue, label } = useSelector(
    (store) => store.dashSlice
  );
  const dispatch = useDispatch();
  //
  return (
    <div className="flex flex-col py-4">
      <label htmlFor={labelText} className="text-[#9CA1A5] ">
        {labelText}
      </label>

      <div className="bg-transparent w-full flex items-center pt-2 outline-none border-b border-[#a4a9a1] focus-within:border-[#2FCFB7]">
        <input
          type={type}
          name={name}
          id={labelText}
          value={value}
          className="border-none outline-none w-[90%] px-1 pt-2 text-[14px]"
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
        {viewUpdatedValue && label === name ? (
          <button
            type="button"
            className="w-auto text-xl"
            onClick={() => dispatch(updatedValueFalse())}
          >
            <IoEyeOutline />
          </button>
        ) : (
          <button
            type="button"
            className="w-auto text-xl"
            onClick={() => dispatch(updatedValue(name))}
          >
            <PiEyeClosedLight />
          </button>
        )}
      </div>
    </div>
  );
};
export default UpdateLoginInput;
