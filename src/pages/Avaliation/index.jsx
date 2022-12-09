import { Buttons, Container, Content, ContentAvaliation } from "./style";
import Arrow from '../../assets/arrow.svg'
import Close from '../../assets/close.svg'

export function Avaliation() {
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

          <input type="range" min="1" max="10" />
          <ul>
            <li><span>1</span></li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>

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
