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
  }
  h4 {
    margin: 0;
    margin-top: 10px;
  }
  p {
    margin: 0;
    margin-top: 10px;
  }
`;