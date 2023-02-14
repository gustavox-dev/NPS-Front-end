import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal';
import { api } from '../../services/api';
import { Container } from './styles';

export const Questions = () => {
  const [questions, setQuestions] = useState('');
  const { id } = useParams();
  useEffect(() => {
    api.get(`/api/satisfactionRating/${id}/questions`).then((res) => {
      setQuestions(res.data);
    }).catch(error => {
      alert("Pesquisa não encontrada no banco de dados", error.message);
    });
  }, []);

  if (!questions) {
    return <div>Loading...</div>
  }
  // const listOfQuestions = questions.questions;
  // console.log("Lista de questões: ", listOfQuestions)

  console.log("Questions: ==== ", questions)
  return (
    <>
      <Container>
        <Modal questions={questions} />
      </Container>
      {/* {questions.map((item) => {
        // const idParam = id == item;
        return (
          
        )
      })} */}


    </>
  )
}