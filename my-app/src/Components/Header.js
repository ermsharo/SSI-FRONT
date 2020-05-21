import React from 'react';
import styled, { css } from 'styled-components'


function Header(cores) {


    var color = 'purple';
    var font1 = "Arial"; 
    var font2 = "helvetica"; 
    const HeaderBox = styled.div`
 
    width: 100%;
    padding: 10px; 
    color:${color};  
    font-family:${font1} ;
    display:flex;

    `;


const HeaderUlBox = styled.ul`
 
 list-style:none;
 display: inline; 

`;
  

  return (
    
    <div>
        
        <HeaderBox>

            <div> 

                aqui vai a imagem da logo 

            </div>

            <HeaderUlBox>
                <li>Programação</li> 
                <li>Informações</li>    
                <li>Patrocinadores</li>    
                <li>Apoio</li>    
                <li>Inscrição</li>    
            </HeaderUlBox>
            

        </HeaderBox>


    </div>
  );
}

export default Header;
