import React from 'react';
import { TextAreaStyled } from "./style";

function TextArea({ userOpinion, setUserOpinion }) {

  const handleChange = (e) => {
    const value = e.target.value;
    setUserOpinion(value)
  }

  return (
    <>
      <TextAreaStyled
        name=""
        placeholder="Deixe sua opinião e melhorias (opcional)"
        onChange={e => handleChange(e)}
      />
      

    </>
  );
}

export default TextArea;
