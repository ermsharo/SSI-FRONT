import React, { useState } from "react";
import * as S from "./ModalStyles";

export default function Modal({ display }) {

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
      <S.ModalStyleBox><S.CloseButton onClick={CloseModal}>X</S.CloseButton></S.ModalStyleBox>
    </S.ModalStyleBackground>
  );
}
}