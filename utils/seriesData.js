const seriesData = {
    "stranger-things": {
        id: "stranger-things",
        title: "Stranger Things",
        description: "Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais e uma garotinha estranha.",
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
        rating: "16",
        seasons: [
            {
                number: 1,
                episodes: [
                    {
                        number: 1,
                        title: "Capítulo Um: O Desaparecimento de Will Byers",
                        description: "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são mistérios, forças sobrenaturais e uma menina.",
                        thumbnail: "https://image.tmdb.org/t/p/w500/AdwxWuK6cX4Y2T5t8zAm92YhZY0.jpg",
                        videoUrl: "b9EkMc79ZSU"
                    }
                ]
            }
        ]
    },
    "the-witcher": {
        id: "the-witcher",
        title: "The Witcher",
        description: "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas frequentemente são mais perversas que as criaturas selvagens.",
        poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B6J8.jpg",
        rating: "16",
        videoId: "ndl1W4ltcmg"
    },
    // Adding 5 new series
    "true-detective": {
        id: "true-detective",
        title: "True Detective",
        description: "Uma investigadora veterana e uma especialista em mergulho se unem para investigar um caso misterioso no Alasca.",
        poster: "https://image.tmdb.org/t/p/w500/5Mk2lDvTc9GNR1uRNH5FX0Uf5yi.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/pCJ9UgrqEjHR1nKtGiLHOtgXiwJ.jpg",
        rating: "18",
        videoId: "0gVzB6JB3Wk"
    },
    "house-of-dragon": {
        id: "house-of-dragon",
        title: "House of the Dragon",
        description: "A história da família Targaryen, 200 anos antes dos eventos de Game of Thrones.",
        poster: "https://image.tmdb.org/t/p/w500/ruHPkmmAwBTCzNXtHot18rs6ctN.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
        rating: "18",
        videoId: "DotnJ7tTA34"
    },
    "the-last-of-us": {
        id: "the-last-of-us",
        title: "The Last of Us",
        description: "Joel e Ellie, conectados pela brutalidade do mundo em que vivem, são forçados a enfrentar circunstâncias devastadoras e monstros brutais em uma jornada pelos EUA pós-pandemia.",
        poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
        rating: "16",
        videoId: "uLtkt8BonwM"
    },
    "the-bear": {
        id: "the-bear",
        title: "The Bear",
        description: "Um jovem chef retorna a Chicago para administrar a lanchonete da família após uma morte trágica.",
        poster: "https://image.tmdb.org/t/p/w500/6tZXBKFcQiv0CeX1PZHuiL89up6.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/1RWLMyC9KcFfcaoViMiJGSSJmmh.jpg",
        rating: "16",
        videoId: "y-cqqAJIXhs"
    }
};

// Ensure seriesData is an object
if (!seriesData || typeof seriesData !== 'object') {
    seriesData = {};
}
