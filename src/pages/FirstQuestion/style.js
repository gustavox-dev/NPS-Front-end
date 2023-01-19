import styled from "styled-components";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  margin: 0;
  padding: 0;

  height: 100vh;
  width: 100%;
  position: relative;
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

  .arrow-left {
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
  }

  .next-page {
  }
  .close-modal-success {
    width: 85%;
    /* border: 1px solid red; */
    justify-content: end;
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
`;

export const TitleAvaliation = styled.h1`
  /* margin-top: 120px; */
  font-weight: ${fonts.md_weight};
  font-size: 26px;
  font-family: ${fonts.ff_popins}, ${fonts.ff_serif};
`;

export const QuestionText = styled.p`
  margin-top: 0;
  font-size: 17px;
  font-family: ${fonts.ff_popins}, ${fonts.ff_serif};
  font-weight: ${fonts.sm_weight};
`;

export const IconSuccess = styled.div`
  /* border: 1px solid black; */
  /* height: 100px; */
  width: 100%;
`;
