import React, { useState } from "react";
import * as S from "./ModalStyles";
import CloseButtonIcon from "./CloseButton";
export default function Modal({ display ,image, title, Palestrante, data, horario ,resumo }) {

    const [closeModalStatus, setCloseModalStatus] = useState(false);
    const [finalDisplayStatus, setfinalDisplayStatus] = useState(true);

    let CloseModal = () =>{
        console.log("aqui ");
        if(closeModalStatus === true){
            setCloseModalStatus(false);
            console.log("Fechando");
        }else{
            setCloseModalStatus(true);
            console.log("Abrindo");
        }

      verifyDisplayStatus();
    }
    

   let TesteBesta = () =>{
       console.log("aqui esta");
   }


    let verifyDisplayStatus= () =>{

        if(display === true){

            if(closeModalStatus === true){
                setfinalDisplayStatus(false);

            }else{
                setfinalDisplayStatus(true);

            }    


        }else{
            setfinalDisplayStatus(false);
        }
                                                                                  
    }



    if(finalDisplayStatus === false){
        return(null);
    }

    if(finalDisplayStatus === true){  
    return (  
    <S.ModalStyleBackground>
      <S.ModalStyleBox>
          
          <S.CloseButtonLine><S.CloseButton onClick={CloseModal}><CloseButtonIcon /> <closeButtonIcon/></S.CloseButton></S.CloseButtonLine>
     
     <S.PalestraInfo>
     <div>    
     <S.PalestranteImage><img src = {image}/></S.PalestranteImage>
    
     </div>
     <div> 
    <S.NomePalestra>{title}</S.NomePalestra>    
    <S.Palestrante> {Palestrante}</S.Palestrante>  
    <S.Horario><div>{data}</div><div>{horario}</div></S.Horario>
     </div>
      </S.PalestraInfo>  
    <S.Resumo>{resumo}</S.Resumo>    
      </S.ModalStyleBox>
    </S.ModalStyleBackground>
  );
}
}