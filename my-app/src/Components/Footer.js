import React from 'react';
import styled, { css } from 'styled-components'



function Footer() {
  
  const FooterBox = styled.div`
  width: 100%;
  background-color:white;
  color: black; 
  display:grid; 
  grid-template-columns: 33.3% 33.3% 33.3%;
  font-family:  var(--fontCorpo); 
  padding-top: 15px; 
  font-size:14px; 
  text-align:center; 
  h1{
    text-transform:uppercase;
    font-family:  var(--fontTitulo); 
    font-size:16px; 
  }
  @media(max-width: 960px){

  display:grid; 
  grid-template-columns: 100%;


  }
  `;
  
  const FooterEndereco = styled.div`
  background-color:white;
  color: black; 
  text-align:center; 

 
  `;

   
const FooterRedesSociais = styled.div`
background-color:white;
color: black; 


a{
  line-height:25px; 
  text-decoration:none; 
  color:black; 
  font-size:16px; 
}
`;

const FooterApoio = styled.div`


`;


const FooterApoioBox = styled.div`
display:grid; 
grid-template-columns:60% 40%; 
padding-left:10%;
padding-right:10%; 
grid-row-gap:10px;

`;

const SocialMidiaIcon = styled.div`

  width:30px; 
  height:auto; 
  margin-right:10px; 

`;

const SocialMidiaIconLine= styled.div`

  display:flex;
  text-align:left; 
  margin:auto; 
  width: 50%;
  

`;



const SocialMidiaPadding= styled.div`

padding-top:4px; 
font-weight:2px; 

`;


const Sobre= styled.div`

width:100%; 
text-align:center; 
text-transform:uppercase;
background-color:white;
padding-top:10px;
font-family:var(--fontTitulo);
font-weight:bold;
padding-bottom:10px; 
`;





  

  return (
    <div>
    <FooterBox>
      <FooterEndereco> 
        <h1>Endereco</h1>
       <p> Well, the way they make shows is
       <div>they make one show.</div>
      <div>That show's called a pilot.</div> 
      <div>Then they show that show </div>
       <div> 505</div> </p>
      </FooterEndereco>
      <FooterRedesSociais>
      <h1>Siga a gente</h1>

      <p>
     <a href = "#"> <SocialMidiaIconLine><SocialMidiaIcon><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSkDPnw-g88-_cRQ_3JgNWmaMt8OXljpcyl2FqYs-n2W7JDJa5&usqp=CAU" style = {
        {width:'100%',
         height:'auto',
      }
      }></img></SocialMidiaIcon><SocialMidiaPadding>Facebook</SocialMidiaPadding></SocialMidiaIconLine></a>
    
    <a href = "#"> <SocialMidiaIconLine><SocialMidiaIcon><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSkDPnw-g88-_cRQ_3JgNWmaMt8OXljpcyl2FqYs-n2W7JDJa5&usqp=CAU" style = {
        {width:'100%',
         height:'auto',
      }
      }></img></SocialMidiaIcon><SocialMidiaPadding>Facebook</SocialMidiaPadding></SocialMidiaIconLine></a>
           <a href = "#"> <SocialMidiaIconLine><SocialMidiaIcon><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSkDPnw-g88-_cRQ_3JgNWmaMt8OXljpcyl2FqYs-n2W7JDJa5&usqp=CAU" style = {
        {width:'100%',
         height:'auto',
      }
      }></img></SocialMidiaIcon><SocialMidiaPadding>Facebook</SocialMidiaPadding></SocialMidiaIconLine></a>
           <a href = "#"> <SocialMidiaIconLine><SocialMidiaIcon><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSkDPnw-g88-_cRQ_3JgNWmaMt8OXljpcyl2FqYs-n2W7JDJa5&usqp=CAU" style = {
        {width:'100%',
         height:'auto',
      }
      }></img></SocialMidiaIcon><SocialMidiaPadding>Facebook</SocialMidiaPadding></SocialMidiaIconLine></a>
    </p>
      </FooterRedesSociais>
      <FooterApoio>
<h1>Apoio</h1>
<FooterApoioBox>
<img style = {{width: '100%',height:'auto'}}src = "https://lh3.googleusercontent.com/proxy/miRKKDER1asxCKexgx-ayVJi_Bdrl861B4fjjzBo6e-3vDzP31G59vkKVX2bFYzKzV4G3rd3eASoampMYHOUcggaHu1djL4_1o7YP6mvB1NSPB-o4odZmYPkBaG9wL46G3HBc9D4QzeGEA"></img>  
<img style = {{width: '100%',height:'auto'}}src = "https://lh3.googleusercontent.com/proxy/lrlsoXyuVU7kgr_4onzxZH1v6gXi8QNFeAcfHQ2m06UH3ilLQD1onTsxi3x2uH_jXmLF8tc_Vke0DwTIELvxAyVDWUGkvs6F1Vj_HSCJYM3Z40V1_JQjVaSl9nWkSF061B-0HZAEGs2FpAfEVuqn"></img>  
</FooterApoioBox>
  
      </FooterApoio>
  
      </FooterBox>
       <Sobre>SSI ONLINE<div>2020</div></Sobre>
       </div>
  );
}

export default Footer;
