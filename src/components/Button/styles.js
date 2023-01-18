import styled from "styled-components";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";

export const Btn = styled.button`
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
`;