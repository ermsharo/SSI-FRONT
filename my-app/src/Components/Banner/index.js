import React, { Component } from 'react';
import LogoSSI from '../../assets/img/logoSSISemFundoComCinza.svg';
import TituloSSI from '../../assets/img/SSITituloSemFundo.svg';
import { GenericSize, LogoStyleSSI, TituloStyleSSI, SocialAreaBanner, SocialButton, ButtonBanner, ButtonAreaBanner, FundoModal, ModalBase, ButtonModal } from './style';

let LinkFacebook = "https://www.facebook.com/ssiusp"; 
let LinkTwitch = "https://www.twitch.tv/each_ssi";
let LinkInstagram = "https://www.instagram.com/semanadesi/"; 

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "display-block" : "display-none";

  return (
    <FundoModal className={showHideClassName} onClick={handleClose}>
      <ModalBase>
        As inscrições começam apenas no dia XX/XX!
        <ButtonModal onClick={handleClose}>Beleza!</ButtonModal>
      </ModalBase>
    </FundoModal>
  );
};

class Banner extends Component {
  
  state = { show: false };
  
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    return (
      <GenericSize>
          <Modal show={this.state.show} handleClose={this.hideModal} />
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
              <ButtonBanner onClick={this.props.handleClickInfo}>
                  Informações
              </ButtonBanner>
              <ButtonBanner onClick={this.showModal}>
                  Inscrição
              </ButtonBanner>
          </ButtonAreaBanner>
      </GenericSize>
    );
  }
}

export default Banner;
