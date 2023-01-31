import React from "react";
import { useEffect, useState } from "react";
import { InputStyled, DataListStyled } from "./style"

function InputRange({ onClick, userNote, setUserNote }) {
  // const [targetValue, setTargetValue] = useState()

  useEffect(() => {
    handleInputChange;
  }, []);

  const handleInputChange = (e) => {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    setUserNote(target.value)
  };
  console.log(userNote)
  return (
    <>
      <InputStyled
        min="0"
        max="10"
        id="range"
        name="nota"
        list="tickmarks"
        onInput={(e) => handleInputChange(e)}
      />

      <DataListStyled id="tickmarks">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </DataListStyled>
    </>
  );
}

export default InputRange;
