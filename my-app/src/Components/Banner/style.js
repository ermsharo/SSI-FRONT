import styled, { keyframes } from 'styled-components';

export const GenericSize= styled.div`
  width:100vw; 
  height: 100vh; 
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(58, 0, 110, 0.5) 50%, rgba(255, 255, 255, 0) 90%);
  padding-top:5vw;
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
      transform: translatey(-10px);
  }
  50% {
      transform: translatey(-45px);
  }
  100% {
      transform: translatey(-10px);
  }
`;

export const LogoStyleSSI= styled.img`
  width: 90%;
  max-width: 250px;
  transform: translatey(-10px);
  animation: ${float} 5s ease-in-out infinite;
  margin-bottom: 20px;
`;

export const TituloStyleSSI= styled.img`
  width: 90%;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const SocialAreaBanner= styled.div`
  width: 350px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const SocialButton=styled.a`
  font-size: 46px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: #cccccc;
  text-shadow: none;
  &:hover{
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
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
`;