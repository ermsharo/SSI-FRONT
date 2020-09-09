import styled from 'styled-components'


export const ModalStyleBackground = styled.div`
    width:100vw;
    height:100vh; 
    margin:auto;  
 
    z-index:10 !important;  
    background:rgba(0,0,0,0.5);
    position: fixed;

`;


export const ModalStyleBox = styled.div`
    width:70vw;
    height:70vh; 
    margin-left:15vw;  
    margin-top:10vw;
 
    z-index:11 !important;  
    background:purple;
    position: fixed;

`;

export const CloseButton = styled.div`

    text-transform:uppercase;
    color:white; 
    font-family:impact; 
    cursor:pointer; 


`;



