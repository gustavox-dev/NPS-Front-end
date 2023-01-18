import { Buttons, Container, Content, ContentAvaliation } from "./style";
import Arrow from "../../assets/arrow.svg";
import Close from "../../assets/close.svg";
import { Button } from "../../components/Button";
import InputRange from "../../components/InputRange";
import TextArea from "../../components/TextArea"
import { api } from "../../api/index"
import { useEffect, useState } from "react";

function FirstQuestion() {
  const [questions, setQuestions] = useState("")

  useEffect(() => {
    api.get("http://localhost:8080/api/question/3")
    .then(res => {
      setQuestions(res.data)
    })
  }, [])

  return (
    <Container key={questions.id}>
      <Content>
        <Buttons>
          <img src={Arrow} alt="" />
          <img src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <h1>{questions.title}</h1>
          <p>
            {questions.description}
          </p>
          <InputRange />

          <TextArea />
        </ContentAvaliation>
        <Button className="next-page">Proxima</Button>
        {/* <Button children={"Proximo"} /> */}
      </Content>
    </Container>
  );
}

export default FirstQuestion;