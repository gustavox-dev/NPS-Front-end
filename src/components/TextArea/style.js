import styled from "styled-components";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";

export const TextAreaStyled = styled.textarea`
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
`;