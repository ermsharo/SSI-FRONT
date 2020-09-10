import styled from 'styled-components'

export const CronogramaBase = styled.div`
display:block; 

`;

export const Linha = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  @media (max-width: 650px){
    flex-direction: column;
  }
`;



export const NichoLink = styled.div`


`;





export const Evento = styled.div`
  font-size: 0.9em;
  width: 90%;
  height: 200px;
  padding: 1em;
  cursor:pointer;
  div {
    display: flex;
    justify-content: space-between;
    @media (max-width: 300px){
      a:nth-child(1):before{
        font-weight: 550;
        content: 'Início: ';
      }
      a:nth-child(2):before{
        font-weight: 550;
        content: 'Fim: ';
      }
    }
    @media (max-width: 650px){
      font-size: 0.8em;
      flex-direction: column;
    }
  }
  h4 {
    text-align: center;
    font-size: 1.1em;
    margin: 0;
    margin-bottom: 10px;
    @media (max-width: 600px){
      font-size: 1em;
    }
  }
  h5 {
    font-size: 0.9em;
    margin: 0;
    margin-bottom: 10px;
    @media (max-width: 600px){
      font-size: 0.8em;
    }
  }
  p {
    font-size: 0.9em;
    margin: 0;
    margin-top: 10px;
    @media (max-width: 600px){
      font-size: 0.8em;
    }
  }
`;

export const Intervalo = styled.div`
  padding: 1em;
  font-size: 0.9em;
  width: 100%;
  color: white;
  text-align: center;
  
  div {
    margin-top: 2em;
    width: 150px;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px){
      a:nth-child(1):before{
        font-weight: 550;
        content: 'Início: ';
      }
      a:nth-child(2):before{
        font-weight: 550;
        content: 'Fim: ';
      }
      font-size: 16px;
      flex-direction: column;
    }
  }
  @media (max-width: 600px){
    padding: 0.5em;
  }
`;