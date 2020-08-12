import * as React from "react"

import styled, { css } from "styled-components";


const SvgFill = styled.div`

    fill:white; 
    height:15vw;
    width:auto;

`;


function SvgComponent(props) {
  return (
    <svg height="5vw" viewBox="0 0 512 512" width="5vw" >
      <path
        d="M383.301 31H128.699L0 256l128.699 225H383.3L512 256z"
        fill="#ff8fb8"
      />
      <path d="M512 256L383.301 481H256V31h127.301z" fill="#ff5f96" />
    </svg>
  )
}


export default SvgComponent
