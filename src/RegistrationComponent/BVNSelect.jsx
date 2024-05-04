import Select from 'react-select';

const BVNSelect = ({
  defaultVal,
  handleChange,
  options,
  placeholder,
  name,
  value,
}) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 'none', // Remove border
      boxShadow: 'none', // Remove box-shadow
    }),
    menu: (base, state) => ({
      ...base,
      // Example: change hover background color
      color: '#2FCFB7',
    }),

    option: (base, state) => ({
      ...base,

      '&:hover': {
        backgroundColor: '#ccfbf19b', // Example: change hover background color
        color: '#2FCFB7', // Example: change hover text color
      },

      backgroundColor: '#ccfbf19b', // Style selected option
      color: state.isSelected ? '#2FCFB7' : 'inherit',
    }),
    placeholder: (base, state) => ({
      ...base,

      fontSize: '14px',
    }),
  };
  return (
    <div className="bg-transparent w-full pt-2 capitalize outline-none border-b border-[#c1c5bf] focus-within:border-[#2FCFB7] focus-within:border-b-[2px]">
      <Select
        name={name}
        defaultValue={defaultVal}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
export default BVNSelect;
