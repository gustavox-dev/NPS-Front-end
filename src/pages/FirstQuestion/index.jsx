import React from "react";
import {
  Container,
  Content,
  ContentAvaliation,
  TitleAvaliation,
  QuestionText,
  Buttons,
  LinkStyled,
  TextRequired
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
  const [userNote, setUserNote] = useState();
  const [userOpinion, setUserOpinion] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    api.get("/api/question/3").then((res) => {
      setQuestions(res.data);
    }).catch(error => {
      alert("Questão não encontrada no banco de dados", error.message);
    });
    reqValidator
  }, []);

  const config = {
    userNote: userNote,
    userOpinion: userOpinion,
    question: questions.id
  }

  const post = () => {
    // reqValidator()
    api.post("/api/answer", config)
  };

  const reqValidator = () => {
    console.log(config);
    if(config.userNote === undefined || config.userNote === null) {
      windiw.alert("É necessário informar uma nota.")
      setDisabled(true)
    } else if(config.userOpinion === undefined || config.userOpinion === "") {
      windiw.alert("Por favor, nos dê sua opinião.")
      setDisabled(true)
    } else {
      setDisabled(false)
      // localStorage.setItem("userNote", config.userNote)
      // localStorage.setItem("userOpinion", config.userOpinion)
      // localStorage.setItem("question", config.question);
    }
  }
  // console.log(config);

  // const localStorageValue = () => {
  //   localStorage.setItem("userNote", config.userNote)
  //   localStorage.setItem("userOpinion", config.userOpinion)
  //   localStorage.setItem("question", config.question);
  // }

  const disableButton = !userOpinion || !userNote;

  return (
    <Container key={questions.id}>
      <Content>
        <Buttons>
          <img className="close" src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <TitleAvaliation>{questions.title}</TitleAvaliation>
          <QuestionText>{questions.description}</QuestionText>
          {!userNote ? (
            <TextRequired>
              * Campo Obrigatório
            </TextRequired>
          ) : (<></>)}
          <InputRange userNote={userNote} setUserNote={setUserNote} />
          <TextArea userOpinion={userOpinion} setUserOpinion={setUserOpinion} />
          {!userOpinion ? (
            <TextRequired>
              * Campo Obrigatório
            </TextRequired>
          ) : (<></>)}
        </ContentAvaliation>
        <Button className="next-page" disabled={disableButton} onClick={post}>
          <LinkStyled className="next-page-btn" disabled={disableButton} to={disableButton ? "#" : '/secondQuestion'} >
            Proxima
          </LinkStyled>
        </Button>
      </Content>
    </Container>
  );
}

export default FirstQuestion;
