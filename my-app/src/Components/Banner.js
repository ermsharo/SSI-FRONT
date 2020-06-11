import React from 'react';
import styled, { css } from 'styled-components'

const BannerBox = styled.div`
 
width: 100vw;
background-color:white;
height:auto; 
margin-top:0px;



`;

function Banner() {
  return (
    
    <BannerBox><img  style ={{width:'100%',height:'auto'}} src = "https://static.vecteezy.com/system/resources/previews/001/058/378/non_2x/purple-gradient-overlapping-shape-horizontal-banner-vector.jpg"></img></BannerBox>
  );
}

export default Banner;
