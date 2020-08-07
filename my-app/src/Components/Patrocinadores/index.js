import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, LogoStyle } from './style';
import LogoPatrocinio from '../../assets/img/logoPatrocinio.png';

function Patrocinadores() {
  return (
    <GenericSize>
      <Titulo>Patrocinio</Titulo>
      <ItemSpace>
          <Item>
            <a href="#patrocinio" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="#patrocinio" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="#patrocinio" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="#patrocinio" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="#patrocinio" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="#patrocinio" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
            </a>
          </Item>
          <Item>
            <a href="#patrocinio" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
            </a>
          </Item>
      </ItemSpace>
    </GenericSize>
  );
}

export default Patrocinadores;
