import React from "react";
import {
  Container,
  Content,
  ContentAvaliation,
  TitleAvaliation,
  QuestionText,
  Buttons,
} from "../FirstQuestion/style";
import Arrow from "../../assets/arrow.svg";
import Close from "../../assets/close.svg";
import { Button } from "../../components/Button";
import InputRange from "../../components/InputRange";
import TextArea from "../../components/TextArea";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SecondQuestion() {
  const [questions, setQuestions] = useState("");
  const [userNote, setUserNote] = useState("");
  const [userOpinion, setUserOpinion] = useState("");

  useEffect(() => {
    requestPage()
  }, []);


  function requestPage() {
    api.get("/api/question/4").then((res) => {
      setQuestions(res.data);
    }).catch(error => {
      alert("Questão não encontrada no banco de dados", error.message);
    });
  }

  const config = {
    userNote: userNote,
    userOpinion: userOpinion,
    question: questions.id
  }

  const post = () => {
    
    
    api.post("/api/answer", config)
  };

  return (
    <Container key={questions.id}>
      <Content>
        <Buttons>
          <Link to="/">
            <img className="arrow" src={Arrow} alt="" />
          </Link>
          <img src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <TitleAvaliation>{questions.title}</TitleAvaliation>
          <QuestionText>{questions.description}</QuestionText>
          <InputRange userNote={userNote} setUserNote={setUserNote} />
          <TextArea userOpinion={userOpinion} setUserOpinion={setUserOpinion} />
        </ContentAvaliation>
        <Button className="next-page">
          <Link className="previus-page" to="/">Voltar</Link>
          <Link className="next-page-btn" to="/thirdQuestion" onClick={post}>Proxima</Link>
        </Button>
        
      </Content>
    </Container>
  );
}

export default SecondQuestion;
