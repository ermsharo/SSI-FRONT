import React, { useState } from 'react';
import { LoadingDiv, GenericSize, Titulo, ArrowBaseLeft, ArrowBaseRight, Dots ,Spike, SpikeReverse} from './style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cronograma from './Cronograma/index';
import useForceUpdate from 'use-force-update';




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
  





export default function CronogramaBox(){

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
    
    
    
    let OrganizandoProgramacao = () =>{
    
       let i = 0;
    }
    
    
    
    
    
      return (
        <>

          <Titulo>
            Programação
          </Titulo>
    
    
      
          <Slider {...settings} style={{maxWidth:"80%", width:'100%'}}>
    
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
                            {
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
          </Slider>
 
        </>
      );
}