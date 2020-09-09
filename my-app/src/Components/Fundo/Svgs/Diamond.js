import * as React from "react"

import styled from "styled-components";



const SvgFill = styled.div`

    fill:white; 
    height:15vw;
    width:auto;

`;



function SvgComponent(props) {
  return (
    <SvgFill>
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M509.803 250.697l-248.5-248.5a7.5 7.5 0 00-10.606 0L137.053 115.841a7.5 7.5 0 000 10.606 7.5 7.5 0 0010.606 0L256 18.107 493.894 256 256 493.894 18.107 256l108.34-108.34a7.5 7.5 0 000-10.606 7.5 7.5 0 00-10.606 0L2.197 250.697a7.5 7.5 0 000 10.606l248.5 248.5A7.478 7.478 0 00256 512a7.474 7.474 0 005.303-2.197l248.5-248.5a7.497 7.497 0 000-10.606z" />
    </svg>
    </SvgFill>
  )
}

export default SvgComponent
