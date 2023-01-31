/** @jest-environment jsdom */
import React from "react"
import { render, screen } from "@testing-library/react"
import TextArea from "../src/components/TextArea"
import "@testing-library/jest-dom";


test('First test', () => {
    render(<TextArea />)

    const textArea = screen.getByPlaceholderText("Deixe sua opinião e melhorias (opcional)");

    expect(textArea).toBeInTheDocument();
})