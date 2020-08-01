import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, ItemIcon, ItemTitle, ItemText } from './style';


function Info() {
  return (
    <GenericSize>
      <Titulo>Informações Gerais</Titulo>
      <ItemSpace>
          <Item>
              <ItemIcon>
                  <i class="fa fa-laptop" aria-hidden="true"></i>
              </ItemIcon>
              <ItemTitle>O que é?</ItemTitle>
              <ItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut est convallis neque pharetra venenatis. Nam eu enim cursus, mollis nibh viverra, sollicitudin justo. Vivamus id augue sed sapien aliquam pellentesque.
              </ItemText>
          </Item>
          <Item>
              <ItemIcon>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
              </ItemIcon>
              <ItemTitle>Onde e quando?</ItemTitle>
              <ItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut est convallis neque pharetra venenatis. Nam eu enim cursus, mollis nibh viverra, sollicitudin justo. Vivamus id augue sed sapien aliquam pellentesque.
              </ItemText>
          </Item>
          <Item>
              <ItemIcon>
                  <i class="fa fa-twitch" aria-hidden="true"></i>
              </ItemIcon>
              <ItemTitle>Como participo?</ItemTitle>
              <ItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut est convallis neque pharetra venenatis. Nam eu enim cursus, mollis nibh viverra, sollicitudin justo. Vivamus id augue sed sapien aliquam pellentesque.
              </ItemText>
          </Item>
      </ItemSpace>
    </GenericSize>
  );
}

export default Info;
