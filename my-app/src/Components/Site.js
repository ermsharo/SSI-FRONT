/* import Slider from "./Slider"; */
/* import styled from "styled-components"; */
import React, { useState, useEffect } from "react";
import HamburguerMenuAnimation from "react-hamburger-menu";
import LogoSSI from "../assets/img/logoSSISemFundoComCinzaRoxo.svg";
import Banner from "./Banner/index";
import Info from "./Info/index";
import Patrocinadores from "./Patrocinadores/index";
import Apoio from "./Apoio/index";
import Inscricoes from "./Inscricao";
import Footer from "./Footer";
import styled, { css } from "styled-components";
import Atividades from "./Info/index";
import Fundo from "./Fundo";
import Programacao from "./Programacao";
import CloseButton from "./CloseButton";

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

  @media (max-width: 992px) {
    /*   alert("fechou"); */

    margin: auto;
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
  background-color: white;
  position: fixed;
  top: 55px;
  padding: 0px;
  padding-bottom: 15px;

  li {
    margin: auto;
    display: inline-block;
    list-style: none;
    width: 100vw;
    text-align: center;
    /*     border:2px solid blue;  */
    padding: 0px;
    margin: 0px;
    font-family: var(--fontTitulo);
    font-weight: 0.4px;
    text-transform: uppercase;
    cursor: pointer; /*   alert("fechou"); */
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
  background-color: red;
  height: auto;
  width: 30px;
  height: 25px;
  cursor: pointer;
`;

const HeaderSpace = styled.div`
  width: 100px;
  height: 60px;
`;


let Open = false;

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
  const [count, setCount] = useState(1);
  const [Abre, setAbre] = useState(false);
  const [DisplayMobile, setDisplayMobile] = useState("none");



  const MenuMobileDisplay = styled.div`
  display:block;

`;


  const MenuStatus = () => {
    if (count == 1) {
      setCount(2);
      setDisplayMobile("block");
    } else {
      setCount(1);
      setDisplayMobile("none");
    }
  };

  let Slide = 0;

  let handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  let i = 0;

  let DisplayModal = {
    display: "block",
  };

  let Open = false;

  let OpenFunction = () => {
    if (count === 1) {
      setCount(2);
    } else {
      setCount(1);
    }
    console.log("VAlor", count == 1);
    setAbre(count == 1);
  };

  return (
    <div>
      <Fundo />
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
          <HamburguerMenu onClick={OpenFunction}>
            <CloseButton CloseButton={Abre} />
          </HamburguerMenu>
          <LogoBox onClick={handleClickBanner}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={LogoSSI}
              alt=""
            ></img>
          </LogoBox>
        </HeaderBoxMobile>
        <MenuMobileDisplay>
        <HeaderUlBoxMobile style={DisplayModal}>
          <li onClick={handleClickInfo}>Informações</li>
          <li onClick={handleClickPatrocinadores}>Patrocínio</li>
          <li onClick={handleClickApoio}>Apoio</li>
          <li onClick={handleClickInscricao}>Inscrição</li>
        </HeaderUlBoxMobile>
        </MenuMobileDisplay>
      </MobileHeader>

      <div>
        {/*      <Slider />      */}

        <SliderBox>
          <SliderItem ref={ref1}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Banner />
          </SliderItem>

          <SliderItem ref={ref2}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Programacao />
          </SliderItem>
          <SliderItem ref={ref3}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Info />
          </SliderItem>
          <SliderItem ref={ref4}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Atividades />
          </SliderItem>
          <SliderItem ref={ref3}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Patrocinadores />{" "}
          </SliderItem>
          <SliderItem ref={ref4}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Apoio />{" "}
          </SliderItem>
          <SliderItem ref={ref5}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Inscricoes />{" "}
          </SliderItem>
          <Footer />
        </SliderBox>
      </div>
    </div>
  );
}

export default Site;
