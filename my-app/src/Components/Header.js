import React from 'react';
import styled, { css } from 'styled-components'


function Header(cores) {


    const HeaderBox = styled.div`
 
    width: 100%;
    padding: 10px; 
    background-color:white; 
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
