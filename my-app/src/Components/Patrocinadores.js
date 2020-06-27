import React from 'react';
import styled, { css } from 'styled-components'


const GenericSize= styled.div`
    width:100vw; 
    height:100vh; 
    color:white;
    background-color:lightblue; 
    line-height:50vw; 
    color:black; 
    text-align:center; 
    font-size:60px; 
    font-family:var(--fontTitulo);

`;

function Patrocinadores() {
  return (
    
    <GenericSize>Patrocinadores</GenericSize>
  );
}

export default Patrocinadores;
