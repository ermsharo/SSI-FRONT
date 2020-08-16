import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, LogoStyle } from './style';
import LogoEACH from '../../assets/img/logoEACHBranco.svg';
import LogoSI from '../../assets/img/logoSiteSIBranco.svg';
import LogoUSP from '../../assets/img/logoUSPBranco.svg';
import LogoDASI from '../../assets/img/Brasao-DASI-Branco.svg'

function Apoio() {
  return (
    <GenericSize>
      <Titulo>Apoio</Titulo>
        <ItemSpace>
            <Item>
                <a href="http://www.each.usp.br/si/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                    <LogoStyle src={LogoSI} class="logo" alt="Logo 1"/>
                </a>
            </Item>
            <Item>
                <a href="http://www5.each.usp.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                    <LogoStyle src={LogoEACH} class="logo" alt="Logo 1"/>
                </a>
            </Item>
            <Item>
                <a href="https://www5.usp.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                    <LogoStyle src={LogoUSP} class="logo" alt="Logo 1"/>
                </a>
            </Item>
        </ItemSpace>
        <ItemSpace style={{width: "800px", maxWidth: "90%"}}>
            <Item>
                <a href="https://dasiusp.com/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                    <LogoStyle src={LogoDASI} class="logo" alt="Logo 1"/>
                </a>
            </Item>
            <Item>
                <a href="http://www.sintesejr.com.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                    <LogoStyle src={LogoEACH} class="logo" alt="Logo 1"/>
                </a>
            </Item>
        </ItemSpace>
        {/*
        <ItemSpace>
            <Item style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <a href="http://www.each.usp.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                    <center>
                        <LogoStyle src={LogoEACH} alt=""/>
                    </center>
                </a>
            </Item>
            <Item>
                <a href="https://www5.usp.br/" style={{display:"block", margin:"auto"}} target="_blank" rel="noopener noreferrer">
                    <center>
                        <LogoStyle src={LogoUSP} alt=""/>
                    </center>
                </a>
            </Item>
        </ItemSpace>
        <a href="http://www.each.usp.br/si/" target="_blank" rel="noopener noreferrer">
            <img src={LogoSI} style={{width:"600px", maxWidth:"100%"}} alt=""/>
        </a>
        */}
    </GenericSize>
  );
}

export default Apoio;
