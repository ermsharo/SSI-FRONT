/* import Slider from "./Slider"; */
import styled from "styled-components";
import React, { useState } from "react";
import HamburguerMenuAnimation from "react-hamburger-menu";
import LogoSSI from "../assets/img/logoSSISemFundoComCinzaRoxo.svg";
import Banner from "./Banner/index";
import Info from "./Info/index";
import Patrocinadores from "./Patrocinadores/index";
import Apoio from "./Apoio/index";
import Inscricoes from "./Inscricao";
import Programacao from "./Programacao/index";
import Footer from "./Footer/index";

const HeaderBox = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;

  display: flex;
  justify-content: space-around;
  max-height: 60px;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 992px) {
  }
`;
const HeaderBoxMobile = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;

  display: grid;
  grid-template-columns: 10% auto 10%; 
  max-height: 60px;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 992px) {
  }
`;

const LogoBox = styled.div`
  width: 100px;
  cursor: pointer;
/*   border:2px solid blue;  */

  @media(max-width:992px){    /*   alert("fechou"); */

    margin:auto;
  
  }
`;

const HeaderUlBox = styled.ul`
  list-style: none;
  display: inline;

  li {
    list-style: none;
    display: inline;
    padding-left: 25px;
    font-family: var(--fontTitulo);
    font-weight: 0.4px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const HeaderUlBoxMobile = styled.ul`
  list-style: none;
/*   border:2px solid red;  */
  background-color:white; 
  position:fixed;
  top:55px; 
  padding:0px; 
  padding-bottom:15px; 



  li {
    margin:auto;
    display:inline-block;
    list-style: none;
    width:100vw;
    text-align:center;
/*     border:2px solid blue;  */
    padding:0px; 
    margin:0px; 
    font-family: var(--fontTitulo);
    font-weight: 0.4px;
    text-transform: uppercase;
    cursor: pointer;    /*   alert("fechou"); */
  }
`;



const SliderBox = styled.div``;

const MenuHamburguer = styled.div``;

const MobileHeader = styled.div`
  display: none;
/*   border: 2px solid blue; */
  @media (max-width: 992px) {
    display: block;
  }
`;

const RegularHeader = styled.div`
  display: block;
  border: 2px solid blue;

  @media (max-width: 992px) {
    display: none;
  }
`;

const HamburguerMenu = styled.div`
  display: block;
  border: 2px solid blue;
  background-color:red; 
  height:auto; 
  width:30px;
  height:25px; 
  cursor:pointer; 

`;


const SliderItem = styled.div``;

const ref1 = React.createRef();
const ref2 = React.createRef();
const ref3 = React.createRef();
const ref4 = React.createRef();
const ref5 = React.createRef();

const handleClickBanner = () =>
  ref1.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });


const handleClickProgramacao = () =>
  ref2.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickInfo = () =>
  ref2.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickPatrocinadores = () =>
  ref3.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickApoio = () =>
  ref4.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickInscricao = () =>
  ref5.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

function Site() {
  let Slide = 0;

  let handleClick = () => {
    this.setState({
        open: !this.state.open
    });
}

  const [openHamburguer, setOpenHamburguer] = useState(false);


  const MenuStatus = () =>{
    if(openHamburguer === true){
      setOpenHamburguer(false); 

    }else{
      setOpenHamburguer(true);
  
    }
    
  }

  
  return (
    <>
      <RegularHeader>
        <HeaderBox>
          <LogoBox onClick={handleClickBanner}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={LogoSSI}
              alt=""
            ></img>
          </LogoBox>

          <HeaderUlBox>
            <li onClick={handleClickInfo}>Informações</li>
            <li onClick={handleClickPatrocinadores}>Patrocínio</li>
            <li onClick={handleClickApoio}>Apoio</li>
            <li onClick={handleClickInscricao}>Inscrição</li>
          </HeaderUlBox>
        </HeaderBox>
      </RegularHeader>

      <MobileHeader>
        <HeaderBoxMobile>
          <HamburguerMenu onClick = {MenuStatus}>
            <HamburguerMenuAnimation
              isOpen={openHamburguer}
              menuClicked={openHamburguer}
              width={30}
              height={25}
              strokeWidth={4}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
            />
          </HamburguerMenu>
          <LogoBox onClick={handleClickBanner}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={LogoSSI}
              alt=""
            ></img>
          </LogoBox>
        </HeaderBoxMobile>
        <HeaderUlBoxMobile>
          <li onClick={handleClickInfo}>Informações</li>
          <li onClick={handleClickPatrocinadores}>Patrocínio</li>
          <li onClick={handleClickApoio}>Apoio</li>
          <li onClick={handleClickInscricao}>Inscrição</li>
        </HeaderUlBoxMobile>
      </MobileHeader>

      <>
        {/* <Slider /> */}
        <SliderBox>
          <SliderItem ref={ref1}>
            {" "}
            <Banner handleClickInfo={handleClickInfo} handleClickInscricao={handleClickInscricao} />
          </SliderItem>
          {/*
          <SliderItem ref={ref2}>
            {" "}
            <Programacao />
          </SliderItem>
          */}
          <SliderItem ref={ref2}>
            {" "}
            <Info handleClickInscricao={handleClickInscricao} />
          </SliderItem>
          <SliderItem ref={ref3}>
            {" "}
            <Patrocinadores />{" "}
          </SliderItem>
          <SliderItem ref={ref4}>
            {" "}
            <Apoio />{" "}
          </SliderItem>
          <SliderItem ref={ref5}>
            {" "}
            <Inscricoes />{" "}
          </SliderItem >
          <Footer />
        </SliderBox>
      </>
    </>
  );
}

export default Site;
