const FormInput = ({
  labelText,
  labelFor,
  type,
  name,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor={labelFor} className="text-zinc-500 ">
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        id="phoneNumber"
        value={value}
        placeholder={placeholder}
        className=" border border-zinc-300 outline-none w-full py-2 rounded px-2 mt-2"
        onChange={handleChange}
        required
      />
    </div>
  );
};
export default FormInput;
