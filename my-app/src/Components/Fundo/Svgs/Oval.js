import * as React from "react"
import styled, { css } from "styled-components";



const SvgFill = styled.div`


`;

function SvgComponent({size, color}) {
  return (
      <SvgFill>
    <svg height= {size+"vw"} viewBox="0 0 512 512" width="auto" >
      <path
        d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0"
        fill={color} 
      />
      <path d="M256 512C114.836 512 0 397.164 0 256S114.836 0 256 0s256 114.836 256 256-114.836 256-256 256zm0-490.668C126.613 21.332 21.332 126.613 21.332 256S126.613 490.668 256 490.668 490.668 385.387 490.668 256 385.387 21.332 256 21.332zm0 0" 
       fill={color} />
    </svg>
    </SvgFill>
  )
}

export default SvgComponent
