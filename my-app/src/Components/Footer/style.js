import styled from 'styled-components';

export const FooterBox = styled.div`
  width: 100%;
  background-color:white;
  color: black; 
  display:grid; 
  grid-template-columns: 33.3% 33.3% auto;
  font-family:  var(--fontCorpo); 
  padding-top: 15px; 
  font-size:14px; 
  text-align:center; 
  h1{
    /*text-transform:uppercase; */
    font-family:  var(--fontCorpo); 
    font-size:15px; 
  }
  @media(max-width: 992px){
    display:grid; 
    grid-template-columns: 100%;
    grid-row-gap:5vw;
  }
`;

export const FooterRedesSociais = styled.div`
  background-color:white;
  color: black; 
  a{
    line-height:25px; 
    text-decoration:none; 
    color:black; 
    font-size:16px; 
  }
`;

export const SocialMediaIcon = styled.div`
  i{
      font-size:44px; 
      padding-bottom:30px; 
    :hover{
      color:darkgray;
    }
  }
`;

export const SocialMediaBox = styled.div`
  display:grid; 
  grid-template-columns: 50% 50%; 
  width: 40%; 
  margin:auto; 
  margin-top:20px;
`;

export const Sobre= styled.div`
  width:100%; 
  text-align:center; 
  text-transform:uppercase;
  background-color:white;
  padding-top:10px;
  font-family:var(--fontTitulo);
  font-weight:bold;
  padding-bottom:10px; 
  font-size:12px; 
`;