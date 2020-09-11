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
width:96%;
padding:10px;
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
    width:220px;
    height:220px;

    border-radius:50%;


    @media(max-width:995px){
        width:110px;
    height:110px;


        margin:auto;
    }
}


`;

export const Palestrante = styled.div`
  text-transform:uppercase;
    color:white; 
    font-family: var(--fontTitulo);
    font-size:30px;
    text-align:center; 
    padding-bottom:10px; 


    @media(max-width:995px){
        font-size:20px;
    }



`;


export const NomePalestra = styled.div`
text-transform:uppercase;
    color:white; 
    font-family: var(--fontTitulo);
    cursor:pointer; 

    z-index:1000;
    text-align:center; 
    font-size:50px; 
    padding-top:20px;

    @media(max-width:995px){
        font-size:30px;
    }




`;

export const Horario = styled.div`

text-transform:uppercase;
    color:white; 
    font-family: var(--fontTitulo);
    text-align:center; 
    font-size:22px; 
    @media(max-width:995px){
        font-size:19px;
    }



`;

export const Resumo = styled.div`
width:90%;
margin:auto;
color:white; 
font-family: var(--fontCorpo);
padding-top:20px;


@media(max-width:995px){
        font-size:12px;
    }

`;

export const PalestraInfo = styled.div`
display: grid; 
width:80%; 
margin:auto; 

grid-template-columns: 250px auto; 
grid-column-gap :10%; 

@media(max-width:995px){
    grid-template-columns: 100%; 
}



`;





export const ModalStyleBox = styled.div`
    width:70vw;
    height:60vh; 
  
 
    z-index:11 !important;  
    background:rgb(22, 3, 48, 1);
 

`;

export const CloseButton = styled.div`

    text-transform:uppercase;
    color:white; 
    font-family: var(--fontTitulo);
    cursor:pointer; 


`;



