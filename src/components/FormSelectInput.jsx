import { CiWarning } from 'react-icons/ci';
const FormSelectInput = ({
  nameOfCountry,
  country,
  phoneName,
  phoneVal,
  handleChange,
  countryFlag,
  countryVal,
  inputPlaceHolder,
  errorMsg,
  labelText,
}) => {
  return (
    <div className={`!px-0 relative ${labelText ? '!my-14' : 'my-0'}`}>
      {labelText && (
        <label htmlFor={nameOfCountry} className="text-zinc-500">
          {labelText}
        </label>
      )}
      <div className="w-full relative mt-[1rem]">
        <div className="flex items-center">
          <div className="relative self-stretch items-center flex mr-[.7rem] ml-[.7rem] focus-within:text-[#03b2cb]">
            <select
              name={nameOfCountry}
              id=""
              value={countryVal}
              onChange={handleChange}
              className="absolute text-black h-full left-0 opacity-0 top-0 w-full z-[1] border-0 cursor-pointer"
            >
              {country.map((countryName, index) => {
                const { name, val } = countryName;
                return (
                  <option key={index} value={val}>
                    {name}
                  </option>
                );
              })}
            </select>
            <div
              // aria-hidden={true}
              className="h-[1.2rem] w-[1.5rem] flex justify-center items-center "
            >
              <img
                src={countryFlag}
                alt="SA"
                className="block w-[65%] h-[65%]"
              />
            </div>
            <div className="PhoneInputCountrySelectArrow"></div>
          </div>
          <input
            type="tel"
            name={phoneName}
            id={phoneName}
            value={phoneVal}
            placeholder={inputPlaceHolder}
            className="flex-[1] border-none outline-none text-sm"
            onChange={handleChange}
            required
          />
        </div>
        <hr className="bg-gray-300 mt-2" />
        {errorMsg && (
          <small className="text-red-500 flex items-center gap-1 mt-2">
            <CiWarning className="text-[.9rem]" />
            {errorMsg}
            <Link to="/" className="underline text-teal-500">
              here
            </Link>
          </small>
        )}
      </div>
    </div>
  );
};
export default FormSelectInput;
