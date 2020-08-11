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
`;

export const LogoStyle=styled.img`
  height: 100px;
  max-width: 100%;
  @media (max-width: 1499px) {
    max-width: 450px;
  }
`;

export const ItemSpace=styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: 0;
`;

export const Item=styled.div`
  flex: 1 0 33%;
  min-width: 400px;
  padding: 0;
  margin: 0;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
