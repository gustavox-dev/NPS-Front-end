import {
  Container,
  Content,
  ContentAvaliation,
  TitleAvaliation,
  QuestionText,
  Buttons,
} from "./style";
import Arrow from "../../assets/arrow.svg";
import Close from "../../assets/close.svg";
import { Button } from "../../components/Button";
import InputRange from "../../components/InputRange";
import TextArea from "../../components/TextArea";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FirstQuestion() {
  const [questions, setQuestions] = useState("");

  useEffect(() => {
    api.get("/api/question/3").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  return (
    <Container key={questions.id}>
      <Content>
        <Buttons>
          <img src={Arrow} alt="" />
          <img src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <TitleAvaliation>{questions.title}</TitleAvaliation>
          <QuestionText>{questions.description}</QuestionText>
          <InputRange />
          <TextArea />
        </ContentAvaliation>
        <Button className="next-page">
          <Link to="/secondQuestion">Proxima</Link>
        </Button>
      </Content>
    </Container>
  );
}

export default FirstQuestion;
