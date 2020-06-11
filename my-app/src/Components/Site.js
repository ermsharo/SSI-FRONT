import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Programacao from "./Programacao";
import Info from "./Info";
import Atividades from "./Atividades";
import Patrocinadores from "./Patrocinadores";
import Apoio from "./Apoio";
import Inscricoes from "./Inscricao";
import Footer from "./Footer";
import styled, { css } from "styled-components";
/* import "./Style/globalStyle.css"; */
function Site() {
  const HeaderBox = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
  `;

  return (
    <div>
      <Header />
      <Banner />
      <Programacao />
      <Info />
      <Atividades />
      <Patrocinadores />
      <Inscricoes />
      <Footer />
    </div>
  );
}

export default Site;
