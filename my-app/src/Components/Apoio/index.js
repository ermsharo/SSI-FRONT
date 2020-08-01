import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, LogoStyle } from './style';
import LogoEACH from '../../assets/img/logoEACH.png';
import LogoSI from '../../assets/img/logoSI.png';
import LogoUSP from '../../assets/img/logoUSP.png';

function Apoio() {
  return (
    <GenericSize>
      <Titulo>Apoio</Titulo>
        <ItemSpace>
            <Item style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <a href="http://www.each.usp.br/" target="_blank" rel="noopener noreferrer">
                    <center>
                        <LogoStyle src={LogoEACH} alt=""/>
                    </center>
                </a>
            </Item>
            <Item>
                <a href="https://www5.usp.br/" target="_blank" rel="noopener noreferrer">
                    <center>
                        <LogoStyle src={LogoUSP} alt=""/>
                    </center>
                </a>
            </Item>
        </ItemSpace>
        <a href="http://www.each.usp.br/si/" target="_blank" rel="noopener noreferrer">
            <img src={LogoSI} style={{width:"100%"}} alt=""/>
        </a>
    </GenericSize>
  );
}

export default Apoio;
