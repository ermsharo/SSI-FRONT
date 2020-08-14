import styled from 'styled-components'


export const Spike = styled.div`
   position: relative;
  background:white;
  height: 0vh;
transform:rotate(180deg);
z-index:-1;

   :before {
  content: '';
  position: absolute;
  right: 0;
  left: -0%;
  top: 100%;
  z-index: 0;
  display: block;
  height: 150px;

  background-size: 50px 100%;
  background-image: linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%);
  background-position: 0 0;

  
} 
`;

export const SpikeReverse = styled.div`
   position: relative;
  background:white;
  height: 0vh;

z-index:0;

   :before {
  content: '';
  position: absolute;
  right: 0;
  left: -0%;
  top: 100%;
  z-index: 0;
  display: block;
  height: 150px;

  background-size: 50px 100%;
  background-image: linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%);
  background-position: 0 0;

  
} 
`;


export const GenericSize = styled.div`
  width:100%; 
  height:120vw;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
border:2px solid red; 
  margin-top:0vw;
  background-color:white; 
  color:black; 
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

export const Dots=styled.a`
  width: 100%;
  color: #ccc
`;