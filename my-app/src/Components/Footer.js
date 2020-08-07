import React from 'react';
import styled from 'styled-components';

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
  grid-template-columns: 50% 50%; 
  width: 40%; 
  margin:auto; 
  margin-top:20px; 
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

let LinkFacebook = "https://www.facebook.com/ssiusp"; 
let LinkTwitch = "https://www.twitch.tv/each_ssi";
let LinkInstagram = "https://www.instagram.com/semanadesi/"; 
let LinkMail = "#mail";

function Footer() {
  return (
    
    <>
      <FooterBox>
        <FooterRedesSociais> 
          <h1>Siga nosso canal na Twitch!</h1>
          <SocialMediaIcon>
            <a href={LinkTwitch} target="_blank" rel="noopener noreferrer">
              <i class="fa fa-twitch" aria-hidden="true"></i>
            </a>
          </SocialMediaIcon>
        </FooterRedesSociais>
        <FooterRedesSociais>
          <h1>Acompanhe nossas redes sociais!</h1>
          <p>
            <SocialMediaBox>
              <SocialMediaIcon>
                <a href={LinkFacebook} target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </SocialMediaIcon>
              <SocialMediaIcon>
                <a href={LinkInstagram} target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </SocialMediaIcon>
            </SocialMediaBox>
          </p>
        </FooterRedesSociais>
        <FooterRedesSociais>
          <h1>Para mais informações, entre em contato!</h1>
          <p>
            <SocialMediaIcon>
              <a href={LinkMail} target="_blank" rel="noopener noreferrer">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </SocialMediaIcon>
          </p>
        </FooterRedesSociais>
      </FooterBox>
      <div>
        <Sobre>
          SSI ONLINE
          <div>2020</div>
        </Sobre>
      </div> 
    </>
  );
}

export default Footer;
