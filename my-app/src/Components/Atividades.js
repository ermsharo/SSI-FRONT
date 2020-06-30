import React from 'react';

import styled, { css } from 'styled-components'


const GenericSize= styled.div`
    width:100vw; 
    height:100vh; 
    color:white;
    background-color:lightyellow; 
    line-height:50vw; 
    color:black; 
    text-align:center; 
    font-size:60px; 
    font-family:var(--fontTitulo);

`;

function Atividades() {
  return (
    
    <GenericSize>Atividades</GenericSize>
  );
}

export default Atividades;
