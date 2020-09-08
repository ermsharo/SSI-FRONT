import React, { useState } from 'react';
import { LoadingDiv, GenericSize, Titulo, ArrowBaseLeft, ArrowBaseRight, Dots ,Spike, SpikeReverse} from './style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cronograma from './Cronograma/index';
import useForceUpdate from 'use-force-update';
import CronogramaBox from "../Programacao/CronogramaBox";



function ArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBaseRight
      className={className}
      style={{ ...style, display:"block"}}
      onClick={onClick}
    />
  );
}

function ArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBaseLeft
      className={className}
      style={{ ...style, display:"block", left:"-31px" }}
      onClick={onClick}
    />
  );
}

let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

function Programacao({JsonProgramacaoData}) {


  console.log("JsonDataSheets", JsonProgramacaoData)
  const JsonSheetsData = JsonProgramacaoData;

  var settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow: <ArrowRight className='teste'/>,
    prevArrow: <ArrowLeft className='teste'/>,
    customPaging: i => (
      <Dots>
        {dias[i]}
      </Dots>
    )
  };

  const [loadData, setLoadData] = useState(false);


  //Realizando upload do json do sheets 

  let url = "https://spreadsheets.google.com/feeds/cells/1rCPzAPRs3YC3YYq_vmQBZzO6vAX8QRdce8fsIazJrh4/1/public/full?alt=json"; 

  let JsonData = [];
  let Programacao = []; 

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



//Pegando o conteudo da planilha
/* fetch(url)
.then((response) => {
  return response.json()
})
.then((data) => { */
  // Work with JSON data here
/*   console.log(data)
  JsonData = data; 
  setLoadData(true); */
/*   OrganizandoProgramacao();  */
/*   console.log("all");
  OrganizandoProgramacao(); 


}) */
/* .catch((err) => { */
  // Do something for an error here
/* }) */
  
