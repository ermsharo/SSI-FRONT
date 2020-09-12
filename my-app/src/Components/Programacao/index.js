import React from 'react';
import { GenericSize, Titulo, Subtitulo } from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import useForceUpdate from 'use-force-update';
import CronogramaBox from "../Programacao/CronogramaBox";

function Programacao({JsonProgramacaoData}) {
  
 
  
  /*
  console.log("JsonDataSheets", JsonProgramacaoData)
  const JsonSheetsData = JsonProgramacaoData;
  const [loadData, setLoadData] = useState(false);

  //Realizando upload do json do sheets 

  let url = "https://spreadsheets.google.com/feeds/cells/1rCPzAPRs3YC3YYq_vmQBZzO6vAX8QRdce8fsIazJrh4/1/public/full?alt=json"; 

  let JsonData = [];

  //Pegando dados da tabela
  let titulo = [];
  let dia= [];
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

  const [firstTime, setFirstTime] = useState(false);

  if(firstTime == false){
    setFirstTime(true);

    fetch(url).then((response) => {
                  
      return response.json()
    
      }).then((data) => {
      
        // Work with JSON data here
        JsonData = data['feed']['entry']; 
        //setLoadData(true);
        OrganizandoProgramacao();
      
      }).catch((err) => {
        console.log("ERRO", err)
    })
  }
  
let OrganizandoProgramacao = () =>{

  titulo.push(JsonData[8].content.$t);
  titulo.push(JsonData[16].content.$t);
  titulo.push(JsonData[24].content.$t);
  titulo.push(JsonData[32].content.$t);
  titulo.push(JsonData[40].content.$t);
  titulo.push(JsonData[48].content.$t);

  setArrayTitulo(titulo);
  console.log("Titulos",ArrayTitulo);

  dia.push(JsonData[9].content.$t);
  dia.push(JsonData[17].content.$t);
  dia.push(JsonData[25].content.$t);
  dia.push(JsonData[33].content.$t);
  dia.push(JsonData[41].content.$t);
  dia.push(JsonData[49].content.$t);

  setArrayDia(dia);
  console.log("Dias",dia);
  
  horarioInicio.push(JsonData[10].content.$t);
  horarioInicio.push(JsonData[18].content.$t);
  horarioInicio.push(JsonData[26].content.$t);
  horarioInicio.push(JsonData[34].content.$t);
  horarioInicio.push(JsonData[41].content.$t);
  horarioInicio.push(JsonData[50].content.$t);

  setArrayHorarioInicio(horarioInicio);
  console.log("Horario inicio",horarioInicio);  

  horarioFim.push(JsonData[11].content.$t);
  horarioFim.push(JsonData[19].content.$t);
  horarioFim.push(JsonData[27].content.$t);
  horarioFim.push(JsonData[35].content.$t);
  horarioFim.push(JsonData[42].content.$t);
  horarioFim.push(JsonData[51].content.$t);

  setArrayHorarioFim(horarioFim);
  console.log("Horario fim",horarioFim);  

  Palestrante.push(JsonData[12].content.$t);
  Palestrante.push(JsonData[20].content.$t);
  Palestrante.push(JsonData[28].content.$t);
  Palestrante.push(JsonData[36].content.$t);
  Palestrante.push(JsonData[44].content.$t);
  Palestrante.push(JsonData[52].content.$t);


  setArrayPalestrante(Palestrante); 

  console.log("Palestrante",Palestrante);  


  Descricao.push(JsonData[13].content.$t);
  Descricao.push(JsonData[21].content.$t);
  Descricao.push(JsonData[29].content.$t);
  Descricao.push(JsonData[37].content.$t);
  Descricao.push(JsonData[45].content.$t);
  Descricao.push(JsonData[53].content.$t);


  setArrayDescricao(Descricao);
  console.log("Descrição",Descricao);  


  MiniBio.push(JsonData[14].content.$t);
  MiniBio.push(JsonData[22].content.$t);
  MiniBio.push(Jimport { createStore, useStore } from "react-context-hook";sonData[30].content.$t);
  MiniBio.push(JsonData[38].content.$t);
  MiniBio.push(JsonData[46].content.$t);
  MiniBio.push(JsonData[54].content.$t);


  setArrayMiniBio(MiniBio);
  console.log("MiniBio",MiniBio);  


  Foto.push(JsonData[15].content.$t);
  Foto.push(JsonData[23].content.$t);
  Foto.push(JsonData[31].content.$t);
  Foto.push(JsonData[39].content.$t);
  Foto.push(JsonData[47].content.$t);
  Foto.push(JsonData[55].content.$t);


  setArrayFoto(Foto);
  console.log("Foto",Foto);
}
  */

  return (
    <>

    <>

    <GenericSize>
      <Titulo>
        Programação
      </Titulo>
      <Subtitulo>
        Clique em uma palestra para ver mais detalhes!
      </Subtitulo>
      <CronogramaBox
        //TituloArray = {ArrayTitulo}  
        //DiaArray = {ArrayDia} 
        //HorarioInicioArray = {ArrayHorarioInicio} 
        //HorarioFimArray = {ArrayHorarioFim} 
        //PalestranteArray = {ArrayPalestrante} 
        //DescricaoArray = {ArrayDescricao}
        //MiniBioArray = {ArrayMiniBio} 
        //FotoArray = {ArrayFoto}
      />
     </GenericSize>
    </>
 
    </>
  
  );
}

export default Programacao;
