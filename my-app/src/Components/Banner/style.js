import styled, { keyframes } from 'styled-components';

export const GenericSize= styled.div`
  width:100%; 
  min-height: 100vh; 
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px; 

  
  margin-bottom:20vw; 
  /* background: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(58, 0, 110, 0.5) 50%, rgba(255, 255, 255, 0) 90%); */
`;

export const float = keyframes`
  0% {
   /*    transform: translatey(-10px); */
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-30px);
  }
  100% {
    transform: translatey(0px);
  }
`;

export const LogoStyleSSI= styled.img`
  width: 300px;
  transform: translatey(-10px);
  animation: ${float} 5s ease-in-out infinite;
  margin-bottom: 20px;
  display: inline;
  z-index:-1;
  @media (max-width:530px) {
    width: 60%;
  }
`;

export const TituloStyleSSI= styled.img`
  width: 350px;

  margin-bottom: 20px;
  @media (max-width:530px) {
    width: 80%;
  }
`;

export const SocialAreaBanner= styled.div`
  width: 350px;
  max-width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const SocialButton=styled.a`
  font-size: 45px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: #cccccc;
  text-shadow: none;
  &:hover{
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
  }
  @media (max-width:530px) {
    font-size: 40px;
  }
`;

export const ButtonAreaBanner=styled.div`
  width: 400px;
  max-width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonBanner= styled.a`
  font-family: var(--fontTitulo);
  text-transform: uppercase; 
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px;
  border-style: solid;
  border-radius: 0px;
  border-width: 2px;
  border-color: #fff;
  letter-spacing:1px;
  margin: 10px;
  background:rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  &:hover{
    color: #520082;
    background-color: #fff;
  }
  @media (max-width:530px) {
    font-size: 18px;
  }
`;

export const FundoModal=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalBase=styled.section`
  position: fixed;
  background: white;
  width: 300px;
  max-width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 2px;
  border-color: #fff;
  background: #520082;
  font-size: 1.5em;
  font-family: var(--fontCorpo);
  text-align: center;
  padding: 30px;
`;

export const ButtonModal= styled.button`
  font-size: 24px;
  font-family: var(--fontCorpo);
  cursor: pointer;
  color: #520082;
  font-weight: 600;
  font-size: 1em;
  padding: 10px 20px;
  border-style: solid;
  border-radius: 0px;
  border-width: 2px;
  border-color: #fff;
  letter-spacing:1px;
  margin-top: 20px;
  background: #fff;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: #fff;
    background-color: rgba(0,0,0,0.5);
  }
`;