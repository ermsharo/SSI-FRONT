import React from 'react';
import { ArrowBaseLeft, ArrowBaseRight, Dots } from './style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cronograma from './Cronograma/index';
import LogoIntelie from '../../assets/img/patrocinio/intelie.svg';
import LogoCia from '../../assets/img/patrocinio/ciadeestagios.png';
import LogoClearSale from '../../assets/img/patrocinio/clearsaleBranco2.svg';
import LogoMicrostrategy from '../../assets/img/patrocinio/microstrategyBranco2.svg';
import LogoAlura from '../../assets/img/patrocinio/alura.png';
import LogoDataBootcamp from '../../assets/img/patrocinio/databootcamp_white.png';
import LogoNelogica from '../../assets/img/patrocinio/nelogica.svg';
import LogoStone from '../../assets/img/patrocinio/stoneBranco.svg';
import LogoCWI from '../../assets/img/patrocinio/cwi.png';
import LogoDataLab from '../../assets/img/patrocinio/kinghostBranco.svg';
import FelipeFernando from '../../assets/img/palestrantes/FelipeFernando.png';
import CamilaCarlaFernanda from '../../assets/img/palestrantes/CamilaCarlaFernanda.png';
import AndreBarbosa from '../../assets/img/palestrantes/AndreBarbosa.jpg';
import PatriciaPampanelli from '../../assets/img/palestrantes/PatriciaPampanelli.jpeg';
import JoaoXavier from '../../assets/img/palestrantes/JoaoXavier.jfif';
import JulioFlora from '../../assets/img/palestrantes/JulioDellaFlora.jpg';
import FabricioOlivetti from '../../assets/img/palestrantes/FabricioOlivetti.jpg';
import WandersonBorges from '../../assets/img/palestrantes/WandersonBorges.jpg';
import Violeta from '../../assets/img/palestrantes/Violeta.png';
import CodigoFonte from '../../assets/img/palestrantes/CodigoFonte.jpg';
import MarcoNetto from '../../assets/img/palestrantes/MarcoNetto.jpg';
import MarinaCiavatta from '../../assets/img/palestrantes/MarinaCiavatta.png';

function ArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBaseRight
      className={className}
      style={{ ...style, display:"block"}}
      onClick={onClick}
    />
  );
}
  
function ArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBaseLeft
      className={className}
      style={{ ...style, display:"block", left:"-31px" }}
      onClick={onClick}
    />
  );
}

/*let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']*/
let dias = ['21/09', '22/09', '23/09', '24/09', '25/09', ]

