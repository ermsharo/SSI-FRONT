import React, { useState } from "react";
import {
  LoadingDiv,
  GenericSize,
  Titulo,
  ArrowBaseLeft,
  ArrowBaseRight,
  Dots,
  Spike,
  SpikeReverse,
} from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cronograma from "./Cronograma/index";
import useForceUpdate from "use-force-update";
import CronogramaBox from "../Programacao/CronogramaBox";

function ArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBaseRight
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function ArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBaseLeft
      className={className}
      style={{ ...style, display: "block", left: "-31px" }}
      onClick={onClick}
    />
  );
}

let dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

function Programacao({ JsonProgramacaoData }) {
  console.log("JsonDataSheets", JsonProgramacaoData);
  const JsonSheetsData = JsonProgramacaoData;

  var settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow: <ArrowRight className="teste" />,
    prevArrow: <ArrowLeft className="teste" />,
    customPaging: (i) => <Dots>{dias[i]}</Dots>,
  };

  const [loadData, setLoadData] = useState(false);

  //Realizando upload do json do sheets

  let url =
    "https://spreadsheets.google.com/feeds/cells/1rCPzAPRs3YC3YYq_vmQBZzO6vAX8QRdce8fsIazJrh4/1/public/full?alt=json";

  let JsonData = [];
  let Programacao = [];

  //Pegando dados da tabela
  let titulo = [];
  let dia = [];
  let horarioInicio = [];
  let horarioFim = [];
  let Palestrante = [];
  let Descricao = [];
  let MiniBio = [];
  let Foto = [];

  const [ArrayTitulo, setArrayTitulo] = useState(null);
  const [ArrayDia, setArrayDia] = useState(null);
  const [ArrayHorarioInicio, setArrayHorarioInicio] = useState(null);
  const [ArrayHorarioFim, setArrayHorarioFim] = useState(null);
  const [ArrayPalestrante, setArrayPalestrante] = useState(null);
  const [ArrayDescricao, setArrayDescricao] = useState(null);
  const [ArrayMiniBio, setArrayMiniBio] = useState(null);
  const [ArrayFoto, setArrayFoto] = useState(null);

  const [ArrayPalestra, setArrayPalestra] = useState(null);

  let OrdenaPalestrante = () => {
    let ArrayCru = JsonProgramacaoData?.feed?.entry;
    let arrayPalestrantes = [];
    let arrayPalestranteIndividual = [];
    console.log("O ordenador foi invocado", JsonProgramacaoData?.feed?.entry);

    let Indicador = true;

    let numeroDeCampos = 6;

    //Inicializando os palestrantes

    if (ArrayCru != undefined) {
      let NumeroDePalestrantes = ArrayCru.length / numeroDeCampos;
      let linhaGenerica = [];

      for (let j = 0; j < NumeroDePalestrantes; j++) {
        for (let i = 0; i < ArrayCru.length; i++) {
           console.log(ArrayCru[i]?.gs$cell); 
          if (ArrayCru[i]?.gs$cell?.row == j) {
            arrayPalestranteIndividual.push(j);
            console.log(ArrayCru[i]?.gs$cell?.row , j);
          } 
 
        }
        arrayPalestrantes.push(linhaGenerica);

        while(linhaGenerica.length) {
        linhaGenerica.pop();
        }
      }

      console.log(arrayPalestrantes);
    }
  };

  OrdenaPalestrante();

  return (
    <>
      <Titulo>Programação</Titulo>

      {/*      <CronogramaBox
        TituloArray={ArrayTitulo}
        DiaArray={ArrayDia}
        HorarioInicioArray={ArrayHorarioInicio}
        HorarioFimArray={ArrayHorarioFim}
        PalestranteArray={ArrayPalestrante}
        DescricaoArray={ArrayDescricao}
        MiniBioArray={ArrayMiniBio}
        FotoArray={ArrayFoto}
      /> */}
    </>
  );
}

export default Programacao;
