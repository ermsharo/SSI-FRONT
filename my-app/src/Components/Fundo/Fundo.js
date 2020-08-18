import React , {useState} from 'react';
import styled, { css } from "styled-components";
import style from "./../../Style/Fundo.scss";
/* formas aqui em baixo */ 
import Oval  from "./Svgs/Oval";
import Diamond from "./Svgs/Diamond";
import Piramide from "./Svgs/Piramide";
import Pontos from "./Svgs/Pontos";
import Hexa from "./Svgs/Hexa";


const FundoBox = styled.div`
  z-index:-10; 
  display:inline-block; 
  height:100%;
  width:100%;
  position: fixed;
  top:0px;
  -webkit-filter: blur(4px);
  -moz-filter: blur(4px);
  -o-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px);
  background-color: rgba(0,0,0, 1);
`;




function Fundo( ) {

  return(
    <div>
      <FundoBox>
        <div className="background">
          <h7><Oval size = {5} color = "#EE82EE"/></h7>

        
          <h7><Oval size = {5} color = "#b5acb4"/></h7>
          <h7><Pontos color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h7>
          <h7><Oval size = {5} color = "#b19cd9"/></h7>
          <h7><Oval size = {5} color = "#8e4785"/></h7>
          <h7><Hexa color1= "#b19cd9" color2 ="#8e4785"/></h7>
          <h7><Piramide color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h7>
          <h7><Hexa color1= "#b19cd9" color2 ="#8e4785"/></h7>
          <h7><Pontos color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h7>
          <h7><Piramide color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h7>
          <h7><Oval size = {5} color = "#b5acb4"/></h7>
          <h7><Hexa color1= "#b19cd9" color2 ="#8e4785"/></h7>

          <h7><Oval size = {5} color = "#b19cd9"/></h7>
          <h7><Oval size = {5} color = "#8e4785"/></h7>
          <h7><Diamond/></h7>

        
        </div>
      </FundoBox>   
    </div>
  ); 
}

export default Fundo;
