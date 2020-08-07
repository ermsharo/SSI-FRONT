import React from 'react';
import LogoSSI from '../../assets/img/logoSSISemFundoComCinza.svg';
import TituloSSI from '../../assets/img/SSITituloSemFundo.svg';
import { GenericSize, LogoStyleSSI, TituloStyleSSI, SocialAreaBanner, SocialButton, ButtonBanner, ButtonAreaBanner } from './style';

let LinkFacebook = "https://www.facebook.com/ssiusp"; 
let LinkTwitch = "https://www.twitch.tv/each_ssi";
let LinkInstagram = "https://www.instagram.com/semanadesi/"; 

function Banner(props) {
  return (
    <GenericSize>
        <LogoStyleSSI src={LogoSSI} alt="Logo SSI" id="logoBanner" />
        <TituloStyleSSI src={TituloSSI} alt="Titulo SSI" id="logoBanner" />
        <SocialAreaBanner>
            <span>
                <SocialButton href={LinkFacebook} target="_blank" rel="noopener noreferrer">
                   <i class="fa fa-facebook" aria-hidden="true"></i>
                </SocialButton>
            </span>
            <span>
                <SocialButton href={LinkTwitch} target="_blank" rel="noopener noreferrer">
                   <i class="fa fa-twitch" aria-hidden="true"></i>
                </SocialButton>
            </span>
            <span>
                <SocialButton href={LinkInstagram} target="_blank" rel="noopener noreferrer">
                   <i class="fa fa-instagram" aria-hidden="true"></i>
                </SocialButton>
            </span>
        </SocialAreaBanner>
        <ButtonAreaBanner>
            <ButtonBanner onClick={props.handleClickInfo}>
                Informações
            </ButtonBanner>
            <ButtonBanner onClick={props.handleClickInscricao}>
                Inscrição
            </ButtonBanner>
        </ButtonAreaBanner>
    </GenericSize>
  );
}

export default Banner;
