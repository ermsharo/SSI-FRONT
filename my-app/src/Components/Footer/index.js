import React from 'react';
import { FooterBox, FooterRedesSociais, SocialMediaIcon, SocialMediaBox, Sobre} from './style';

let LinkFacebook = "https://www.facebook.com/ssiusp"; 
let LinkTwitch = "https://www.twitch.tv/each_ssi";
let LinkInstagram = "https://www.instagram.com/semanadesi/"; 
let LinkMail = "mailto:vice.academico@dasiusp.com";

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
