import React, { useState } from "react";
import * as S from "./CronogramaCard";
import { NichoLink ,CronogramaBase, Linha, Evento, Intervalo } from './style';

export default function CronogramaCard({ cor, fonte ,data, onclick}) {


    let ModalOpen = () =>{
      console.log(ModalOpen);
    }


    return (<Evento style={{backgroundColor: cor, color: fonte}} >
               
        <h4 onClick = {ModalOpen}>{data['titulo']}</h4>
        <h5 onClick={()=>console.log("aqui esta")}>{data['palestrante']}</h5>
        <div>
          <a>{data['horaInicio']}</a>
          <a>{data['horaFim']}</a>
        </div>
        <p>
          {data['descricao']}
        </p>
      
      </Evento>);

}