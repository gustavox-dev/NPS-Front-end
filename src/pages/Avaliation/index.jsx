import { Buttons, Container, Content, ContentAvaliation } from "./style";
import Arrow from "../../assets/arrow.svg";
import Close from "../../assets/close.svg";

export function Avaliation() {
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
    <Container>
      <Content>
        <Buttons>
          <img src={Arrow} alt="" />
          <img src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <h1>Avaliação de satisfação</h1>
          <p>
            Em uma escala de 0 a 10, quanto você recomendaria o Portal do
            Desenvolvedor para um amigo ou familiar?
          </p>

          <input
            // value="6"
            // value="5"
            type="range"
            min="1"
            max="10"
            id="range"
            name="nota"
            list="tickmarks"
            onInput={(e) => handleInputChange(e)}
          />

          <datalist id="tickmarks">
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
          </datalist>

          <textarea
            name=""
            placeholder="Deixe sua opinião e melhorias (opcional)"
          ></textarea>
        </ContentAvaliation>
        <button className="next-page">Proxima</button>
      </Content>
    </Container>
  );
}
