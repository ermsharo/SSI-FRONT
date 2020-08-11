import React from 'react';
import { CronogramaBase, Linha, Evento } from './style';

function Cronograma(props) {
  
  let periodos = [];

  for(let t = 0; t < 3; t++){
    let items=[]
    for (let i = 0; i < 4; i++){
      if (props.eventos[t].length === i){
        break;
      }

      let cor;
      if (t === 0){
        (i%2 === 0) ? cor='orange' : cor='yellow';
      }
      else if (t === 1){
        (i%2 === 0) ? cor='darkorange' : cor='red';
      }
      else{
        (i%2 === 0) ? cor='blue' : cor='darkblue';
      }

      items.push(
        <Evento style={{backgroundColor: cor}}>
          <div>
            <a>{props.eventos[t][i]['horaInicio']}</a>
            <a>{props.eventos[t][i]['horaFim']}</a>
          </div>
          <h4>{props.eventos[t][i]['titulo']}</h4>
          <p>
            {props.eventos[t][i]['descricao']}
          </p>
        </Evento>
      )
    }
    periodos.push(items)
  }

  return (
    <CronogramaBase>
      <Linha>
        {periodos[0]}
      </Linha>
      <Linha>
        {periodos[1]}
      </Linha>
      <Linha>
        {periodos[2]}
      </Linha>
    </CronogramaBase>
  );
}

export default Cronograma;
