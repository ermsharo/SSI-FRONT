import styled from 'styled-components'

export const GenericSize= styled.div`
  width:100vw; 
  min-height:100vh; 
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo=styled.h1`
  margin: 40px 0;
  margin-bottom: 60px;
  font-size: 50px;
  font-family: var(--fontTitulo);
`;

export const LogoStyle=styled.img`
  width: 300px;
  max-width: 100%;
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
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
