import Header from "./Header";
/* import Slider from "./Slider"; */
import Banner from "./Banner/index";
import Programacao from "./Programacao";
import Info from "./Info/index";
import Patrocinadores from "./Patrocinadores/index";
import Apoio from "./Apoio/index";
import Inscricoes from "./Inscricao";
import Footer from "./Footer"; 
import styled, { css } from "styled-components"; 
import React , {useState} from 'react';
import LogoSSI from '../assets/img/logoSSISemFundoComCinzaRoxo.svg'

const HeaderBox = styled.div`
 
width: 100%;
padding: 10px; 
background-color:white; 

display:flex; 
justify-content: space-around;
max-height:60px;
position: fixed;
top: 0; 
width: 100%;



`; 

const LogoBox = styled.div`

width: 100px;


`;


const HeaderUlBox = styled.ul`

list-style:none;
display: inline; 

li{
list-style:none;
display: inline;   
padding-left:25px;
font-family: var(--fontTitulo);
font-weight: 0.4px; 
text-transform:uppercase;
cursor:pointer;

}

`;

const SliderBox = styled.div`
  `;

const MenuHamburguer = styled.div`




`;

const SideMenuBox  = styled.div`




`;



const SliderItem = styled.div`
  `;

const ref1 = React.createRef();  
const ref2 = React.createRef();  
const ref3 = React.createRef();  
const ref4 = React.createRef();  
const ref5 = React.createRef();  

const handleClickBanner = () =>
ref1.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

/*
const handleClickProgramacao = () =>
ref2.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});
*/
const handleClickInfo = () =>
ref2.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

const handleClickPatrocinadores = () =>
ref3.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

const handleClickApoio = () =>
ref4.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

const handleClickInscricao = () =>
ref5.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});



function Site() {


  let Slide = 0 ; 
 
  return (
   
      <div>  
    <HeaderBox>

      <LogoBox onClick = {handleClickBanner} >
      <img   style = {{width:'100%',height:'100%'}} src = {LogoSSI}></img>
      </LogoBox>

    

        <HeaderUlBox>
            <li onClick= {handleClickInfo}>Informações</li>    
            <li onClick= {handleClickPatrocinadores}>Patrocinadores</li>    
            <li onClick= {handleClickApoio}>Apoio</li>    
            <li onClick = {handleClickInscricao}>Inscrição</li>    
        </HeaderUlBox>
        

    </HeaderBox>



    <div>

{/*      <Slider />      */}
     <SliderBox> 
     <SliderItem ref = {ref1}> <Banner /></SliderItem>
{/*     <SliderItem ref = {ref2}> <Programacao /></SliderItem> */}
     <SliderItem ref = {ref2}> <Info/></SliderItem>
     <SliderItem ref = {ref3}> <Patrocinadores /> </SliderItem>
     <SliderItem ref = {ref4}> <Apoio /> </SliderItem>
     <SliderItem ref = {ref5}> <Inscricoes /> </SliderItem>
      <Footer />
      
    </SliderBox>
    </div>
    </div>
  );
}

export default Site;
