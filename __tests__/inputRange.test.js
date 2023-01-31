/** @jest-environment jsdom */
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import InputRange from "../src/components/InputRange/index"

import "@testing-library/jest-dom";
import userEvent from  "@testing-library/user-event";

const renderElement = () => {
    render(<InputRange />)
}

describe("InputRange test ", () => {
    test("should be input ", () => {
        renderElement()

        const inputR = document.getElementById("range");

        expect(inputR).toBeInTheDocument();
    })


    test("should be datalist", () => {
        renderElement()

        const dataList = document.getElementById("tickmarks");

        expect(dataList).toBeInTheDocument();
    })

    test("should be function in the InputRange component", () => {
        renderElement()

        const inputR = document.getElementById("range")
        
        userEvent.type(inputR, 5)
        
        
        // const dataList = document.getElementById("tickmarks");
        // inputR.addEventListener("onInput", e => handleInputChange(e))

        // const handleInputChange = (e) => {
        //     let target = e.target;
        //     // if (e.target.type !== "range") {
        //     //     target = document.getElementById("range");
        //     // }
        //     const min = target.min;
        //     const max = target.max;
        //     const val = target.value;
        //     target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
        // };
        
        expect(inputR).toBeInTheDocument();
        // expect(inputR).toBe(handleInputChange(5));

    })

});
