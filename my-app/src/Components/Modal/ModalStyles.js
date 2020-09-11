import styled from 'styled-components'


export const ModalStyleBackground = styled.div`
    width:100vw;
    height:100vh; 
    margin:auto;  
 

    background:rgba(0,0,0,0.5);
    position: absolute !important ;


    position:fixed;
    left:0;
    right:0;
    z-index:110 !important;

`;


export const CloseButtonLine = styled.div`

display:inline-flex; 

justify-content: flex-end;
width:98%;
padding-top:20px;


`;
export const ModalTitle = styled.div`

display:flex; 


`;

export const PalestranteImage = styled.div`
padding:10px;
margin:auto;


@media(max-width:995px){
  display: inline-flex; 
  align-content:center;
  margin:auto; 
  width:100%
    }


img{
    width:250px;
    height:100%;

    @media(max-width:995px){
        margin:auto;
    }
}


`;

export const Palestrante = styled.div`
    color:white; 
    font-family: var(--fontCorpo);
    font-size:1.3em;
    text-align:center; 
    padding-bottom:10px; 
    font-weight: 650;


    @media(max-width:995px){
        font-size:1.2em;
        padding-top: 10px;
    }



`;


export const NomePalestra = styled.div`
    text-transform:uppercase;
    color:white; 
    font-family: var(--fontTitulo);

    z-index:1000;
    text-align:center; 
    font-size:1.9em; 
    padding-top:20px;

    @media(max-width:995px){
    }




`;

export const Horario = styled.div`
    font-weight: 650;
    color:white; 
    font-family: var(--fontCorpo);
    text-align:center; 
    font-size:1.1em;
    @media(max-width:995px){
        font-size:1em;
        padding-top: 10px;
    }



`;

export const Resumo = styled.div`
width:90%;
margin:auto;
color:white; 
font-family: var(--fontCorpo);
padding-top:40px;
padding-bottom:40px;
font-size: 1.15em;

    @media(max-width:995px){
        font-size:1.1em;
        padding-top: 25px;
    }

`;

export const PalestraInfo = styled.div`
display: grid; 
width:80%; 
margin:auto; 

grid-template-columns: 300px auto; 
grid-column-gap :5%; 
grid-row-gap: 10%;

@media(max-width:995px){
    grid-template-columns: 100%;
    grid-row-gap: 0%;
}



`;





export const ModalStyleBox = styled.div`
    width:70vw;
    height:auto;
    max-height:60vh; 
    overflow: scroll;
 
    z-index:11 !important;  
    background:rgb(22, 3, 48, 1);
    @media(max-width:995px){
        width:90vw;
    }

    @media(max-width:995px){
        max-height: 80vh;
    }
`;

export const CloseButton = styled.div`

    text-transform:uppercase;
    color:white; 
    font-family: var(--fontTitulo);
    cursor:pointer; 


`;



