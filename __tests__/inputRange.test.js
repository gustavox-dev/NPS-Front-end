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
        
        
        expect(inputR).toBeInTheDocument();

    })

});
