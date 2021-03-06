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
width: 300px;
display: flex;
flex-direction: column;
align-content: center;

    img{
        width:100%;
        height:auto;
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
    padding-top: 20px;

    @media(max-width:995px){
        font-size:1em;
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
text-align: justify;

    @media(max-width:995px){
        font-size:1.1em;
        padding-top: 25px;
    }

`;

export const PalestraInfo = styled.div`
display: flex; 
width:90%; 
margin:auto; 
flex-direction: row;
align-content: center;
justify-content: center;

@media(max-width:995px){
    flex-direction: column;
}



`;





export const ModalStyleBox = styled.div`
    width:70vw;
    height:auto;
    max-height:60vh; 
    overflow: scroll;
    overflow-x:hidden;
    z-index:11 !important;  
    background:#520082;
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



