import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/66124326?s=460&u=fba398c9d581ebb1f0f9d570c06ed2eea6c30eb5&v=4" alt="Adiel Miranda"/>
      <div>
        <strong>Adiel Miranda</strong>
        <span>Técnologia da Informação</span>
      </div>
    </header>

    <p>
      Entusiasta do mundo developer, com excelentes noções do mundo front-end.  
      <br/> <br/>
      Apaixonado pelas melhores tecnologias, sempre adepto das melhores metodologias e de como implementar as respectivas menções.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato
      </button>
    </footer>

  </article>
  );
}

export default TeacherItem;