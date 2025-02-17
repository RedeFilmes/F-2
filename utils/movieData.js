const movieData = {
    featured: [
        {
            id: 1,
            title: "Aquaman e o Reino Perdido",
            description: "Após fracassar em derrotar Aquaman da primeira vez, o Mantaa liberar uma força antiga e maligna.",
            backdrop: "https://www.themoviedb.org/t/p/original/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
            poster: "https://www.themoviedb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
            videoId: "Grs8vEDandM",
            year: "2023",
        },
   
        {
            id: 3,
            title: "Ghostbusters: Apocalipse de Gelo",
            description: "A família Spengler retorna a Nova York, onde tudo começou. Com uma nova ameaça misteriosa, os Caça-Fantasmas originais e a nova geração devem unir forças para salvar o mundo.",
            backdrop: "https://www.themoviedb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
            poster: "https://www.themoviedb.org/t/p/w500/8yLzd8z7xUH5HM7VuROTGwFkaHH.jpg",
            videoId: "uq8yqVKuZ1k",
            year: "2024",
        },
     

        
    ],

    trending: [
        {
            id: 4,
            title: "No Tempo de Deus",
            description: "A trama acompanha quatro pessoas que perderam a fé e enfrentam desafios pessoais: um morador de rua, um soldado que sai da escola após o suicídio de seu irmão, uma mulher grávida e um médico cuja esposa está morrendo de câncer. À medida que cada um enfrenta suas provações, eles têm a chance de encontrar o amor de Deus.",
            poster: "https://m.media-amazon.com/images/S/pv-target-images/c4f163d47f4e2d024473aea5d4ca2d4770449b45e930af7b82edc4766a2493ba.jpg",
            videoId: "z2QXbBn5tNw",
            year: "2017",
            duration:"1h25"
        },
        // Adding 5 new trending movies
        {
            id: 11,
            title: "Madame Teia",
            description: "Cassandra Webb é uma paramédica em Manhattan que pode ter habilidades de clarividência. Forçada a confrontar revelações sobre seu passado, ela forja uma relação com três jovens destinadas a futuros poderosos.",
            poster: "https://www.themoviedb.org/t/p/w500/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
            videoId: "s_76M4c4LTo",
            year: "2024",
            duration: "1h 56min"
        },
        {
            id: 12,
            title: "Bob Marley: One Love",
            description: "A história do ícone que inspirou gerações através de sua mensagem de amor e união. Bob Marley supera adversidades para realizar shows históricos em um momento político decisivo na Jamaica.",
            poster: "https://www.themoviedb.org/t/p/w500/oZJfw78ZyPmgNJ0YJ8070nKEF4Y.jpg",
            videoId: "ajw425Kuvtw",
            year: "2024",
            duration: "1h 47min"
        },
        {
            id: 13,
            title: "Pobres Criaturas",
            description: "A jovem Bella Baxter é trazida de volta à vida pelo brilhante e pouco ortodoxo cientista Dr. Godwin Baxter. Ela foge com um advogado em uma aventura pelo mundo.",
            poster: "https://www.themoviedb.org/t/p/w500/hAQmKqSBNvix5kpQtEQYzuXl2ku.jpg",
            videoId: "RlbR5N6veqw",
            year: "2024",
            duration: "2h 21min"
        },
        {
            id: 14,
            title: "Zona de Interesse",
            description: "O comandante de Auschwitz Rudolf Höss e sua esposa Hedwig se esforçam para construir uma vida de sonhos para sua família em uma casa com jardim ao lado do campo.",
            poster: "https://www.themoviedb.org/t/p/w500/qptLj4WxXuTjhR5E2SqPkjKhvX8.jpg",
            videoId: "7o8VHdZ_QJw",
            year: "2024",
            duration: "1h 45min"
        }
    ],

    recentes: [
        {
            id: 7,
            title: "E Se… Você Tivesse Uma Segunda Chance?",
            description: "A história segue Ben Walker (Kevin Sorbo), que, há 15 anos, abandonou sua namorada de faculdade, Wendy (Kristy Swanson), e sua vocação religiosa para seguir uma carreira nos negócios. Agora, bem-sucedido e prestes a se casar, sua vida toma um rumo inesperado quando seu carro quebra misteriosamente. Ele é visitado por Mike (John Ratzenberger), um motorista de caminhão-guincho que se revela um anjo enviado para mostrar a Ben como sua vida poderia ter sido se ele tivesse feito escolhas diferentes. Antes de retornar à sua vida anterior, Ben deve abraçar essa nova realidade e descobrir o valor da fé e da família, buscando seu verdadeiro propósito..",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7ClXRe_YrM6v3d182N_Bj-FZpd7Q0EAmMJK4zSiaH_l21gCIOuv0-ID_gNZ5yzigSo4&usqp=CAU",
            videoId: "dvtJLTZfCMg",
            year: "2010",
        },
        {
            id: 15,
            title: "Em Defesa de Cristo",
            description: "O jornalista investigativo e ex-ateu Lee Strobel decide usar suas habilidades profissionais para refutar o cristianismo depois que sua esposa se converte. Determinado a provar que a fé dela é baseada em mitos e crenças sem fundamento, ele embarca em uma investigação profunda, entrevistando especialistas em história, teologia, arqueologia e medicina forense. No entanto, à medida que analisa as evidências, Strobel se vê confrontado com fatos surpreendentes que desafiam suas convicções.",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgKIBymJ0AViiJKn3Ytlhga4WlLIOHdra6w&s",
            videoId: "8Vb2KN_C1fE?si",
            year: "2017",
        },
        {
            id: 10,
            title: "A PROCURA DA FELICIDADE",
            description: "A autobiografia de Chris Gardner narra sua jornada de superação, desde a infância difícil até os desafios enfrentados como pai solteiro, sem-teto e aspirante a corretor da bolsa de valores. Determinado a mudar de vida, ele luta contra a pobreza extrema, dormindo com seu filho em abrigos e banheiros públicos, enquanto se esforça para conquistar um lugar no competitivo mundo financeiro. Sua história é um testemunho de resiliência, determinação e esperança..",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKOxY-PrFBanpLi0nqIIKdwJzPJNhN1dpmQ&s",
            videoId: "KS3vxhFzwjQ?si",
            year: "2006",
        },
        {
            id: 10,
            title: "Um Anjo em Nossas Vidas",
            description: "A obra traz uma mensagem espiritual sobre a presença de anjos e espíritos protetores em nossas vidas. Com uma linguagem envolvente e reflexiva, o autor busca transmitir ensinamentos sobre amor, fé e esperança, mostrando que nunca estamos sozinhos. O livro é inspirado em valores cristãos e espirituais, abordando temas como proteção divina, sinais do universo e a importância da bondade no dia a dia. É uma leitura reconfortante para quem busca fortalecer sua espiritualidade e acreditar na presença de forças invisíveis que nos guiam. Se você quiser mais detalhes sobre o livro ou seu significado, me avise! 😊",
            poster: "https://images-01.ottvs.com.br/0194393/0194393_335.jpg",
            videoId: "25WTt2yDXwU",
            year: "2024",
        },
    
    {
        id: 10,
        title: "Nunca Me Sonharam",
        description: "'Nunca Me Sonharam aborda' a realidade do ensino médio nas escolas públicas do Brasil. Através de depoimentos de alunos, professores e especialistas, o filme retrata os desafios enfrentados dentro e fora da sala de aula, como a falta de infraestrutura, o desinteresse dos jovens e a desigualdade social. A obra destaca o impacto da educação na vida dos estudantes e questiona como a sociedade enxerga o futuro da juventude brasileira. O título reflete a falta de expectativas que muitos jovens sentem, mas também a esperança de que a educação pode transformar vidas.",
        poster: "https://i.ytimg.com/vi/Grs8vEDandM/maxresdefault.jpg",
        videoId: "Grs8vEDandM",
        year: "2017",
    },
    {
        id: 10,
        title: "O evangelho do reino chegou ao nosso vilarejo",
        description: "No pequeno vilarejo onde vive Yilin, a chegada do evangelho do reino transforma a vida de algumas pessoas que aceitam a nova fé. No entanto, a conversão deles desperta a oposição dos pastores religiosos locais, que fazem de tudo para impedir que os fiéis sigam a obra de Deus Todo-Poderoso. Com a comunidade dividida, Yilin e seus companheiros enfrentam perseguições e provações. Apesar dos desafios, eles se mantêm firmes na fé, buscando discernir a verdadeira obra de Deus nos últimos dias. O filme aborda a luta entre a tradição religiosa e a nova revelação, levando os personagens a questionar suas crenças e a buscar a verdade.",
        poster: "https://i.ytimg.com/vi/yR5tZ-5eqZQ/mqdefault.jpg",
        videoId: "yR5tZ-5eqZQ",
      
    },
    {
        id: 10,
        title: "O mensageiro do evangelho",
        description: "'O Mensageiro do Evangelho' é um filme gospel que narra a jornada de Chen Yixin, uma cristã dedicada que, após reconhecer a obra de Deus Todo-Poderoso nos últimos dias, sente a responsabilidade de espalhar o evangelho. Ela enfrenta desafios significativos ao compartilhar sua fé, especialmente diante da oposição de líderes religiosos tradicionais que tentam impedir a disseminação da nova mensagem. A trama destaca a coragem e a determinação de Yixin em cumprir sua missão divina, apesar das adversidades.",
        poster: "https://i.ytimg.com/vi/4uQ30PCHVPw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYWnbWzAE_j8PQWi70lA6wpc_CwA",
        videoId: "4uQ30PCHVPw",
       
    }


    ],
    popular: [
        {
            id: 10,
            title: "Duna: Parte 2",
            description: "Paul Atreides se une a Chani e aos Fremen em uma jornada de vingança contra os conspiradores que destruíram sua família.",
            poster: "https://www.themoviedb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
            videoId: "vmkwwXmRVSk",
            year: "2024",
            duration: "2h 46min"
        },
        {
            id: 10,
            title: "Duna: Parte 2",
            description: "Paul Atreides se une a Chani e aos Fremen em uma jornada de vingança contra os conspiradores que destruíram sua família.",
            poster: "https://www.themoviedb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
            videoId: "vmkwwXmRVSk",
            year: "2024",
            duration: "2h 46min"
        },
        {
            id: 10,
            title: "Duna: Parte 2",
            description: "Paul Atreides se une a Chani e aos Fremen em uma jornada de vingança contra os conspiradores que destruíram sua família.",
            poster: "https://www.themoviedb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
            videoId: "vmkwwXmRVSk",
            year: "2024",
            duration: "2h 46min"
        }
    ]
};

//Certifique-se de que todos os arrays estejam inicializados corretamente
if (!movieData.featured) movieData.featured = [];
if (!movieData.trending) movieData.trending = [];
if (!movieData.recentes) movieData.recentes = [];
if (!movieData.popular) movieData.popular = [];
