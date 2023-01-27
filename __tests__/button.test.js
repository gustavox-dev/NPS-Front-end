/** @jest-environment jsdom */
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "../src/components/Button/index"
import "@testing-library/jest-dom";

test("find input range", () => {
    render(<Button />)
    const button = document.querySelector("button");
    
    
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

});