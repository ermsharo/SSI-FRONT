import React from 'react';
import VideoFundo from '../../assets/fundo.mp4';
import LogoSSI from '../../assets/img/logo.png';
import TituloSSI from '../../assets/img/titulo.png';
import { GenericSize, FundoBanner, LogoStyleSSI, TituloStyleSSI, SocialAreaBanner, SocialButton, ButtonBanner, ButtonAreaBanner } from './style';

function Banner() {

  return (
    <GenericSize>
        <FundoBanner>
            <video autoplay muted loop>
                <source src={VideoFundo} type="video/mp4" />
            </video>
        </FundoBanner>
        <LogoStyleSSI src={LogoSSI} alt="Logo SSI" id="logoBanner" />
        <TituloStyleSSI src={TituloSSI} alt="Titulo SSI" id="logoBanner" />
        <SocialAreaBanner>
            <span>
                <SocialButton href="#">
                   <i class="fa fa-facebook" aria-hidden="true"></i>
                </SocialButton>
            </span>
            <span>
                <SocialButton href="#">
                   <i class="fa fa-twitch" aria-hidden="true"></i>
                </SocialButton>
            </span>
            <span>
                <SocialButton href="#">
                   <i class="fa fa-instagram" aria-hidden="true"></i>
                </SocialButton>
            </span>
        </SocialAreaBanner>
        <ButtonAreaBanner>
            <ButtonBanner href="#informacoes">
                Informações
            </ButtonBanner>
            <ButtonBanner href="#inscricao">
                Inscrição
            </ButtonBanner>
        </ButtonAreaBanner>
    </GenericSize>
  );
}

export default Banner;
