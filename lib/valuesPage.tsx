// lib/data.ts

export interface MovieFeedback {
  title: string;
  category: string;
  imageUrl: string;
  youtuber: string;
  feedback: string;
  nota1: number;
  youtuber2: string;
  feedback2: string;
  nota2: number;
  youtuber3: string;
  feedback3: string;
  nota3: number;
  rating: number;
  videoLink: string;
}

export const movies: MovieFeedback[] = [
  {
    title: "Aquele filme de terror que parece comédia",
    category: "Humor",
    imageUrl: "/oprimata.jpg",
    youtuber: "Duartinh10",
    feedback: "Uma verdadeira pérola do cinema 'B'...",
    nota1: 8.5,
    youtuber2: "Café com Fritas",
    feedback2: "O filme é tão ruim que chega a ser bom...",
    nota2: 7.0,
    youtuber3: "Sombra",
    feedback3: "Recomendo para quem quer uma experiência única...",
    nota3: 9.0,
    rating: Number(((8.5 + 7.0 + 9.0) / 3).toFixed(1)),
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const footerData = {
  h2: "Regimento Interno",
  p: "Bem-vindo ao Condomínio Sétima Arte. Para garantir a harmonia e segurança de todos, é fundamental seguir as regras estabelecidas no nosso regimento interno:",
  li: "Reações sinceras.",
  li2: "Análises da guarita.",
  h3: "Aviso do Síndico",
  p2: "Inscreva-se para evitar multas!",
  a: "Entrar para o Condomínio",
};

export const heroData = {
  span: "Última Entrega na Portaria",
  h1: "Encomendas cinematográficas e fofocas do sétimo andar.",
  p: "Descubra os segredos por trás das entregas mais intrigantes do condomínio, onde cada pacote tem uma história para contar.",
  videoUrl: "https://www.youtube.com/watch?v=IdaUyZn3FRk",
};

export const headerData = {
  span: "Portaria 7",
  a: "Início",
  a2: "Vídeos",
  a3: "Regimento",
  button: "Entrar para o Condomínio",
};
