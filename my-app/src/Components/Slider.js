import React from "react";
import Header from "./Header";
import Banner from "./../Components/Banner";
import Programacao from "./../Components/Programacao";
import Info from "./../Components/Info";
import Atividades from "./../Components/Atividades";
import Patrocinadores from "./../Components/Patrocinadores";
import Apoio from "./../Components/Apoio";
import Inscricoes from "./../Components/Inscricao";
import Footer from "./../Components/Footer";
import styled, { css } from "styled-components";
/* import "./Style/globalStyle.css"; */
function Slider(props) {
  const SliderBox = styled.div`


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

const handleClickProgramacao = () =>
ref1.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

const handleClickInfo = () =>
ref1.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

const handleClickAtividades = () =>
ref1.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

const handleClickPatrocinadores = () =>
ref1.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

const handleClickInscricao = () =>
ref1.current.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});





  let scroll = 0; 

  return (
    

    <SliderBox> 
     
     <SliderItem ref = {ref1}> <Banner /></SliderItem>
     <SliderItem ref = {ref2}> <Programacao /></SliderItem>
     <SliderItem ref = {ref3}> <Info/></SliderItem>
     <SliderItem ref = {ref4}> <Atividades /></SliderItem>
     <SliderItem ref = {ref5}> <Patrocinadores /> </SliderItem>
     <SliderItem> <Inscricoes /> </SliderItem>
      <Footer />
      
    </SliderBox>
  );
}

export default Slider;
