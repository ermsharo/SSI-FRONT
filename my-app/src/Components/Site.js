/* import Slider from "./Slider"; */
/* import styled from "styled-components"; */
import React, { useState } from "react";
import LogoSSI from "../assets/img/logoSSISemFundoComCinzaRoxo.svg";
import Banner from "./Banner/index";
import Info from "./Info/index";
import Patrocinadores from "./Patrocinadores/index";
import Apoio from "./Apoio/index";
import Footer from "./Footer";
import styled from "styled-components";
import Fundo from "./Fundo/Fundo";
import Programacao from "./Programacao/index";
import CloseButton from "./CloseButton";
import  "./MenuStyle.scss";
import Modal from "./Modal/Modal";

const HeaderBox = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;

  display: flex;
  justify-content: space-around;
  max-height: 60px;
  position: fixed;
  z-index:100;
  top: 0;
  width: 100%;
  -webkit-box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.28);
-moz-box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.28);
box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.28);

  @media (max-width: 992px) {
  }
`;



 const Titulo=styled.h1`
  color: white;
  text-align: center;

  margin-bottom: 80px;
  font-size: 50px;
  font-family: var(--fontTitulo);
  @media (max-width: 500px){
    font-size: 40px;
    margin-bottom: 50px;
  }
`;


const HeaderBoxMobile = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  z-index:100;

  display: grid;
  grid-template-columns: 10% auto 10%;
  max-height: 60px;
  position: fixed;
  top: 0;
  width: 100%;

  -webkit-box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.28);
-moz-box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.28);
box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.28);
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
    width:55px;
    position: relative;
    right: 10px;
  }
`;

const HeaderUlBox = styled.ul`
  list-style: none;
  display: inline;
  z-index:100;

  li {
    font-size: 22px;
    list-style: none;
    display: inline;
    padding-left: 25px;
    font-family: var(--fontTitulo);
    font-weight: 0.4px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const SliderBox = styled.div``;

const MobileHeader = styled.div`
  display: none;
  z-index:100;
  /*   border: 2px solid blue; */
  @media (max-width: 992px) {
    display: block;
  }

`;

const RegularHeader = styled.div`
  display: block;
  z-index:100;


  @media (max-width: 992px) {
    display: none;
  }

`;

const HamburguerMenu = styled.div`

/*   border: 2px solid blue;
  background-color: red; */
  position:relative;
  height: auto;
  width: 30px;
  height: 25px;
  margin-top:12.5px;
  left:10px;
  cursor: pointer;
  height:0px;
`;

const HeaderSpace = styled.div`
  width: 100px;
  height: 60px;
`;


const ProgramacaoBoxHome= styled.div`

/*   border: 2px solid blue;
  background-color: red; */
position:relative; 
z-index:10 !important;
`;


/*
const HeaderUlBoxMobile = styled.ul`
  list-style: none;
  //border:2px solid red;
  background-color: white;
  position: fixed;
  top: 55px;
  padding: 0px;
  padding-bottom: 15px;
  height:var( --ScrollMenu);
  overflow: hidden;
    text-overflow: ellipsis;
  z-index:20; 

  transition: height 10s;


  li {
    font-size: 22px;
    margin: auto;
    display: inline-block;
    list-style: none;
    width: 100vw;
    text-align: center;https://cryptoid.com.br/wp-content/uploads/2016/04/Tim-Berners-Lee.jpg
    margin-top: 20px;
    font-family: var(--fontTitulo);
    font-weight: 0.4px;
    text-transform: uppercase;
    cursor: pointer; 
    
  }
`;
*/




/* Add your own prefixes */





//let Open = false;

const SliderItem = styled.div``;

const ref1 = React.createRef();
const ref2 = React.createRef();
const ref3 = React.createRef();
const ref4 = React.createRef();
const ref5 = React.createRef();
const refHamburguer = React.createRef();

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
  ref3.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickPatrocinadores = () =>
  ref4.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickApoio = () =>
  ref5.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

// Funções Menu Mobile

const handleClickBannerMobile = () => {
  ref1.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
  refHamburguer.current.click()
};

const handleClickProgramacaoMobile = () => {
  ref2.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
  refHamburguer.current.click()
};

const handleClickInfoMobile = () => {
  ref3.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
  refHamburguer.current.click()
};

const handleClickPatrocinadoresMobile = () => {
  ref4.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
  refHamburguer.current.click()
};

const handleClickApoioMobile = () => {
  ref5.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
  refHamburguer.current.click()
};


const MenuMobileDisplay = styled.div`
  display:block;
`;



function Site(/*{JsonData}*/) {
  const [count, setCount] = useState(1);
  const [Abre, setAbre] = useState(false);
  const [, setDisplayMobile] = useState({display:"none"});
  const [, setAnimationMenu] = useState({height :"0px"});

  
  let root = document.documentElement;
  let OpenFunction = () => {
    if (count === 1) {
      setCount(2);
      setDisplayMobile({display:"block"});
      root.style.setProperty('--ScrollMenuBefore', "0px");
      root.style.setProperty('--ScrollMenuAfter', "250px");

    } else {
      setCount(1);
/*       setDisplayMobile({display:"none"}); */
      setAnimationMenu("0px");
      setDisplayMobile({display:"block"});
      root.style.setProperty('--ScrollMenuBefore', "250px");
      root.style.setProperty('--ScrollMenuAfter', "0px");
    }
    setAbre(count === 1);
  };

  return (
    <>
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
            <li onClick={handleClickBanner}>Início</li>
            <li onClick={handleClickProgramacao}>Programação</li>
            <li onClick={handleClickInfo}>Informações Gerais</li>
            <li onClick={handleClickPatrocinadores}>Parceiros</li>
            <li onClick={handleClickApoio}>Apoio</li>
            {/*<li onClick={handleClickInscricao}>Inscrição</li>*/}
          </HeaderUlBox>
        </HeaderBox>
      </RegularHeader>

      <MobileHeader>
        <HeaderBoxMobile>
          <HamburguerMenu onClick={OpenFunction} ref={refHamburguer}>
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
        <div className = "HeaderUlBoxMobile" >
          <li onClick={handleClickBannerMobile}>Início</li>
          <li onClick={handleClickProgramacaoMobile}>Programação</li>
          <li onClick={handleClickInfoMobile}>Informações Gerais</li>
          <li onClick={handleClickPatrocinadoresMobile}>Parceiros</li>
          <li onClick={handleClickApoioMobile}>Apoio</li>
        </div>
        </MenuMobileDisplay>
      </MobileHeader>

      <div>
        {/*      <Slider />      */}

        <SliderBox>
          <SliderItem ref={ref1}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Banner handleClickInfo={handleClickInfo}  />
          </SliderItem>
          <SliderItem ref={ref2}>
            {" "}
            <HeaderSpace></HeaderSpace>

            <Programacao  /*sheetsInfo = {sheetsInfo}  JsonProgramacaoData ={JsonData}*/ />
          </SliderItem>
          <SliderItem ref={ref3}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Info />
          </SliderItem>
          <SliderItem ref={ref4}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Patrocinadores />{" "}
          </SliderItem>
          <SliderItem ref={ref5}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Apoio />{" "}
          </SliderItem>
          <Footer />
        </SliderBox>
      </div>
    </>
  );
}

export default Site;
