import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, LogoStyle } from './style';
import LogoCia from '../../assets/img/patrocinio/ciaDeEstagios.svg';
import LogoClear from '../../assets/img/patrocinio/clearsaleBranco2.svg';
import LogoIntelie from '../../assets/img/patrocinio/intelie.svg';
import LogoKinghost from '../../assets/img/patrocinio/kinghostBranco.svg';
import LogoMicrostrategy from '../../assets/img/patrocinio/microstrategyBranco2.svg';
import LogoNelogica from '../../assets/img/patrocinio/nelogica.svg';
import LogoStone from '../../assets/img/patrocinio/stoneBranco.svg';

function Patrocinadores() {
  return (
    <GenericSize>
      <Titulo>Patrocínio</Titulo>
      <ItemSpace>
          <Item>
            <a href="https://www.ciadeestagios.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoCia} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="https://br.clear.sale/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoClear} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="http://www.intelie.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoIntelie} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="https://king.host/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoKinghost} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="https://www.microstrategy.com/br" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoMicrostrategy} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="https://www.nelogica.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoNelogica} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="https://www.stone.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoStone} class="logo" alt="Logo 1"/>
            </a>
          </Item>
      </ItemSpace>
    </GenericSize>
  );
}

export default Patrocinadores;