let OrganizandoProgramacao = () =>{

   let i = 0;

/*   console.log("aqui",JsonSheetsData[7].content.$t); 
  console.log("aqui",JsonSheetsData[14].content.$t); 
  console.log("aqui",JsonSheetsData[21].content.$t); 
  console.log("aqui",JsonSheetsData[28].content.$t); 
  console.log("aqui",JsonSheetsData[35].content.$t); 
  console.log("aqui",JsonSheetsData[42].content.$t);  */

  titulo.push(JsonSheetsData[8].content.$t);
  titulo.push(JsonSheetsData[16].content.$t);
  titulo.push(JsonSheetsData[24].content.$t);
  titulo.push(JsonSheetsData[32].content.$t);
  titulo.push(JsonSheetsData[40].content.$t);
  titulo.push(JsonSheetsData[48].content.$t);


  setArrayTitulo(titulo);

  console.log("Titulos",titulo);


  dia.push(JsonSheetsData[9].content.$t);
  dia.push(JsonSheetsData[17].content.$t);
  dia.push(JsonSheetsData[25].content.$t);
  dia.push(JsonSheetsData[33].content.$t);
  dia.push(JsonSheetsData[41].content.$t);
  dia.push(JsonSheetsData[49].content.$t);

  setArrayDia(dia);

  console.log("Dias",dia);   


  
  horarioInicio.push(JsonSheetsData[10].content.$t);
  horarioInicio.push(JsonSheetsData[18].content.$t);
  horarioInicio.push(JsonSheetsData[26].content.$t);
  horarioInicio.push(JsonSheetsData[34].content.$t);
  horarioInicio.push(JsonSheetsData[41].content.$t);
  horarioInicio.push(JsonSheetsData[50].content.$t);

  setArrayHorarioInicio(horarioInicio);
  console.log("Horario inicio",horarioInicio);  

  horarioFim.push(JsonSheetsData[11].content.$t);
  horarioFim.push(JsonSheetsData[19].content.$t);
  horarioFim.push(JsonSheetsData[27].content.$t);
  horarioFim.push(JsonSheetsData[35].content.$t);
  horarioFim.push(JsonSheetsData[42].content.$t);
  horarioFim.push(JsonSheetsData[51].content.$t);

  setArrayHorarioFim(horarioFim);
  console.log("Horario fim",horarioFim);  


/*   horarioFim.push(JsonSheetsData[11].content.$t);
  horarioFim.push(JsonSheetsData[19].content.$t);
  horarioFim.push(JsonSheetsData[27].content.$t);
  horarioFim.push(JsonSheetsData[35].content.$t);
  horarioFim.push(JsonSheetsData[42].content.$t);
  horarioFim.push(JsonSheetsData[51].content.$t); */


/*   console.log("Horario fim",horarioFim);   */


  Palestrante.push(JsonSheetsData[12].content.$t);
  Palestrante.push(JsonSheetsData[20].content.$t);
  Palestrante.push(JsonSheetsData[28].content.$t);
  Palestrante.push(JsonSheetsData[36].content.$t);
  Palestrante.push(JsonSheetsData[44].content.$t);
  Palestrante.push(JsonSheetsData[52].content.$t);


  setArrayPalestrante(Palestrante); 

  console.log("Palestrante",Palestrante);  


  Descricao.push(JsonSheetsData[13].content.$t);
  Descricao.push(JsonSheetsData[21].content.$t);
  Descricao.push(JsonSheetsData[29].content.$t);
  Descricao.push(JsonSheetsData[37].content.$t);
  Descricao.push(JsonSheetsData[45].content.$t);
  Descricao.push(JsonSheetsData[53].content.$t);


  setArrayDescricao(Descricao);
  console.log("Descrição",Descricao);  


  MiniBio.push(JsonSheetsData[14].content.$t);
  MiniBio.push(JsonSheetsData[22].content.$t);
  MiniBio.push(JsonSheetsData[30].content.$t);
  MiniBio.push(JsonSheetsData[38].content.$t);
  MiniBio.push(JsonSheetsData[46].content.$t);
  MiniBio.push(JsonSheetsData[54].content.$t);


  setArrayMiniBio(MiniBio);
  console.log("MiniBio",MiniBio);  


  Foto.push(JsonSheetsData[15].content.$t);
  Foto.push(JsonSheetsData[23].content.$t);
  Foto.push(JsonSheetsData[31].content.$t);
  Foto.push(JsonSheetsData[39].content.$t);
  Foto.push(JsonSheetsData[47].content.$t);
  Foto.push(JsonSheetsData[55].content.$t);


  setArrayFoto(Foto);
  console.log("Foto",Foto);  

/*   while(i<JsonData.lenght){
    console.log(JsonData[i]);
    i++;
  }
 */

}





  return (
    <>
    <Spike></Spike>
    <GenericSize>
      <Titulo>
        Programação
      </Titulo>

 <CronogramaBox TituloArray = {ArrayTitulo}  
 DiaArray = {ArrayDia} 
 HorarioInicioArray = {ArrayHorarioInicio} 
 HorarioFimArray = {ArrayHorarioFim} 
 PalestranteArray = {ArrayPalestrante} 
 DescricaoArray = {ArrayDescricao}
 MiniBioArray = {ArrayMiniBio} 
 FotoArray = {ArrayFoto} />
  
   {/*    <Slider {...settings} style={{maxWidth:"80%", width:'100%'}}>

        <Cronograma
            eventos={[
                      // Eventos Manhã
                      [
                        {
                          titulo :"123213",
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:"asdasd",
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
       ko                 {
                          titulo:"asdasd",
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Tarde                      
                      [
                        {
                          titulo:Titulo[3],
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:Titulo[4],
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Noite
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ]
            ]}
        />
        <Cronograma
            eventos={[
                      // Eventos Manhã
                      [
                        {
                          titulo:'Titulo',


                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Tarde                      
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Noite
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ]
            ]}
        />
        <Cronograma
            eventos={[
                      // Eventos Manhã
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Tarde                      
                 [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Noite
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ]
            ]}
        />
        <Cronograma
            eventos={[
                      // Eventos Manhã
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Tarde                      
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Noite
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ]
            ]}
        />
        <Cronograma
            eventos={[
                      // Eventos Manhã
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Tarde                      
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ],
                      // Eventos Noite
                      [
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        }
                      ]
            ]}
        />
      </Slider> */}
    </GenericSize>
    <SpikeReverse></SpikeReverse>
    </>
  );
}

export default Programacao;
