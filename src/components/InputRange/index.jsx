import { InputStyled, DataListStyled } from "./style"

function InputRange() {
    const handleInputChange = (e) => {
        let target = e.target;
        if (e.target.type !== "range") {
          target = document.getElementById("range");
        }
        const min = target.min;
        const max = target.max;
        const val = target.value;
        // console.log(target)
        target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
      };

  return (
    <>
      <InputStyled
        min="1"
        max="10"
        id="range"
        name="nota"
        list="tickmarks"
        onInput={(e) => handleInputChange(e)}
      />

      <DataListStyled id="tickmarks">
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
