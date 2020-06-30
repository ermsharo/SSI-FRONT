import React from 'react';
import styled, { css } from 'styled-components'

function Banner() {

const GenericSize= styled.div`
     width:100vw; 
    height:100vh; 
    color:white;
    background-color:lightgoldenrodyellow; 
    line-height:50vw; 
    color:black; 
    text-align:center; 
    font-size:60px; 
    font-family:var(--fontTitulo);
`;

  return (
    <GenericSize>
    Banner
    </GenericSize>
  );
}

export default Banner;
