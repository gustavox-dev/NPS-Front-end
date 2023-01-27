/** @jest-environment jsdom */
import { render } from "@testing-library/react"
import React from "react"
import TextArea from "../src/components/TextArea"
// import { render, screen } from "@testing-library/react"


test('First test', () => {
    const { getByPlaceholderText } = render(<TextArea />)
    expect(getByPlaceholderText('Deixe sua opinião e melhorias (opcional)')).toBeTruthy();
})