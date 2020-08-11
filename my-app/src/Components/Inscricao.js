import React from 'react';

import styled from 'styled-components'


const GenericSize= styled.div`
    width:100%; 
    height:100vh; 
    color:white;
/*     background-color:lightpink;  */
    line-height:50vw; 
    color:black; 
    text-align:center; 
    font-size:60px; 
    font-family:var(--fontTitulo);

`;


function Inscricao() {
  return (
    
    <GenericSize>Inscrição</GenericSize>
  );
}

export default Inscricao;
