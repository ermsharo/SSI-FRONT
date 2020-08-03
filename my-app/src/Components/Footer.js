import React from 'react';
import styled, { css } from 'styled-components'



function Footer() {
  
  const FooterBox = styled.div`
  width: 100%;
  background-color:white;
  color: black; 
  display:grid; 
  grid-template-columns: 33.3% 33.3% auto;
  font-family:  var(--fontCorpo); 
  padding-top: 15px; 
  font-size:14px; 
  text-align:center; 
  h1{
/*     text-transform:uppercase; */
    font-family:  var(--fontCorpo); 
    font-size:15px; 
  }
  @media(max-width: 992px){

  display:grid; 
  grid-template-columns: 100%;
  grid-row-gap:5vw;


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
border:2px solid pink;

h1{
  font-size: 15px; 

}


`;


const FooterApoioImagem = styled.img`

width:75%; 
height:auto;
margin:auto; 



`;

const FooterApoioBox = styled.div`
width:90%;
margin:auto;  

display:grid; 
grid-template-columns:50% 50%; 
/*  margin: blue 2px solid;  */





@media(max-width:922px){
  grid-template-columns:100%; 
  width :60%;
}

`;

const SocialMediaIcon = styled.div`


  i{
    font-size:44px; 
    padding-bottom:30px; 
 
 :hover{
  color:darkgray;
 }
  } 



`;

const SocialMediaBox = styled.div`
  display:grid; 
  grid-template-columns:50% 50%; 
  width: 40%; 
  margin:auto; 
  margin-top:20px; 


`;


const SocialMidiaIconLine= styled.div`



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
font-size:12px; 
`;


let LinkFacebook = "www.google.com"; 
let LinkTwitch; 
let LinkInstagram; 
let LinkMail; 





  

  return (
<div>
    <FooterBox>
      <FooterEndereco> 
        <h1>Extra</h1>
       <p> Well, the way they make shows is
       <div>they make one show.</div>
      <div>That show's called a pilot.</div> 
      <div>Then they show that show </div>
       <div> 505</div> </p>
      </FooterEndereco>
      <FooterRedesSociais>
      <h1>Siga a gente</h1>

      <p>
        <SocialMediaBox>
      <SocialMediaIcon> <a href = {LinkFacebook}><i class="fa fa-facebook" aria-hidden="true"></i></a></SocialMediaIcon>
      <SocialMediaIcon> <a href = {LinkFacebook}><i class="fa fa-twitch" aria-hidden="true"></i></a></SocialMediaIcon>
      <SocialMediaIcon> <a href = {LinkFacebook}><i class="fa fa-instagram" aria-hidden="true"></i></a></SocialMediaIcon>
      <SocialMediaIcon> <a href = {LinkFacebook}><i class="fa fa-envelope" aria-hidden="true"></i></a></SocialMediaIcon>
     </SocialMediaBox>
    </p>
      </FooterRedesSociais>
<div>
      <h1>Apoio</h1>
<div>      
<FooterApoioBox>


<FooterApoioImagem src = "data:image/png;base64,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"></FooterApoioImagem>  
<FooterApoioImagem src = "https://inforex.com.br/wp-content/uploads/2019/06/Microsoft-traz-tecnologias-para-o-banco-digital-do-futuro-no-CIAB-Febraban-2019.png"></FooterApoioImagem>  
<FooterApoioImagem src = "https://code.visualstudio.com/assets/favicon.ico"></FooterApoioImagem>
<FooterApoioImagem src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Disney_XD_-_2015_%28Purple%29.svg/792px-Disney_XD_-_2015_%28Purple%29.svg.png"></FooterApoioImagem>  
</ FooterApoioBox>
</div>
</div>

      


</FooterBox>

   <div>    <Sobre>SSI ONLINE<div>2020</div></Sobre></div>
    
</div>
  );
}

export default Footer;
