import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, LogoStyle } from './style';
import LogoAlura from '../../assets/img/patrocinio/ciaDeEstagios.svg';
import LogoCia from '../../assets/img/patrocinio/ciadeestagios.png';
import LogoClear from '../../assets/img/patrocinio/clearsaleBranco2.svg';
import LogoCWI from '../../assets/img/patrocinio/clearsaleBranco2.svg';
import LogoDataBootCamp from '../../assets/img/patrocinio/databootcamp_white.png';
import LogoIntelie from '../../assets/img/patrocinio/intelie.svg';
import LogoKinghost from '../../assets/img/patrocinio/kinghostBranco.svg';
import LogoMicrostrategy from '../../assets/img/patrocinio/microstrategyBranco2.svg';
import LogoNelogica from '../../assets/img/patrocinio/nelogica.svg';
import LogoStone from '../../assets/img/patrocinio/stoneBranco.svg';

function Patrocinadores() {
  return (
    <GenericSize>
      <Titulo>Parceiros</Titulo>
      <ItemSpace>
          {/*
          <Item>
            <a href="https://www.alura.com.br/planos-cursos-online?gclid=EAIaIQobChMI9rrNlqPB6wIVhQ6RCh1lJAAnEAAYASAAEgLvUvD_BwE" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoAlura} class="logo" alt="Logo Alura"/>
            </a>
          </Item>
          */}
          <Item>
            <a href="https://br.clear.sale/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoClear} class="logo" alt="Logo Clear Sale"/>
            </a>
          </Item>
          <Item>
            <a href="https://www.ciadeestagios.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoCia} class="logo" alt="Logo Companhia de Estagios"/>
            </a>
          </Item>
          {/*
          <Item>
            <a href="https://cwi.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoCWI} class="logo" alt="Logo CWI"/>
            </a>
          </Item>
          */}
          <Item>
            <a href="https://databootcamp.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoDataBootCamp} style={{height:"250px", width: "auto"}} class="logo" alt="Logo DataBootCamp"/>
            </a>
          </Item>
          <Item>
            <a href="http://www.intelie.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoIntelie} class="logo" alt="Logo Intelie"/>
            </a>
          </Item>
          <Item>
            <a href="https://king.host/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoKinghost} class="logo" alt="Logo King Host"/>
            </a>
          </Item>
          <Item>
            <a href="https://www.microstrategy.com/br" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoMicrostrategy} class="logo" alt="Logo Microstrategy"/>
            </a>
          </Item>
          <Item>
            <a href="https://www.nelogica.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoNelogica} class="logo" alt="Logo Nelogica"/>
            </a>
          </Item>
          {/*
          <Item>
            <a href="https://www.stone.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoStone} class="logo" alt="Logo Stone"/>
            </a>
          </Item>
          */}
      </ItemSpace>
    </GenericSize>
  );
}

export default Patrocinadores;
