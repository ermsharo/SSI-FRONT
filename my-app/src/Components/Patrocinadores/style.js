import styled from 'styled-components'

export const GenericSize= styled.div`
  width:100%; 
  min-height:100vh; 
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo=styled.h1`
  text-align: center;
  margin: 40px 0;
  margin-bottom: 80px;
  font-size: 50px;
  font-family: var(--fontTitulo);
  @media (max-width: 500px){
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

export const LogoStyle=styled.img`
  width: 300px;
  max-width: 100%;


  @media(max-width:500px){
    width:80vw;
  }
`;

export const ItemSpace=styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0;
`;

export const Item=styled.div`
  flex: 1;
  min-width: 400px;
  padding: 0;
  margin: 0;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 540px){
    min-width: 100%;
    max-width:70vw; 
    margin:2ps solid red; 
  }
`;
