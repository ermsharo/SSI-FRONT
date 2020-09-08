import React from 'react';
import { GenericSize, Titulo, ItemSpace, Item, ItemIcon, ItemTitle, ItemText, Link } from './style';


function Info(props) {
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
                  A Semana de Sistemas de Informação (SSI) é um evento anual organizado pelas alunas e pelos alunos do curso de Sistemas de Informação da Escola de Artes, Ciências e Humanidades (EACH-USP).
              </ItemText>
              <ItemText>
                  Nesta semana são apresentadas diversas palestras, workshops e outras atividades focadas no mundo de TI, com assuntos como tecnologia, mercado de trabalho, empreendedorismo, entre outros.
              </ItemText>
          </Item>
          <Item>
              <ItemIcon>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
              </ItemIcon>
              <ItemTitle>Onde e quando?</ItemTitle>
              <ItemText>
                  Esse ano teríamos a X SSI. Contudo, devido ao contexto de pandemia em que nos encontramos, apresentamos a vocês a primeira Semana de Sistemas de Informação Online!
              </ItemText>
              <ItemText>
                  As transmissões ocorrerão entre os dias 21 e 25 de setembro, no canal da Twitch. Então, já deixe nosso canal anotado no caderninho!
              </ItemText>
              <ItemText>
                  <a href='https:\\twitch.tv/each_ssi' style={{textDecoration:"none", color:"#fffc33", }} target="_blank" rel="noopener noreferrer"> twitch.tv/each_ssi </a>
              </ItemText>
          </Item>
          <Item>
              <ItemIcon>
                  <i class="fa fa-twitch" aria-hidden="true"></i>
              </ItemIcon>
              <ItemTitle>Como participo?</ItemTitle>
              <ItemText>
                  Todo mundo pode se inscrever na SSI Online!
              </ItemText>

              <ItemText>
                  {/* As inscrições começam dia X/X e vão até o dia X/X. */}
                  Para realizar a inscrição, insira seu número USP ou CPF 
                  <a href='http://www.each.usp.br/petsi/saphira/loginParticipante.php' style={{textDecoration:"none", color:"#fffc33", }} target="_blank" rel="noopener noreferrer"> clicando aqui! </a>
              </ItemText>
              <ItemText>
                  Fiquem ligados em nossas redes sociais para novas atualizações!
                 {/*  Para realizar a sua inscrição, <Link onClick={props.handleClickInscricao}> clique aqui! </Link> */}
              </ItemText>
          </Item>
      </ItemSpace>
    </GenericSize>
  );
}

export default Info;
