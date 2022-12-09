import styled from "styled-components";
import { fonts } from "../../utils/fonts"
import { colors } from "../../utils/colors"

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

    width: 80%;
    
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
    height: 75vh;
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
    }

    .next-page {
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
        width: 88%;

        
    }

    > input[type="range"] {
        border: 1px solid red;
        background-color: red;
    }

    > textarea {
        border: none;
        border-radius: 5px;
        background-color: ${colors.bg_textarea};
        font-family: ${fonts.ff_popins};
        padding: 15px;
        width: 80%;
        height: 20%;
        margin-left: 5%;
        outline: none;
    }

    > ul {
        margin-top: 0;
        margin-left: 15px;
        padding: 0;
        width: 90%;
        list-style: none;
        display: flex;
        justify-content: space-around;

        > li {
            
            margin-left: 5px;
            display: flex;
            flex-direction: column;

            ::before {
                content: '"';
                margin: 0;
                padding: 0;
                height: 10px;
            }
        }
    }
`;