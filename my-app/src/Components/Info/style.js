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

export const ItemSpace=styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0;
  margin-bottom: 40px;
`;

export const Item=styled.div`
  flex: 1;
  min-width: 400px;
  
  border-style: solid;

  border-width: 2px;
  border-color: #fff;
  padding: 0;
  margin: 0 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(0,0,0,0.2);
  @media (max-width: 540px){
    min-width: 100%;
  }
`;

export const ItemIcon=styled.span`
  font-size: 3em;
  margin-top: 20px;
`;

export const ItemTitle=styled.h2`
  font-size: 2.2em;
  margin: 20px 0;
  text-align: center;
  font-family: var(--fontTitulo);
`;

export const ItemText=styled.p`
  font-size: 1.2em;
  line-height: 1.5em;
  text-align: center;
  padding: 20px;
  padding-top: 0px;
  margin: 0;
  font-weight: 550;

  font-family: var(--fontCorpo);
`;

export const Link=styled.a`
  text-decoration: none;
  color: #fffc33;
  cursor: pointer;
  
`;