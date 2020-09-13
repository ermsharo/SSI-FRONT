import React from "react";
import { Evento } from "./style";
import ReactModal from "react-modal";
import * as SM from "../../Modal/ModalStyles";
import CloseButtonIcon from "../../Modal/CloseButton";

const customStyles = {
  content: {
    top: "50vh",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -45%)",
    display:'flex',
    BackgroundColor:'black',
    border: '5px solid #520082',
    padding:'0px'
   
  },
};



export default function CronogramaCard({ cor, fonte, data }) {

 

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
/*     subtitle.style.color = "#f00"; */
  }

  function closeModal() {
    setIsOpen(false);
  }

  /*
  const [ModalImage, setModalOpen] = useState(false);
  */
/*
  let ModalFunction = () => {
    //Muda a variavel global para abrir
  };

  console.log("dados aqui",data);
*/

  return (
    <Evento style={{ backgroundColor: cor, color: fonte }}>
      <span onClick={openModal}>
        <h4>{data["titulo"]}</h4>
        <h5 /*onClick={() => console.log("aqui esta")}*/>{data["palestrante"]}</h5>
        <div>
          <a>{data["horaInicio"]}</a>
          <a>{data["horaFim"]}</a>
        </div>
        <p>{data["descricao"]}</p>
        <center><a style={{fontWeight:'650'}}>Veja mais</a></center>
      </span>

      {/*    chamando o modal direto no componente */}
      {/* Usando o componente externo react modal*/}
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

  {/* <div><S.AquiEsta> */}
      <SM.ModalStyleBox>

        <SM.CloseButtonLine>
          <SM.CloseButton onClick={closeModal}>
            <CloseButtonIcon /> <closeButtonIcon />
          </SM.CloseButton>
        </SM.CloseButtonLine>

        <SM.PalestraInfo>
          <div>
            
          </div>
          <div>
            <SM.PalestranteImage>
              <img src={data['foto']} />
            </SM.PalestranteImage>
            <SM.Palestrante> {data["palestrante"]}</SM.Palestrante>
            <SM.NomePalestra>{data["titulo"]}</SM.NomePalestra>
            <SM.Horario>
              {data["horaInicio"]} - {data["horaFim"]}
            </SM.Horario>
            <SM.Resumo>{data["descricao"]}</SM.Resumo>
          </div>
        </SM.PalestraInfo>        
      </SM.ModalStyleBox> 
    
    
{/*     </S.AquiEsta></div> */}
   {/*         <SM.ModalStyleBackground> */}
  {/*       <SM.ModalStyleBox>
          <SM.CloseButtonLine>
            <SM.CloseButton onClick={closeModal}>
              <CloseButtonIcon /> <closeButtonIcon />
            </SM.CloseButton>
          </SM.CloseButtonLine>

          <SM.PalestraInfo>
            <div>
              <SM.PalestranteImage>
                <img src="data:image/png;base64,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" />
              </SM.PalestranteImage>
            </div>
            <div>
              <SM.NomePalestra>{"TITULO"}</SM.NomePalestra>
              <SM.Palestrante> {"PALESTRANTE"}</SM.Palestrante>
              <SM.Horario>
                <div>{"DATA"}</div>
                <div>{"HORARIO"}</div>
              </SM.Horario>
            </div>
          </SM.PalestraInfo>
          <SM.Resumo>{"RESUMO"}</SM.Resumo>
        </SM.ModalStyleBox> */}
    {/*   </SM.ModalStyleBackground> */}
   





      </ReactModal>
    </Evento>
  );
}
