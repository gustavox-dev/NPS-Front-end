import styled from "styled-components";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  margin: 0;
  padding: 0;

  height: 100vh;
  width: 100%;
  position: relative;
  background: ${colors.bg_color_opacity};
  font-family: ${fonts.ff_popins};

  > p {
    font-weight: ${fonts.sm_weight};
  }
`;

export const Buttons = styled.div`
  margin-top: 30px;

  width: 85%;

  display: flex;
  justify-content: space-between;

  > img {
    cursor: pointer;
    height: 21px;
    width: 30px;
  }
`;

export const Content = styled.div`
  width: 450px;
  background-color: white;
  height: 65vh;
  /* padding: 0 30px 0 30px; */

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* top: 50%; */
  /* transform: translate(-50%, -50%); */

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;

  > h1 {
    margin-top: 120px;
    font-weight: ${fonts.sm_weight};
  }

  .next-page {
    border-radius: 3px;
    cursor: pointer;
    margin-top: 40px;
    border: none;
    width: 35%;
    height: 9%;
    text-align: center;
    font-family: ${fonts.ff_popins};
    font-weight: ${fonts.md_weight};
    font-size: 16px;
    letter-spacing: 0.5px;
    background: ${colors.bg_color};
    color: white;
  }
`;

export const ContentAvaliation = styled.div`
  /* border: 1px solid red; */
  padding-top: 40px;
  width: 78%;
  height: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  align-content: center;
  justify-content: space-around;

  > h1 {
    font-size: 26px;
  }

  > p {
    margin-top: 0;
    font-size: 17px;
  }

  > input {
    margin-left: 5%;
    width: 90%;
    background: ${colors.bg_textarea};
  }

  input {
    background-color: ${colors.bg_textarea};
  }

  input[type="range"] {
    -webkit-appearance: none;
    /* margin-right: 15px; */
    /* width: 200px; */
    height: 7px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background: ${colors.bg_color};
    /* background-size: 70% 100%; */
    background-repeat: no-repeat;
  }

  /* Input Thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    margin-top: -15px;
    width: 25px;
    border-radius: 40%;
    background: #fff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    /* height: 20px; */
    /* width: 20px; */
    border-radius: 50%;
    background: #fff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    /* transition: background .3s ease-in-out; */
  }

  input[type="range"]::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 25px;
    border-radius: 50%;
    /* background: #ff4500; */
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    /* transition: background .3s ease-in-out; */
  }
  datalist {
    margin-left: 5%;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  > textarea {
    margin-top: 30px;
    border: none;
    border-radius: 5px;
    background-color: ${colors.bg_textarea};
    font-family: ${fonts.ff_popins};
    padding: 15px;
    width: 85%;
    height: 20%;
    margin-left: 5%;
    outline: none;
  }

  .next-page {
    border: 1px solid black;
  }
`;
