import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardDesktop from "./CardDesktop.jsx";
import CarouselDesktop from "./CarouselDesktop.jsx";

//projetos
import musicProject from "../../../img/projects/music.jpg";
import streamProject from "../../../img/projects/stream.jpg";
import solucoesProject from "../../../img/projects/solucoes.jpg"; //*Upload
import tecnologoProject from "../../../img/projects/tecnologo.jpg";
import dashProject from "../../../img/projects/dash.jpg";
import lojaProject from "../../../img/projects/loja.jpg";
import clinicaProject from "../../../img/projects/clinica.jpg";
import escritorioProject from "../../../img/projects/escritorio.jpg";
import cordelProject from "../../../img/projects/cordel.jpg";
import loginProject from "../../../img/projects/login.jpg";
import formProject from "../../../img/projects/form.jpg";
import bibliografiaProject from "../../../img/projects/bibliografia.jpg";

import "../../../styles/components/slider/desktop/sliderCardDesktop.sass";

export const cards = [
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={musicProject}
        name="MusicDot"
        id="01"
        description="Site com tematica musical, apresentando uma escola de musica com cursos, videos-aulas e conteudos diversos para seus clientes."
        detail="Responsivo, Estilizado, Institucional, Várias Págínas."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={streamProject}
        name="StreamFlix"
        id="02"
        description="Site com tematica para stream de filmes,series e novidades. Apresentando uma plataforma de vídeos online com uma biblioteca, área para usuários se cadastrar, planos e muito mais."
        detail="Responsivo*, Estilizado, Institucional, Várias Págínas."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={solucoesProject}
        name="NN Solucões"
        id="03"
        description="Site com tematica de suporte cibernetico. Apresentando uma plataforma com serviços de gerenciamento de sites e servidores."
        detail="Estático*, Estilizado, Institucional, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={tecnologoProject}
        name="NN - Construção Civil"
        id="04"
        description="Site Pessoal/Profissional com tematica de construção civil. Apresentando os serviços prestados por parte do profissional, neste caso para planejamento e execução de obras."
        detail="Responsivo*, Estilizado, Empresarial, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={dashProject}
        name="Dashboard"
        id="05"
        description="Landpage com tematica de dashboard. Apresentando uma área para usuarios do aplicativo, com várias opções para gerenciamento de tarefas."
        detail="Estático*, Apenas UX, Empresarial, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={lojaProject}
        name="Loja de Eletro"
        id="06"
        description="Landpage com tematica de loja online. Apresentando uma perspectiva de loja online de produtos eletrônicos, com visualização do produto, pesquisa por nome, tipo, valores e afins"
        detail="Estático*, Apenas UX, Empresarial, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={clinicaProject}
        name="Clínica Odontológica"
        id="07"
        description="Landpage com tematica de clínica especializada. Apresentando uma clinica médica e seus serviços odontológicos, planos, opiniões dos clientes, e afins."
        detail="Estático*, Apenas UX, Empresarial, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={escritorioProject}
        name="Aplicativo Mobile"
        id="08"
        description="Landpage para demonstração de Aplicativo Mobile. Apresentando uma perspectiva de aplicativo em sua versão mobile com disposição de elementos."
        detail="Estático*, Apenas UX, Portifólio, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={cordelProject}
        name="Conto de Cordel"
        id="09"
        description="Landpage com tematica de página de livro de cordel. Apresentando um cordel com efeitos de visualização que promovam a apreciação do texto."
        detail="Estático*, Apenas UX (Paralax), Institucional, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={loginProject}
        name="Página de Login"
        id="10"
        description="Landpage com tematica de login de usuário. Apresentando uma área para o usuário do aplicativo obter acesso a plataforma."
        detail="Estático*, Apenas UX, Institucional, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={formProject}
        name="Form. de Inscrição"
        id="11"
        description="Landpage com tematica de formulário. Apresentando uma área para inscrição de usuário de uma biblioteca."
        detail="Estático*, Apenas UX, Institucional, Página Única."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <CardDesktop
        img={bibliografiaProject}
        name="Blog Pessoal"
        id="11"
        description="Landpage com tematica de blog pessoal. Apresentando um blog com bibliografia, fotos e contato de uma modelo."
        detail="Estático*, Apenas UX, Institucional, Várias páginas."
      />
    ),
  },
];

function SliderCardDesktop() {
  return (
    <div className="main-desktop">
      <CarouselDesktop
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={1}
        showArrows={true}
      />
    </div>
  );
}

export default SliderCardDesktop;