export default function CronogramaBox(/*{ TituloArray, DiaArray , HorarioInicioArray, HorarioFimArray ,
  PalestranteArray ,  DescricaoArray,     MiniBioArray ,  FotoArray }*/){

    var settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: <ArrowRight className='teste'/>,
        prevArrow: <ArrowLeft className='teste'/>,
        customPaging: i => (
          <Dots>
            {dias[i]}
          </Dots>
        )
      };
        
    return (
      <>
        <Slider {...settings} style={{maxWidth:"80%", width:'100%'}}>

          {/* 21/09 */}
          <Cronograma
            eventos={[
              // Eventos Tarde                      
              [
                {
                  titulo:'Tempo Real de Operações: Transformando Dados em Resultado',
                  foto:LogoIntelie,
                  palestrante:'Palestrante: D.Sc. Augusto Borella Hougaz',
                  horaInicio:'13:30',
                  horaFim:'14:30',
                  descricao:"Gosta de Big Data, análise de dados, e IoT? Então você tem que conhecer a Intelie, que oferece soluções inteligentes para diversos tipos de problemas no mercado, em várias áreas, incluindo Varejo, Gestao de Frota e Bancos e Seguradoras. Ficou curioso que quer saber mais? Visite o site: www.intelie.com.br"
                },
                {
                  titulo:'MLops: maximizando o valor da área de ciência de dados',
                  foto:FelipeFernando,
                  palestrante:'Palestrantes: Fernando Favoretti e Fernando Kenji',
                  horaInicio:'15:00',
                  horaFim:'16:00',
                  descricao:'Vamos falar um pouco de como estamos criando a área de MLOps na XP, passando sobre a história de criação do termo, relação com ciência de dados, importância da adoção e finalizando com alguns exemplos de projetos. Fernando Favoretti, formado em SI e cursando o mestrado em SI, possui especialização em investimentos e private banking, atualmente é cientista de dados sênior na XP Investimentos atuando como lead da área de MLops. Felipe Kenji, formado em SI, atualmente trabalha como engenheiro de machine learning sênior na XP Investimentos, focando na construção da área de MLops.'
                },
                {
                  titulo:'Painel Síndrome do Impostor',
                  foto:CamilaCarlaFernanda,
                  palestrante:'Palestrantes: Camila Muniz, Carla Vieira, e Fernanda Bernardo',
                  horaInicio:'16:30',
                  horaFim:'17:30',
                  descricao:'',
                }
              ],
              // Eventos Noite
              [
                {
                  titulo:'O que esperar de processos seletivos para vagas de estágio?',
                  foto:LogoCia,
                  palestrante:'Palestrante: Valéria Resende',
                  horaInicio:'18:30',
                  horaFim:'19:30',
                  descricao:'Sobre a palestrante: Head de recrutamento e seleção na Cia de Estágios com MBA em Gestão de Pessoas e psicóloga pela Universidade Federal do Mato Grosso do Sul. Atua com planejamento estratégico e condução de Programas de Estágio e vagas pontuais para empresas multinacionais e nacionais como EDP, Amil, DSM, Instituto Ayrton Senna, Goodyear e Banco Toyota.',
                },
                {
                  titulo:'Processamento de linguagem natural no mundo real: desmistificando aplicações, apresentando desafios e o mercado de trabalho',
                  foto:AndreBarbosa,
                  palestrante:'Palestrante: André Barbosa',
                  horaInicio:'20:00',
                  horaFim:'21:00',
                  descricao:''
                },
                {
                  titulo:'Em breve...',
                  foto:'',
                  palestrante:'',//'Palestrante: Daniel Redondo',
                  horaInicio:'21:30',
                  horaFim:'22:30',
                  descricao:''
                }
              ]
            ]}
          />

          {/* 22/09 */}
          <Cronograma

            eventos={[
              // Eventos Tarde                      
              [
                {
                  titulo:'Desafios tecnológicos no uso de grandes volumes de dados: Uma abordagem multidisciplinar',
                  foto:LogoClearSale,
                  palestrante:'Palestrantes: Rogério Santana, Thiago Cabral e Rubens Monteiro',
                  horaInicio:'13:30',
                  horaFim:'14:30',
                  descricao:"Neste encontro iremos compartilhar as vivências e experiências de alguns líderes da Clearsale, líder em soluções antifraude no Brasil. Falaremos dos desafios tecnológicos e de negócio relacionados ao processamento de grandes volumes de transações e dados históricos, tratando aspectos de engenharia de dados e arquitetura de soluções em um ambiente de times multidisciplinares."
                },
                {
                  titulo:'HPC, AI & Analytics - Iniciativas contra a Covid-19',
                  foto:PatriciaPampanelli,
                  palestrante:'Palestrante: Patrícia Pampanelli',
                  horaInicio:'15:00',
                  horaFim:'16:00',
                  descricao:"A humanidade enfrenta hoje um dos seus maiores desafios: a pandemia de COVID-19. Nesta palestra vamos mostrar como data analytics, data science e HPC estão ajudando a sociedade a transpor estes desafios. Cientistas em todo o mundo estão utilizando o poder computacional das GPUs para pesquisar vacinas e buscar tratamentos mais eficazes. As pesquisas vão do sequecimento do vírus até análises de imagens médicas para prover um melhor diagnótico e tratamento dos pacientes."
                },
                {
                  titulo:'Em breve...',
                  foto:'',
                  palestrante:'',//'Palestrante:',
                  horaInicio:'16:30',
                  horaFim:'17:30',
                  descricao:""
                }
              ],
              // Eventos Noite
              [
                {
                  titulo:'A carreira na área de Dados, BI e Analytics',
                  foto:LogoMicrostrategy,
                  palestrante:'Palestrante: Celso Oliveira',
                  horaInicio:'18:30',
                  horaFim:'19:30',
                  descricao:"Em um mundo cada dia mais conectado, os dados são gerados por todas as partes e as empresas já identificaram a importância de utilizar esses dados para tomarem melhores decisões e assim tornarem-se ainda mais competitivas. Participe e conheça o que você precisa saber para se diferenciar e ter sucesso em uma carreira voltada para dados e analytics.",
                },
                {
                  titulo:'Viver de Jogos? Práticas em estúdios brasileiros e vantagens em utilizar Unity',
                  foto:JoaoXavier,
                  palestrante:'Palestrante: João Paulo Xavier',
                  horaInicio:'20:00',
                  horaFim:'21:00',
                  descricao:'Uma conversa sobre o que ir atrás quando se quer trabalhar com jogos, um pouco sobre práticas de trabalho dentro de um estúdio consolidado e uma demonstração de como a Unity facilita parte do trabalho tanto para programadores quanto para outras pessoas da equipe. João Xavier, programador na Tapps Games a 2 anos e programador Unity a 7, é formado em Design de Games pela Anhembi Morumbi, tendo experiência formada por várias startups de advergames e contato com a comunidade local e internacional do mercado de jogos. João é viciado em café, game jams e boardgames, e nunca larga aquela noite virada de programação e/ou jogatina.'
                },
                  {
                  titulo:'Trapaças em jogos utilizando hardware',
                  foto:JulioFlora,
                  palestrante:'Palestrante: Julio Della Flora',
                  horaInicio:'21:30',
                  horaFim:'22:30',
                  descricao:'Objetivo dessa palestra é apresentar dispositivos eletrônicos utilizados em trapaças de jogos, serão abordados jogos online e offline em diversas plataformas como smartphones, consoles e PC. Algumas técnicas e possíveis trapaças utilizadas no cenário competitivo de jogos também serão descritas na palestra.'
                }
              ]
            ]}
          />

          {/* 23/09 */}
          <Cronograma
            eventos={[
              // Eventos Tarde                      
              [
                {
                  titulo:'Em breve...',
                  foto:LogoAlura,
                  palestrante:'',//'Palestrante:',
                  horaInicio:'13:30',
                  horaFim:'14:30',
                  descricao:""
                },
                {
                  titulo:'Uma breve introdução ao Haskell',
                  foto:FabricioOlivetti,
                  palestrante:'Palestrante: Fabrício Olivetti',
                  horaInicio:'15:00',
                  horaFim:'16:00',
                  descricao:"Nesta palestra faremos um breve passeio pela linguagem de programação Haskell ilustrando alguns de seus benefícios para seus adeptos e, também, para adeptos de outras linguagens. Aprenderemos sobre a álgebra dos tipos e porque um tipo que não guarda valor algum pode ser importante para programação segura. Também será ilustrado o benefício da construção de funções abstratas através do polimorfismo paramétrico. E, finalmente, entenderemos os benefícios do conceito de mônadas para trabalhar com efeitos colaterais."
                },
                {
                  titulo:'As 10 vulnerabilidades web mais comuns',
                  foto:'',
                  palestrante:'Palestrante: Rafael Souza',
                  horaInicio:'16:30',
                  horaFim:'17:30',
                  descricao:""
                }
              ],
              // Eventos Noite
              [
                {
                  titulo:'AI na jornada do usuário',
                  foto:LogoDataBootcamp,
                  palestrante:'Palestrante: Renan Oliveira',
                  horaInicio:'18:30',
                  horaFim:'19:30',
                  descricao:"",
                },
                {
                  titulo:'Reaprendendo a aprender com Learnig 3.0',
                  foto:WandersonBorges,
                  palestrante:'Palestrante: Wanderson Borges',
                  horaInicio:'20:00',
                  horaFim:'21:00',
                  descricao:'Estamos vivendo uma era de mudança, onde a forma como as pessoas se relacionam, aprendem, produzem e consomem está sendo impactada de forma estrutural e irreversível. Diante desse cenário é preciso se adaptar e se preparar para essa transformação e para o futuro. Wanderson é Especialista em Agilidade, Engenheiro de Software, Geek, Marido, Pai do Brian e da Evelin e Guitarrista nas horas vagas.'
                },
                {
                  titulo:'Em breve...',
                  foto:'',
                  palestrante:'', //'Palestrante:',
                  horaInicio:'21:30',
                  horaFim:'22:30',
                  descricao:''
                }
              ]
            ]}
          />

          {/* 24/09 */}
          <Cronograma
            eventos={[
              // Eventos Tarde                      
              [
                {
                  titulo:'Introdução aos Investimentos e as oportunidades na área de tecnologia',
                  foto:LogoNelogica,
                  palestrante:'Palestrante: Gabriel Fioravante',
                  horaInicio:'13:30',
                  horaFim:'14:30',
                  descricao:"Gabriel é Analista da Nelogica, investidor e entusiasta sincero do mercado. A Nelogica atua no fornecimento de informações e no desenvolvimento de aplicações avançadas para o mercado financeiro. Através da criação de softwares inovadores, proporciona aos investidores um processo de tomada de decisão muito mais seguro, estruturado e preciso. A empresa possui como maior característica o diferencial tecnológico, concentrando esforços em sistemas de análise, acompanhamento e negociação de ativos. Quer conhecer mais sobre a empresas? Acesse www.nelogica.com.br"
                },
                {
                  titulo:'Em breve...',
                  foto:'',
                  palestrante:'', //'Palestrante:',,
                  horaInicio:'15:00',
                  horaFim:'16:00',
                  descricao:""
                },
                {
                  titulo:'Painel o que a indústria acha que está faltando na nossa formação? ',
                  foto:Violeta,
                  palestrante:'Palestrantes: Violeta Sun, Luísa Agurra, Marlúcio Júnior e Mário Delvas',
                  horaInicio:'16:30',
                  horaFim:'17:30',
                  descricao:"O mercado está em constante mudança, mas nem sempre nossa formação acompanha este ritmo. Neste painel abordaremos algumas das principais necessidades do mercado, descobrindo o que de fato é importante para uma boa carreira na área de TI. A professora Violeta Sun será a mediadora desta conversa, e nossos convidados serão: Luísa Agurra, Marlúcio Júnior e Mário Delvas."
                }
              ],
              // Eventos Noite
              [
                {
                  titulo:'Em breve...',
                  foto:LogoStone,
                  palestrante:'', //'Palestrante:',
                  horaInicio:'18:30',
                  horaFim:'19:30',
                  descricao:"",
                },
                {
                  titulo:'Dicionário do Programador: A importância do conhecimento de base para se manter atualizado na área de tecnologia',
                  foto:CodigoFonte,
                  palestrante:'Palestrantes: Gabriel Fróes e Vanessa Weber (Codigo fonte TV)',
                  horaInicio:'20:00',
                  horaFim:'21:00',
                  descricao:'Através de um bate papo descontraído, o casal Gabriel Fróes e Vanessa Weber (do canal Código Fonte TV), contarão das suas motivações para a criação do canal, da importância do conhecimento de base da computação para carreira, das dificuldades e das soluções encontradas para se manter atualizados no mundo da Tecnologia. Além de abordar alguns dos temas e tecnologias relevantes para a área na atualidade e o que grandes empresas buscam nos profissionais de TI.'
                },
                {
                  titulo:'Em breve...',
                  foto:'',
                  palestrante:'', //'Palestrante: Genaro Costa',
                  horaInicio:'21:30',
                  horaFim:'22:30',
                  descricao:''
                }
              ]
            ]}
          />

          {/* 25/09 */}
          <Cronograma
            eventos={[
              // Eventos Tarde                      
              [
                {
                  titulo:'Engenharia de features - O alicerce da aprendizagem de máquina',
                  foto:LogoCWI,
                  palestrante:'Palestrante: Fábio Junqueira',
                  horaInicio:'13:30',
                  horaFim:'14:30',
                  descricao:"Desde 1991, a CWI Software está no mercado desenvolvendo softwares de alta qualidade. A empresa possui uma trajetória reconhecida no mercado e conta com um histórico de soluções entregues nas mais diversas tecnologias e segmentos de atuação, incluindo, mas não limitado a, inteligência artificial, fazendo o uso de técnicas de linguagem natural em chatbots, e a utilização de redes neurais e técnicas de deep learning que permite o reconhecimento de imagens e vozes. O palestrante Fábio é um Engenheiro de Software movido a desafios e chimarrão, que começou a programar com 14 anos e nunca mais parou. Quer conhecer mais sobre a empresa? Acesse cwi.com.br/#ecossistema"
                },
                {
                  titulo:'Oportunidades e Preparação para Carreiras em TI',
                  foto:MarcoNetto,
                  palestrante:'Palestrante: Marco Netto',
                  horaInicio:'15:00',
                  horaFim:'16:00',
                  descricao:"A palestra cobrirá possíveis direções de carreiras na área de TI (academia, startups, pequenas e grandes empresas, etc.), como se preparar durante os diferentes ciclos de desenvolvimento acadêmico (graduação, mestrado, doutorado), cuidados ao preparar curriculum, e tecnologias e habilidades que são importantes aprender agora e para os próximos anos."
                },
                {
                  titulo:'Painel Carreira Acadêmica em Computação',
                  foto:'',
                  palestrante:'Palestrantes: Ariane Machado, Daniel Cordeiro, Luciano Araújo, Luciano Digiampietri e Marcelo Eler',
                  horaInicio:'16:30',
                  horaFim:'17:30',
                  descricao:""
                }
              ],
              // Eventos Noite
              [
                {
                  titulo:'Machine Learning Operations',
                  foto:'', //LogoDataLab,
                  palestrante:'Palestrante: Rafael Monteiro',
                  horaInicio:'18:30',
                  horaFim:'19:30',
                  descricao:"Rafael Monteiro é Lead Data Scientist no DataLab Serasa Experian e conta com mais de 8 anos de experiência nas áreas de finanças, telecom e e-commerce. Entre seus principais interesses estão Big Data, High Performance Computing e Inteligência Artificial. Atua principalmente em sistemas de missão crítica que requerem alto desempenho e escalabidade, já passou por empresas como BM&FBovespa, Elo7 e Itaú Unibanco.",
                },
                {
                  titulo:'Alerta de invasão: ataques e histórias de uma Engenheira Social',
                  foto:MarinaCiavatta,
                  palestrante:'Palestrante: Marina Ciavatta',
                  horaInicio:'20:00',
                  horaFim:'21:00',
                  descricao:'Você já ouviu falar de Engenharia Social? Também conhecida como "Hacking Humano", é uma das principais ameaças de Segurança para empresas e para indivíduos. Inúmeros golpes e ataques que vemos hoje em dia são frutos de Engenharia Social usada por criminosos para roubar dados e documentos importantes das pessoas. Nesta palestra você vai conhecer os principais golpes e como eles funcionam, além de como se proteger. Tudo isso será contado por uma Engenheira Social que é contratada como uma "espiã da vida real" por grandes empresas para invadi-las e ensinar a detectar esses ataques antes que se tornem tragédias. Marina Ciavatta é Engenheira Social especializada em invasões físicas e treinamentos de Conscientização em Segurança da Informação. Como pentester física já invadiu algumas das maiores empresas brasileiras, em todas as áreas. Foi líder do maior programa de voluntariado para eventos de hacking e tecnologia, tendo treinado mais de 1.500 pessoas. Aficionada por hacking humano (Engenharia Social) e Lock Picking, tem muitas histórias pra contar e dicas de ataques e defesa na manga.'
                },
                {
                  titulo:'Em breve...',
                  foto:'',
                  palestrante:'', //'Palestrante:',
                  horaInicio:'21:30',
                  horaFim:'22:30',
                  descricao:''
                }
              ]
            ]}
          />
        </Slider>
      </>
    );
}