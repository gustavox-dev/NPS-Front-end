import React from "react";
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
  const [postQuestions, setPostQuestions] = useState("");
  const [userNote, setUserNote] = useState("");
  const [userOpinion, setUserOpinion] = useState("");

  useEffect(() => {
    api.get("/api/question/3").then((res) => {
      setQuestions(res.data);
    });

  }, []);

  const post = () => {
    const config = {
      userNote: userNote,
      userOpinion: userOpinion,
      question: questions.id
    }
    
    api.post("/api/answer", config)
  };

  
  return (
    <Container key={questions.id}>
      <Content>
        <Buttons>
          <img className="close" src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <TitleAvaliation>{questions.title}</TitleAvaliation>
          <QuestionText>{questions.description}</QuestionText>
          <InputRange userNote={userNote} setUserNote={setUserNote} />
          <TextArea userOpinion={userOpinion} setUserOpinion={setUserOpinion} />
        </ContentAvaliation>
        <Button className="next-page" >
          <Link className="next-page-btn" to="/secondQuestion" onClick={post}>Proxima</Link>
        </Button>
      </Content>
    </Container>
  );
}

export default FirstQuestion;
