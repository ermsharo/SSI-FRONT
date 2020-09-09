import React, { useState } from 'react';
import { LoadingDiv, GenericSize, Titulo, ArrowBaseLeft, ArrowBaseRight, Dots ,Spike, SpikeReverse} from './style';
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

/*let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']*/
let dias = ['21/09', '22/09', '23/09', '24/09', '25/09', ]

export default function CronogramaBox(/*{ TituloArray, DiaArray , HorarioInicioArray, HorarioFimArray ,
  PalestranteArray ,  DescricaoArray,     MiniBioArray ,  FotoArray }*/){

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
      <>
        <Slider {...settings} style={{maxWidth:"80%", width:'100%'}}>
          <Cronograma
            eventos={[
              // Eventos Tarde                      
              [
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição',
                  
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição'
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição'
                }
              ],
              // Eventos Noite
              [
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição',
                  
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição'
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição'
                }
              ]
            ]}
          />
          <Cronograma
            eventos={[
              // Eventos Tarde                      
              [
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição',
                  
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição'
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição'
                }
              ],
              // Eventos Noite
              [
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição',
                  
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
                  horaInicio:'00:00',
                  horaFim:'00:00',
                  descricao:'Descrição'
                },
                {
                  titulo:'Titulo',
                  foto:'https://www.tjpi.jus.br/sysejud/dist/img/avatar.png',
                  palestrante:'Palestrante',
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