import * as React from "react"

import styled, { css } from "styled-components";

function SvgComponent({color1, color2, color3}) {
  return (
    <svg viewBox="0 0 431.543 431.543" >
      <path
        fill={color1}
        d="M323.396 289.959v128l.522 1.045 107.625-49.633V240.327z"
      />
      <g fill={color3}>
        <path d="M216.294 240.849l107.102 49.11 108.147-49.632-107.625-49.633v.522zM323.918 62.171L215.771 12.016 107.624 62.171l108.147 49.633z" />
      </g>
      <path
        fill={color1}
        d="M215.771 114.416v126.433h.523l107.624-49.633V62.171l-108.147 49.633z"
      />
      <g fill={color2}>
        <path d="M323.396 292.571v-2.612l-107.102-49.11-.523.522v128.523l107.625 49.633.522-.523-.522-1.045zM215.249 240.849h.522V111.804L107.624 62.171v129.045z" />
      </g>
      <path
        fill={color1}
        d="M215.249 240.849l-107.102 49.11v128l.522 1.045 107.102-49.11V241.371z"
      />
      <path
        fill={color2}
        d="M108.147 292.571v-2.612L0 240.327v129.044l108.147 50.156.522-.523-.522-1.045z"
      />
      <path
        fill={color3}
        d="M215.249 240.849l-107.625-49.633v-.522L0 240.327l108.147 49.632z"
      />
    </svg>
  )
}

export default SvgComponent
