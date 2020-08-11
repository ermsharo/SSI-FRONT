import React from 'react';
import { GenericSize, Titulo, ArrowBaseLeft, ArrowBaseRight, Dots } from './style';
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
  
  return (
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
  );
}

export default Programacao;
