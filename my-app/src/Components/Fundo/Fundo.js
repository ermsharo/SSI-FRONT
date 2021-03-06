import React  from 'react';
import styled from "styled-components";
import "../../Style/Fundo.scss";
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
`;

const FundoEscuro = styled.div`
  z-index:-9;
  display:inline-block;
  height:100%;
  width:100%;
  position: fixed;
  top:0px;
  background-color: rgba(0,0,0, 0.2);
`;


function Fundo( ) {

  return(
    <div>
      <FundoEscuro />
      <FundoBox>
        <div className="background">
          <h6><Oval size = {5} color = "#EE82EE"/></h6>

        
          <h6><Oval size = {5} color = "#b5acb4"/></h6>
          <h6><Pontos color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h6>
          <h6><Oval size = {5} color = "#b19cd9"/></h6>
          <h6><Oval size = {5} color = "#8e4785"/></h6>
          <h6><Hexa color1= "#b19cd9" color2 ="#8e4785"/></h6>
          <h6><Piramide color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h6>
          <h6><Hexa color1= "#b19cd9" color2 ="#8e4785"/></h6>
          <h6><Pontos color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h6>
          <h6><Piramide color1 = "#b5acb4" color2= "#b19cd9" color3 = "#8e4785"/></h6>
          <h6><Oval size = {5} color = "#b5acb4"/></h6>
          <h6><Hexa color1= "#b19cd9" color2 ="#8e4785"/></h6>

          <h6><Oval size = {5} color = "#b19cd9"/></h6>
          <h6><Oval size = {5} color = "#8e4785"/></h6>
          <h6><Diamond/></h6>

        
        </div>
      </FundoBox>   
    </div>
  ); 
}

export default Fundo;
