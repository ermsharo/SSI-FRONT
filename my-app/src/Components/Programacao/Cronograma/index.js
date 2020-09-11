import React from 'react';
import { CronogramaBase, Linha, Intervalo } from './style';
import CronogramaCard from "./CronogramaCard";
function Cronograma(props) {
  
  let cores_fundo = ['#520082', '#3a006e'];

  let cores_fonte = ['white', 'white'];

  let periodos = [];
  for(let t = 0; t < 2; t++){
    let items=[]
    for (let i = 0; i < 3; i++){
      if (props.eventos[t].length === i){
        break;
      }

      let valorCor = cores_fundo[(t+i)%2]
      
      let valorFonte = cores_fonte[(t+i)%2]
      /*
      let ModalOpen = () =>{
        console.log("foi")
      };


      let Print = () =>{
        console.log("Testando isso aqui logo de uma vez");
      }
      */

 

      items.push(

      /*   <Evento style={{backgroundColor: cor, color: fonte}} onClick = {ModalOpen}>
               
          <h4 onClick = {ModalOpen}>{props.eventos[t][i]['titulo']}</h4>
          <h5 onClick={()=>console.log("aqui esta")}>{props.eventos[t][i]['palestrante']}</h5>
          <div>
            <a>{props.eventos[t][i]['horaInicio']}</a>
            <a>{props.eventos[t][i]['horaFim']}</a>
          </div>
          <p>
            {props.eventos[t][i]['descricao']}
          </p>
        
      </Evento> */
 
      <CronogramaCard cor = {valorCor} fonte = {valorFonte} data = {props.eventos[t][i]} key={t + '' + i} />

      )
    }
    periodos.push(items)

  }

  let a = [1,2,3,4,5,6]; 
 
  /*
  
  let  teste = ()=>{
    console.log("aqui")
  }

  let  Imprimir = (x) =>{
    console.log(x)
    console.log("asdasd")
  } 
  */

  return (
    <div>

    <>
 
    <CronogramaBase >
      <Linha>
        {periodos[0]}



      </Linha>
      <Intervalo style={{backgroundColor: '#1C043C'}}>
        <b>Intervalo para Janta</b>
        <center>
          <div>
            <a>18:00</a>
            <a>19:00</a>
          </div>
        </center>
      </Intervalo>
      <Linha>
        {periodos[1]}
      </Linha>
     


    
     
    </CronogramaBase>
   {/*  <Modal display = "true" image= "https://cryptoid.com.br/wp-content/uploads/2016/04/Tim-Berners-Lee.jpg"
      title = "Como usar a internet" Palestrante = "Tim Berners Lee" data = "25/12" horario = "13:00 - 14:00" 
      resumo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque libero at lacus faucibus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac nunc mauris. Vivamus euismod tortor eget nisi vestibulum, in rhoncus velit egestas. Aliquam erat volutpat. Ut ac luctus orci. Cras molestie convallis"
      /> */}
    </>

     </div>
  );
}

export default Cronograma;
