import styled, {css} from "styled-components";
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

    .previus-page {
        display: none ;
    }

    .next-page-btn {
        
    }

    
    
    &[disabled] {
        opacity: 0.4;
        cursor: not-allowed;
    }
    @media (max-width: 768px) {
        background: #FFFFFF;
        width: 85%;
        display: flex;
        justify-content: space-between;
        .previus-page {
            border-radius: 3px;
            background: ${colors.bg_color};
            width: 35%;
            height: 100%;
            border: 1px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .next-page-btn {
            border-radius: 3px;
            background: ${colors.bg_color};
            width: 35%;
            height: 100%;
            border: 1px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;