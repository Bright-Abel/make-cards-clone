'use strict';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';
import { useColor, ColorPicker } from 'react-color-palette';
import 'react-color-palette/css';
import {
  handleColor,
  openColorPalette,
  closeColorPalette,
} from '../features/contSlice';
import { useSelector, useDispatch } from 'react-redux';

const MultiColor = () => {
  const { colorPalette } = useSelector((store) => store.contState);
  const [myColor, setMyColor] = useState('#11a1ac');

  const dispatch = useDispatch();
  const handleChange = (color) => {
    setMyColor(color.hex);
    const value = myColor;
    const name = 'color';
    dispatch(handleColor({ name, value }));
  };

  const excludeClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Wrapper>
      <div
        className={`${colorPalette ? 'color-btn active' : 'color-btn'}`}
        onClick={() => dispatch(openColorPalette())}
        style={{
          background:
            'linear-gradient(rgb(66, 155, 255) 0%, rgb(251, 255, 64) 33.33%, rgb(255, 135, 67) 66.67%, rgb(255, 66, 66) 100%)',
        }}
      ></div>
      {colorPalette ? (
        <div className="absolute z-[2000] top-[49px] mx-auto right-[29px]">
          <div onClick={excludeClick}>
            <ChromePicker
              color={myColor}
              onChange={handleChange}
              id="excludeElement"
            />
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
};
export default MultiColor;

const Wrapper = styled.main`
  position: relative;
  .color-btn {
    border: 2px solid hsla(0, 0%, 100%, 0.5);
    border-radius: 50%;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    cursor: pointer;
    height: 2.9rem;
    padding: 5px;
    width: 2.9rem;
    display: grid;
    place-content: center;
  }
  .active {
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #05f;
    transition: none;
  }
`;
