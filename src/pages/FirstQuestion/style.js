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

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;

  > h1 {
    margin-top: 120px;
    font-weight: ${fonts.sm_weight};
  }

  .next-page {
    
  }
`;

export const ContentAvaliation = styled.div`
  padding-top: 40px;
  width: 78%;
  height: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  > h1 {
    font-size: 26px;
  }

  > p {
    margin-top: 0;
    font-size: 17px;
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
