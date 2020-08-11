import styled from 'styled-components'

export const GenericSize = styled.div`
  width:100%; 
  height:100vh; 
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

export const ArrowBaseLeft=styled.div`
  &::before{
    position: relative;
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    border-right: 0.3em solid #ccc;
    border-top: 0.3em solid #ccc;
    transform: rotate(225deg);
  }
`;

export const ArrowBaseRight=styled.div`
  &::before{
    position: relative;
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    border-right: 0.3em solid #ccc;
    border-top: 0.3em solid #ccc;
    transform: rotate(45deg);
  }
`;