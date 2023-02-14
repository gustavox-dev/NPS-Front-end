import styled, {css} from "styled-components";
import { fonts } from "../../utils/fonts";
import { Link } from "react-router-dom";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  margin: 0;
  padding: 0;

  height: 100vh;
  width: 100%;
  position: relative;
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
  .close-modal-success {
    width: 85%;
    justify-content: end;
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

  .arrow {
    height: 21px;
    width: 30px;
  }

  @media (max-width: 768px) {
    width: 85%;
    justify-content: flex-end;
    .arrow {
      display: none;
    }
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
  width: 100%;
`;

export const TextRequired = styled.span`
  font-family: ${fonts.ff_popins}, ${fonts.ff_serif};
  color: red;
  margin-left: 20px;
  width: 90%;
  display: flex;
  justify-items: flex-start;
  font-size: 13px;
`;

export const LinkStyled = styled(Link)`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    ${({ disabled }) => disabled ?  css`opacity: 0.4;
        cursor: not-allowed` : ""};
  }
`;

