import React from 'react';
import { GenericSize, Titulo, ArrowBaseLeft, ArrowBaseRight, Dots ,Spike, SpikeReverse} from './style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cronograma from './Cronograma/index';




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

function Programacao() {
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


//Pegando o conteudo da planilha
fetch(url)
.then((response) => {
  return response.json()
})
.then((data) => {
  // Work with JSON data here
  console.log(data)
  JsonData = data; 
/*   OrganizandoProgramacao();  */
  console.log("all");
  OrganizandoProgramacao();
})
.catch((err) => {
  // Do something for an error here
})
  
let OrganizandoProgramacao = () =>{

   let i = 0;

/*   console.log("aqui",JsonData.feed.entry[7].content.$t); 
  console.log("aqui",JsonData.feed.entry[14].content.$t); 
  console.log("aqui",JsonData.feed.entry[21].content.$t); 
  console.log("aqui",JsonData.feed.entry[28].content.$t); 
  console.log("aqui",JsonData.feed.entry[35].content.$t); 
  console.log("aqui",JsonData.feed.entry[42].content.$t);  */

  titulo.push(JsonData.feed.entry[8].content.$t);
  titulo.push(JsonData.feed.entry[16].content.$t);
  titulo.push(JsonData.feed.entry[24].content.$t);
  titulo.push(JsonData.feed.entry[32].content.$t);
  titulo.push(JsonData.feed.entry[40].content.$t);
  titulo.push(JsonData.feed.entry[48].content.$t);

  console.log("Titulos",titulo);


  dia.push(JsonData.feed.entry[9].content.$t);
  dia.push(JsonData.feed.entry[17].content.$t);
  dia.push(JsonData.feed.entry[25].content.$t);
  dia.push(JsonData.feed.entry[33].content.$t);
  dia.push(JsonData.feed.entry[41].content.$t);
  dia.push(JsonData.feed.entry[49].content.$t);


  console.log("Dias",dia);   


  horarioInicio.push(JsonData.feed.entry[10].content.$t);
  horarioInicio.push(JsonData.feed.entry[18].content.$t);
  horarioInicio.push(JsonData.feed.entry[26].content.$t);
  horarioInicio.push(JsonData.feed.entry[34].content.$t);
  horarioInicio.push(JsonData.feed.entry[41].content.$t);
  horarioInicio.push(JsonData.feed.entry[50].content.$t);


  console.log("Horario inicio",horarioInicio);  

  horarioFim.push(JsonData.feed.entry[11].content.$t);
  horarioFim.push(JsonData.feed.entry[19].content.$t);
  horarioFim.push(JsonData.feed.entry[27].content.$t);
  horarioFim.push(JsonData.feed.entry[35].content.$t);
  horarioFim.push(JsonData.feed.entry[42].content.$t);
  horarioFim.push(JsonData.feed.entry[51].content.$t);


  console.log("Horario fim",horarioFim);  


  horarioFim.push(JsonData.feed.entry[11].content.$t);
  horarioFim.push(JsonData.feed.entry[19].content.$t);
  horarioFim.push(JsonData.feed.entry[27].content.$t);
  horarioFim.push(JsonData.feed.entry[35].content.$t);
  horarioFim.push(JsonData.feed.entry[42].content.$t);
  horarioFim.push(JsonData.feed.entry[51].content.$t);


  console.log("Horario fim",horarioFim);  


  Palestrante.push(JsonData.feed.entry[12].content.$t);
  Palestrante.push(JsonData.feed.entry[20].content.$t);
  Palestrante.push(JsonData.feed.entry[28].content.$t);
  Palestrante.push(JsonData.feed.entry[36].content.$t);
  Palestrante.push(JsonData.feed.entry[44].content.$t);
  Palestrante.push(JsonData.feed.entry[52].content.$t);


  console.log("Palestrante",Palestrante);  


  Descricao.push(JsonData.feed.entry[13].content.$t);
  Descricao.push(JsonData.feed.entry[21].content.$t);
  Descricao.push(JsonData.feed.entry[29].content.$t);
  Descricao.push(JsonData.feed.entry[37].content.$t);
  Descricao.push(JsonData.feed.entry[45].content.$t);
  Descricao.push(JsonData.feed.entry[53].content.$t);



  console.log("Descrição",Descricao);  


  MiniBio.push(JsonData.feed.entry[14].content.$t);
  MiniBio.push(JsonData.feed.entry[22].content.$t);
  MiniBio.push(JsonData.feed.entry[30].content.$t);
  MiniBio.push(JsonData.feed.entry[38].content.$t);
  MiniBio.push(JsonData.feed.entry[46].content.$t);
  MiniBio.push(JsonData.feed.entry[54].content.$t);



  console.log("MiniBio",MiniBio);  


  Foto.push(JsonData.feed.entry[15].content.$t);
  Foto.push(JsonData.feed.entry[23].content.$t);
  Foto.push(JsonData.feed.entry[31].content.$t);
  Foto.push(JsonData.feed.entry[39].content.$t);
  Foto.push(JsonData.feed.entry[47].content.$t);
  Foto.push(JsonData.feed.entry[55].content.$t);



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
      <Slider {...settings} style={{maxWidth:"80%", width:'100%'}}>
        <Cronograma
            eventos={[
                      // Eventos Manhã
                      [
                        {
                          titulo:'Titulo1',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo2',
                          horaInicio:'00:00',
                          horaFim:'00:00',
                          descricao:'Descrição'
                        },
                        {
                          titulo:'Titulo3',
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
      </Slider>
    </GenericSize>
    <SpikeReverse></SpikeReverse>
    </>
  );
}

export default Programacao;
