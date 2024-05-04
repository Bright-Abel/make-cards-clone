import Select from 'react-select';
import { useState } from 'react';
import styled from 'styled-components';
import { options } from '../custom.jsx/data';

const SelectInput = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 'none', // Remove border
      boxShadow: 'none', // Remove box-shadow
    }),
    menu: (base, state) => ({
      ...base,
    }),

    option: (base, state) => ({
      ...base,
      '&:hover': {
        backgroundColor: '#ccfbf19b', // Example: change hover background color
        color: '#2FCFB7', // Example: change hover text color
      },

      backgroundColor: state.isSelected ? '#ccfbf19b' : 'inherit', // Style selected option
      color: state.isSelected ? '#2FCFB7' : 'inherit',
    }),
    placeholder: (base, state) => ({
      ...base,

      fontSize: '14px',
    }),
  };

  return (
    <Wrapper>
      <div className="bg-transparent w-full pt-2 outline-none border-b border-[#a4a9a1] focus-within:border-[#2FCFB7]">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={customStyles}
          placeholder="Select country"
        />
      </div>
    </Wrapper>
  );
};
export default SelectInput;

const Wrapper = styled.div``;
