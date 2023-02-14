import React, { useState, useEffect } from "react";
import { Container, Content, ContentAvaliation, TitleAvaliation, QuestionText, Buttons, LinkStyled, TextRequired } from "./styles";
import Arrow from "../../assets/arrow.svg";
import Close from "../../assets/close.svg";
import { Button } from "../../components/Button";
import InputRange from "../../components/InputRange";
import TextArea from "../../components/TextArea";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

function Modal({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userNote, setUserNote] = useState(null);
  const [userOpinion, setUserOpinion] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setUserNote(null);
    setUserOpinion("");
    setDisabled(true);
  }, [questionIndex]);

  const question = questions[questionIndex];

  const config = {
    userNote: userNote,
    userOpinion: userOpinion,
    question: question.id
  }

  console.log("Question: ", question);
  console.log("Config: ", config);

  const post = () => {
    api.post("/api/answer", config);
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const disableButton = !userOpinion || !userNote;

  return (
    <Container>
      <Content>
        <Buttons>
          <img className="close" src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <TitleAvaliation>{question.title}</TitleAvaliation>
          <QuestionText>{question.description}</QuestionText>
          {!userNote ? (
            <TextRequired>
              * Campo Obrigatório
            </TextRequired>
          ) : null}
          <InputRange userNote={userNote} setUserNote={setUserNote} />
          <TextArea userOpinion={userOpinion} setUserOpinion={setUserOpinion} />
          {!userOpinion ? (
            <TextRequired>
              * Campo Obrigatório
            </TextRequired>
          ) : null}
        </ContentAvaliation>
        <Button className="next-page" disabled={disableButton} onClick={post}>
          {questionIndex < questions.length - 1 ? (
            <LinkStyled className="next-page-btn" disabled={disableButton} onClick={nextQuestion}>
              Próxima
            </LinkStyled>
          ) : (
            <LinkStyled className="next-page-btn" disabled={disableButton} to={`/success`}>
              Finalizar
            </LinkStyled>
          )}
        </Button>
      </Content>
    </Container>
  );
}

export default Modal;




