import React , {useState} from 'react';
import styled, { css } from "styled-components";
import style from "./../Style/Fundo.scss";


const FundoBox = styled.div`

   background-color:green;  
    z-index:-10; 
    display:inline-block; 
    height:100%;
    width:100%;
    position: fixed;
    top:0px;
`;




function Fundo( ) {

  return(<div>
<FundoBox>
<div className="background">
  <span><img src ="https://ichef.bbci.co.uk/news/410/cpsprodpb/EB24/production/_112669106_66030514-b1c2-4533-9230-272b8368e25f.jpg"/></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
 </FundoBox>   


  </div>); 
}

export default Fundo;
