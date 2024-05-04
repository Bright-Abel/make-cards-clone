import { TbMail } from 'react-icons/tb';
const Input = ({
  labelText,
  name,
  value,
  placeholder,
  type,
  logo,
  handleChange,
  max,
  min,
}) => {
  return (
    <div className={`flex flex-col `}>
      {labelText && (
        <label htmlFor="" className="text-[#9CA1A5] ">
          {labelText}
        </label>
      )}

      <div
        className={`flex items-center gap-6 bg-transparent w-full pt-2 outline-none border-b border-[#a4a9a1] focus-within:border-[#2FCFB7] ${
          logo ? ' pl-[.8rem]' : null
        }`}
      >
        {logo && (
          <span className="pb-2 text-[1.1rem]">
            <TbMail />
          </span>
        )}
        <input
          required
          type={type}
          name={name}
          value={value}
          className="border-none outline-none w-full px-1 pb-2 text-[14px] font-bold"
          placeholder={placeholder}
          onChange={handleChange ? handleChange : null}
          maxLength={max ? max : null}
          minLength={min ? min : null}
        />
      </div>
    </div>
  );
};
export default Input;
