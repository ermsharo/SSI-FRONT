import styled from 'styled-components'

export const CronogramaBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;

export const Linha = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const Evento = styled.div`
  width: 100%;
  height: 200px;
  padding: 1em;
  div {
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
  h4 {
    margin: 0;
    margin-bottom: 10px;
    @media (max-width: 600px){
      font-size: 16px;
    }
  }
  p {
    margin: 0;
    margin-top: 10px;
    @media (max-width: 600px){
      font-size: 16px;
    }
  }
`;