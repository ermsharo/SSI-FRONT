import React /*, { useState, useEffect }*/ from "react";
import Site from "./Components/Site";
import "./App.css";
/* import "./Style/globalStyle.css"; */

function App() {
  /*
  const [, setErrors] = useState(false);
  const [dataPlanilha, setDataPlanilha] = useState(null);
  const [firstTime, setFirstTime] = useState(false);

  let url = "https://spreadsheets.google.com/feeds/cells/1rCPzAPRs3YC3YYq_vmQBZzO6vAX8QRdce8fsIazJrh4/1/public/full?alt=json"; 


  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(res => {

          let Requisicao = res; 
         
          if(firstTime == false){
            setDataPlanilha(Requisicao);
            setFirstTime(true);
            console.log("aqui esta", dataPlanilha);
          }
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  */
  
  return (
    <div className="App">
      <Site /*JsonData = {dataPlanilha}*/ />
    </div>
  );
}

export default App;
