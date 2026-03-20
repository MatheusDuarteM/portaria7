// lib/data.ts
export interface MovieFeedback {
  title: string;
  category: string;
  views: string;
  imageUrl: string;
  youtuber: string;
  feedback: string;
  youtuber2: string;
  feedback2: string;
  youtuber3: string;
  feedback3: string;
  rating: number;
  videoLink: string;
}

export const movies: MovieFeedback[] = [
  {
    title: "Aquele filme de terror que parece comédia",
    category: "Humor",
    views: "Comedia, Terror visualizações",
    imageUrl: "/capa1.jpg",
    youtuber: "Duartinh10",
    feedback: "Uma verdadeira pérola do cinema 'B'...",
    youtuber2: "Café com Fritas",
    feedback2: "O filme é tão ruim que chega a ser bom...",
    youtuber3: "Sombra",
    feedback3: "Recomendo para quem quer uma experiência única...",
    rating: 8.5,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Por que o Batman nunca usa o interfone?",
    category: "Investigação",
    views: "Humor, Drama visualizações",
    imageUrl: "/capa2.jpg",
    youtuber: "Duartinh10",
    feedback:
      "Uma análise necessária sobre a segurança de condomínios em Gotham.",
    youtuber2: "Café com Fritas",
    feedback2:
      "O vídeo explora de forma divertida e crítica as possíveis razões por trás dessa escolha do Batman, misturando humor e investigação.",
    youtuber3: "Sombra",
    feedback3:
      "Indispensável para fãs de super-heróis e entusiastas de teorias conspiratórias sobre a vida cotidiana dos vigilantes urbanos.",
    rating: 9.2,
    videoLink: "https://www.youtube.com/watch?v=exemplo2",
  },
  {
    title: "Por que o Batman nunca usa o interfone?",
    category: "Investigação",
    views: "Humor, Drama visualizações",
    imageUrl: "/capa2.jpg",
    youtuber: "Duartinh10",
    feedback:
      "Uma análise necessária sobre a segurança de condomínios em Gotham.",
    youtuber2: "Café com Fritas",
    feedback2:
      "O vídeo explora de forma divertida e crítica as possíveis razões por trás dessa escolha do Batman, misturando humor e investigação.",
    youtuber3: "Sombra",
    feedback3:
      "Indispensável para fãs de super-heróis e entusiastas de teorias conspiratórias sobre a vida cotidiana dos vigilantes urbanos.",
    rating: 9.2,
    videoLink: "https://www.youtube.com/watch?v=exemplo2",
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
};

export const headerData = {
  span: "Portaria 7",
  a: "Início",
  a2: "Vídeos",
  a3: "Regimento",
  button: "Entrar para o Condomínio",
};
