import React, { useState } from "react";
import * as S from "./CronogramaCard";
import { NichoLink ,CronogramaBase, Linha, Evento, Intervalo } from './style';

export default function CronogramaCard({ cor, fonte ,data, onClick}) {



    console.log("Nosso onclick ",onClick);

    let ModalOpen = () =>{
      console.log("aqui deu certo");
    }


    return (<Evento  style={{backgroundColor: cor, color: fonte}} >
               
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