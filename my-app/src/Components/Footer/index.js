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
          <>
            <a href={LinkTwitch} target="_blank" rel="noopener noreferrer">
              <SocialMediaIcon className="fa fa-twitch" aria-hidden="true"></SocialMediaIcon>
            </a>
          </>
        </FooterRedesSociais>
        <FooterRedesSociais>
          <h1>Acompanhe nossas redes sociais!</h1>
          <SocialMediaBox>
            <>
              <a href={LinkFacebook} target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon className="fa fa-facebook" aria-hidden="true"></SocialMediaIcon>
              </a>
            </>
            <>
              <a href={LinkInstagram} target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon className="fa fa-instagram" aria-hidden="true"></SocialMediaIcon>
              </a>
            </>
          </SocialMediaBox>
        </FooterRedesSociais>
        <FooterRedesSociais>
          <h1>Para mais informações, entre em contato!</h1>
          <p>
            <>
              <a href={LinkMail} target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon className="fa fa-envelope" aria-hidden="true"></SocialMediaIcon>
              </a>
            </>
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
