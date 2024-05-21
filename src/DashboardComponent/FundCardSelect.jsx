import Select from 'react-select';
import { useState } from 'react';
import styled from 'styled-components';
import zIndex from '@mui/material/styles/zIndex';

const FundCardSelect = ({ arr, name, defaultVal, placeHolder }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 'none', // Remove border
      boxShadow: 'none', // Remove box-shadow
    }),
    menu: (base, state) => ({
      ...base,
      zIndex: '1000',
      // Transition: 'all 2s linear',
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
      <div className="bg-transparent w-full pt-4 outline-none border-b border-[#a4a9a1] focus-within:border-[#2FCFB7] focus-within:border-b-[2px]">
        <Select
          defaultValue={defaultVal ? defaultVal : null}
          onChange={setSelectedOption}
          options={arr}
          styles={customStyles}
          name={name}
          placeholder={placeHolder}
        />
      </div>
    </Wrapper>
  );
};
export default FundCardSelect;

const Wrapper = styled.div``;
