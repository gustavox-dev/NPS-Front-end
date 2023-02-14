import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const InputStyled = styled.input.attrs({ type: "range" })`
  margin-left: 5%;
  width: 90%;
  -webkit-appearance: none;
  height: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background: ${colors.bg_color};
  /* background-size: 70% 100%; */
  background-repeat: no-repeat;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    margin-top: -15px;
    width: 25px;
    border-radius: 40%;
    background: #fff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    /* height: 20px; */
    /* width: 20px; */
    border-radius: 50%;
    background: #fff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    /* transition: background .3s ease-in-out; */
  }

  ::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 25px;
    border-radius: 50%;
    /* background: #ff4500; */
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    /* transition: background .3s ease-in-out; */
  }
`;

export const DataListStyled = styled.datalist`
  margin-left: 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-family: ${fonts.ff_popins}, ${fonts.ff_serif};
`;
