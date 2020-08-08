/* import Slider from "./Slider"; */
import Banner from "./Banner/index";
import Programacao from "./Programacao";
import Info from "./Info/index";
import Patrocinadores from "./Patrocinadores/index";
import Apoio from "./Apoio/index";
import Inscricoes from "./Inscricao";
import Footer from "./Footer";
import styled, { css } from "styled-components";
import React, { useState } from "react";
import HamburguerMenuAnimation from "react-hamburger-menu";
import Atividades from "./Info/index";
import Fundo from "./Fundo"; 


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

const HeaderSpace = styled.div`
 width:100px; 
 height: 60px; 

`;






const SliderItem = styled.div``;

const ref1 = React.createRef();
const ref2 = React.createRef();
const ref3 = React.createRef();
const ref4 = React.createRef();
const ref5 = React.createRef();
const ref6 = React.createRef();

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

const handleClickAtividades = () =>
  ref4.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickPatrocinadores = () =>
  ref5.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickApoio = () =>
  ref6.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

const handleClickInscricao = () =>
  ref4.current.scrollIntoView({
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

  const [ModalOpen, setModalOpen] = useState('0px');


  const MenuStatus = () =>{
    if(openHamburguer === true){
      setOpenHamburguer(false); 

    }else{
      setOpenHamburguer(true);
  
    }
    
  }

  
  




  return (
    <div>
     <Fundo />
      <RegularHeader>
        <HeaderBox>
          <LogoBox onClick={handleClickBanner}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="data:image/png;base64,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"
            ></img>
          </LogoBox>

          <HeaderUlBox>
            <li onClick={handleClickProgramacao}>Programação</li>
            <li onClick={handleClickInfo}>Informações</li>
            <li onClick={handleClickPatrocinadores}>Patrocinadores</li>
            <li onClick={handleClickApoio}>Apoio</li>
            <li onClick={handleClickInscricao}>Inscrição</li>
          </HeaderUlBox>
        </HeaderBox>
      </RegularHeader>

      <MobileHeader>
        <HeaderBoxMobile>
          <HamburguerMenu onClick = {MenuStatus}><HamburguerMenuAnimation
    isOpen={openHamburguer}
    menuClicked={openHamburguer}
    width={30}
    height={25}
    strokeWidth={4}
    rotate={0}
    color='black'
    borderRadius={0}
    animationDuration={0.5}
/></HamburguerMenu>
          <LogoBox onClick={handleClickBanner}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="data:image/png;base64,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"
            ></img>
          </LogoBox>
          <></>
        </HeaderBoxMobile>
        <HeaderUlBoxMobile>
            <li onClick={handleClickProgramacao}>Programação</li>
            <li onClick={handleClickInfo}>Informações</li>
            <li onClick={handleClickPatrocinadores}>Patrocinadores</li>
            <li onClick={handleClickApoio}>Apoio</li>
            <li onClick={handleClickInscricao}>Inscrição</li>
          </HeaderUlBoxMobile>
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
          <SliderItem ref={ref5}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Patrocinadores />{" "}
          </SliderItem>
          <SliderItem ref={ref6}>
            {" "}
            <HeaderSpace></HeaderSpace>
            <Apoio />{" "}
          </SliderItem>
          <SliderItem>
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
