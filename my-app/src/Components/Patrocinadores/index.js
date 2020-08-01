import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, LogoStyle } from './style';
import LogoPatrocinio from '../../assets/img/logoPatrocinio.png';

function Patrocinadores() {
  return (
    <GenericSize>
      <Titulo>Patrocinio</Titulo>
      <ItemSpace>
          <Item>
              <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 1"/>
          </Item>
          <Item>
              <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 2"/>
          </Item>
          <Item>
              <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 3"/>
          </Item>
          <Item>
              <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 4"/>
          </Item>
          <Item>
              <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 5"/>
          </Item>
          <Item>
              <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 6"/>
          </Item>
          <Item>
              <LogoStyle src={LogoPatrocinio} class="logo" alt="Logo 7"/>
          </Item>
      </ItemSpace>
    </GenericSize>
  );
}

export default Patrocinadores;
