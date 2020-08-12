import styled, { keyframes } from 'styled-components';

export const GenericSize= styled.div`
  width:100%; 
  height: 110vh; 
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:6vw;
  margin-bottom:20vw; 
  /* background: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(58, 0, 110, 0.5) 50%, rgba(255, 255, 255, 0) 90%); */
`;

export const FundoBanner= styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  display: none;
`;

export const float = keyframes`
  0% {
   /*    transform: translatey(-10px); */
    transform: translatey(0.5vw);
  }
  50% {
    transform: translatey(-2.25vw);
  }
  100% {
    transform: translatey(0.5vw);
  }
`;

export const LogoStyleSSI= styled.img`
  width: 280px;
  max-width: 80%;
  transform: translatey(-10px);
  animation: ${float} 5s ease-in-out infinite;
  margin-bottom: 20px;
  display: inline;
  z-index:0;
  @media (max-width:960px) {
    width: 230px;
  }
`;

export const TituloStyleSSI= styled.img`
  width: 350px;
  max-width: 90%;
  margin-bottom: 20px;
  @media (max-width:960px) {
    width: 300px;
  }
`;

export const SocialAreaBanner= styled.div`
  width: 350px;
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
  @media (max-width:960px) {
    font-size: 40px;
  }
`;

export const ButtonAreaBanner=styled.div`
  width: 400px;
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
  border-radius: 5px;
  border-width: 4px;
  border-color: #fff;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: #520082;
    background-color: #fff;
  }
  @media (max-width:960px) {
    font-size: 18px;
  }
`;