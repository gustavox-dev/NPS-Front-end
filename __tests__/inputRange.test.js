/** @jest-environment jsdom */
import React from "react"
import { render, screen } from "@testing-library/react"
import InputRange from "../src/components/InputRange/index"
import "@testing-library/jest-dom";

test("should be input range and datalist element", () => {
    render(<InputRange />)
    // const input = screen.queryByTestId("range");
    expect(document.getElementById("range")).toBeInTheDocument();
    expect(document.getElementById("tickmarks")).toBeInTheDocument();
});

