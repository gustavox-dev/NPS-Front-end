import {
  Container,
  Content,
  ContentAvaliation,
  IconSuccess,
  TitleAvaliation,
  QuestionText,
  Buttons,
} from "../FirstQuestion/style";
import success from "../../assets/success.svg";
import { Button } from "../../components/Button";
import Close from "../../assets/close.svg";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";


function Success() {
  const [successResponse, setSuccessResponse] = useState("")

  useEffect(() => {
    api.get("/api/answer").then(response => {
        setSuccessResponse(response.data);
      }).catch(error => {
        alert("Erro ao buscar a lista de resposta no banco de dados", error.message);
      });
  }, [])

  
  return (
    <Container>
      <Content>
        <Buttons className="close-modal-success">
            <img src={Close} alt="" />
        </Buttons>
        <ContentAvaliation>
          <IconSuccess>
            <img src={success} alt="" />
          </IconSuccess>
          <TitleAvaliation>
            Sua avaliação foi enviada com sucesso!
          </TitleAvaliation>
          <QuestionText>
            Esta avaliação ajuda a melhorarmos a sua experiência. Muito obrigado
            pela sua participação
          </QuestionText>
        </ContentAvaliation>
        <Button className="next-page">Concluir</Button>
      </Content>
      {console.table(successResponse)}
    </Container>
  );
}

export default Success;
