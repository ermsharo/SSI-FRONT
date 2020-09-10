import styled from 'styled-components'

export const CronogramaBase = styled.div`
display:block; 

`;

export const Linha = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  @media (max-width: 1000px){
    flex-direction: column;
  }
`;



export const NichoLink = styled.div`


`;





export const Evento = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor:pointer;
  font-size: 0.9em;
  width: 100%;
  height: 300px;
  &:hover{
    transform: scale(1.005);
    -webkit-box-shadow: 4px 4px 8px 0px rgba(255,255,255,0.5), -4px -4px 8px 0px rgba(255,255,255,0.5);
    -moz-box-shadow: 4px 4px 8px 0px rgba(255,255,255,0.5), -4px -4px 8px 0px rgba(255,255,255,0.5);
    box-shadow: 4px 4px 8px 0px rgba(255,255,255,0.5), -4px -4px 8px 0px rgba(255,255,255,0.5);
    border-radius: 8px;
  }
  div {
    padding: 0.2em 1em;
    width: auto;
    display: flex;
    justify-content: space-between;
    /*@media (max-width: 300px){
      a:nth-child(1):before{
        font-weight: 550;
        content: 'Início: ';
      }
      a:nth-child(2):before{
        font-weight: 550;
        content: 'Fim: ';
      }
    }
    @media (max-width: 400px){
      flex-direction: column;
    }
    */
    @media (max-width: 1200px) and (min-width:1000px){
      font-size: 0.85em;
    }
  }
  h4 {
    padding: 0.5em 1em;
    padding-top: 0;
    width: auto;
    text-align: center;
    font-size: 1.1em;
    margin: 0;
    margin-bottom: 10px;
    @media (max-width: 1400px) and (min-width:1000px){
      font-size: 1em;
      padding: 0.5em 0.9em;
      padding-top: 1em;
    }
  }
  h5 {
    padding: 0.2em 1em;
    width: auto;
    font-size: 0.9em;
    margin: 0;
    margin-bottom: 10px;
    @media (max-width: 1200px) and (min-width:1000px){
      font-size: 0.7em;
    }
  }
  p {
    text-align: justify;
    padding: 0.2em 1em;
    width: auto;
    font-size: 0.9em;
    margin: 0;
    margin-top: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @media (max-width: 1200px) and (min-width:1000px){
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
  
  b{
    margin: 0;
  }

  div {
    margin-top: 1em;
    width: 150px;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    /*
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
  */
  @media (max-width: 600px){
    padding: 0.5em;
  }
`;