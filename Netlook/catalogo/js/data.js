const allCategories = {
    filmes: [
        {
            title: "Épicos",
            items: [
                { img: "https://images.justwatch.com/poster/134966971/s718/forrest-gump-o-contador-de-historias.jpg", title: "Forrest Gump", top10: true, badge: "Clássico", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg" },
                { img: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg", title: "Senhor dos Anéis: A Sociedade do Anel", top10: true, badge: "Top 10", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=V75dMMIW2B4" }
            ]
        },
        {
            title: "Ação & Aventura",
            items: [
                { img: "https://m.media-amazon.com/images/M/MV5BZDJkNzQ2ZGMtZmI5YS00NzUxLThmNGEtZmE2OWY0MzE1NGM3XkEyXkFqcGc@._V1_.jpg", title: "Mad Max: Fúria", top10: true, badge: "Top 10", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=cNQGfWtaKLI" },
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8qOwQ5bMOsevXWxFwtPeem_Nnd4ORZIVlw&s", title: "Matrix", badge: "Cult", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=mPYfd6PCmYY" }
            ]
        },
        {
            title: "Comédia",
            items: [
                { img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg", title: "Grande Hotel Budapeste", badge: "Indicado", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=sF7hAbQR7kk" },
                { img: "https://i.redd.it/qi5zd343wnqb1.jpg", title: "Feitiço do Tempo", badge: "Clássico", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=3KUvUeIeNSE" }
            ]
        },
        {
            title: "Animações",
            items: [
                { img: "https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg", title: "Toy Story", top10: true, badge: "Clássico", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=K53bxqOuThQ" },
                { img: "https://br.web.img2.acsta.net/pictures/210/461/21046189_20131002174340886.jpg", title: "Frozen - Uma Aventura Congelante", top10: true, badge: "Top 10", badgeColor: "#3b82f6", type: "movie", youtube: "https://www.youtube.com/watch?v=TbQm5doF_Uc" }
            ]
        }
    ],
    series: [
        {
            title: "Ficção Científica",
            items: [
                { img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Stranger_Things_season_1.jpg", title: "Stranger Things", top10: true, badge: "S4", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=mnd7sFt5c3A" },
                { img: "https://upload.wikimedia.org/wikipedia/pt/0/04/The_Mandalorian_season_1_poster.jpg", title: "The Mandalorian", top10: true, badge: "S3", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=Iw7klwDYocM" }
            ]
        },
        {
            title: "Drama",
            items: [
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6uPoViQRda7YXdoyQfFhlJ_S97WunjGz2Ds4Xsn7tKVhLq_IXtdS3T44QjRu03kQ_RSJtcbpgYXcJAuKS5TI4RhROgK_pPlUFv2SBfQ&s=10", title: "Breaking Bad", top10: true, badge: "S5", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=HhesaQXLuRY" },
                { img: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg", title: "Game of Thrones", top10: true, badge: "S8", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=KPLWWIOCOOQ" }
            ]
        },
        {
            title: "Suspense & Thriller",
            items: [
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdw2XKFGWMZEb9FKCXepKXpyXeBt4vYvn7Q&s", title: "Dexter", top10: true, badge: "Intenso", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=nQQKe6aH6UU" },
                { img: "https://br.web.img3.acsta.net/pictures/19/08/07/17/01/2286697.jpg", title: "Mindhunter", badge: "Perturbador", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=J4LWdJHJxbs" }
            ]
        },
        {
            title: "Comédia",
            items: [
                { img: "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg", title: "The Office", top10: true, badge: "S9", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=tNcDHWpselE" },
                { img: "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_.jpg", title: "Brooklyn Nine-Nine", badge: "S8", badgeColor: "#3b82f6", type: "series", youtube: "https://www.youtube.com/watch?v=icTOP9F17pU" }
            ]
        }
    ],
    livros: [
        {
            title: "Ficção Científica",
            items: [
                { img: "https://m.media-amazon.com/images/I/81zN7udGRUL.jpg", title: "Duna", badge: "Clássico", badgeColor: "#3b82f6", type: "book" },
                { img: "https://m.media-amazon.com/images/I/712vJIziMgL.jpg", title: "Fundação", top10: true, badge: "Top 10", badgeColor: "#3b82f6", type: "book" }
            ]
        },
        {
            title: "Romance",
            items: [
                { img: "https://m.media-amazon.com/images/I/719esIW3D7L.jpg", title: "Orgulho e Preconceito", top10: true, badge: "Clássico", badgeColor: "#3b82f6", type: "book" },
                { img: "https://cdn.30porcento.com.br/capas/9786559790340.jpg", title: "Jane Eyre", badge: "Clássico", badgeColor: "#3b82f6", type: "book" }
            ]
        },
        {
            title: "Mistério & Thriller",
            items: [
                { img: "https://m.media-amazon.com/images/I/8147kKLLvOL.jpg", title: "O Iluminado", top10: true, badge: "Clássico", badgeColor: "#3b82f6", type: "book" },
                { img: "https://livrarialoyola.fbitsstatic.net/img/p/o-codigo-da-vinci-robert-langdon-livro-2-199074/393818.jpg?w=800&h=800&v=no-change&qs=ignore", title: "Código da Vinci", badge: "Bestseller", badgeColor: "#3b82f6", type: "book" }
            ]
        },
        {
            title: "Fantasia & Aventura",
            items: [
                { img: "https://m.media-amazon.com/images/I/81O4aC-QXYL._UF1000,1000_QL80_.jpg", title: "Harry Potter", top10: true, badge: "Top 10", badgeColor: "#3b82f6", type: "book" },
                { img: "https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg", title: "Senhor dos Anéis", top10: true, badge: "Obra-Prima", badgeColor: "#3b82f6", type: "book" }
            ]
        },
        {
            title: "Desenvolvimento & Auto-ajuda",
            items: [
                { img: "https://m.media-amazon.com/images/I/41xOiJrW3IL.jpg", title: "Hábitos Atômicos", top10: true, badge: "Bestseller", badgeColor: "#3b82f6", type: "book" },
                { img: "https://m.media-amazon.com/images/I/815iPX0SgkL.jpg", title: "Poder do Hábito", badge: "Transformador", badgeColor: "#3b82f6", type: "book" }
            ]
        }
    ],
    quadrinhos: [
        {
            title: "Super-heróis",
            items: [
                { img: "https://m.media-amazon.com/images/I/71GRlX4IM+L._AC_UF1000,1000_QL80_.jpg", title: "Homem-Aranha", top10: true, badge: "Marvel", badgeColor: "#3b82f6", type: "comic" },
                { img: "https://terraverso.com.br/wp-content/uploads/2020/12/Batman-UrbanLegends-01.jpg", title: "Batman", top10: true, badge: "DC", badgeColor: "blue", type: "comic" }
            ]
        },
        {
            title: "Mangá",
            items: [
                { img: "https://cdn.awsli.com.br/600x700/2497/2497836/produto/269189149/mang--one-piece-vol--104---capa-oficial-o326tzwh01.jpg", title: "One Piece", top10: true, badge: "Bestseller", badgeColor: "#3b82f6", type: "comic" },
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF33bZmxpzh2o7FdPUkM_fo0AeUg5zbXahNA&s", title: "Naruto", top10: true, badge: "Clássico", badgeColor: "#3b82f6", type: "comic" }
            ]
        },
        {
            title: "Graphic Novels",
            items: [
                { img: "https://m.media-amazon.com/images/I/81m23o7rNmL._AC_UF1000,1000_QL80_.jpg", title: "Watchmen", top10: true, badge: "Obra-Prima", badgeColor: "#3b82f6", type: "comic" },
                { img: "https://m.media-amazon.com/images/I/81VOU03z-uL._UF1000,1000_QL80_.jpg", title: "V de Vingança", badge: "Cult", badgeColor: "#3b82f6", type: "comic" }
            ]
        },
        {
            title: "Mangá Shounen",
            items: [
                { img: "https://down-br.img.susercontent.com/file/br-11134201-23010-7tbja1x5hcmvf7", title: "Hunter x Hunter", top10: true, badge: "Melhor Mangá", badgeColor: "#3b82f6", type: "comic" },
                { img: "https://m.media-amazon.com/images/I/51pAoyagkWL._AC_UF1000,1000_QL80_.jpg", title: "Bleach", badge: "Clássico", badgeColor: "#3b82f6", type: "comic" }
            ]
        },
        {
            title: "Animes em HQ",
            items: [
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMkuNVB9DDnmRFd6MexpIiLH0tnWm7vtGDQ&s", title: "Attack on Titan", top10: true, badge: "Bestseller", badgeColor: "#3b82f6", type: "comic" },
                { img: "https://cdn.kobo.com/book-images/086b65fc-4a24-4400-9b81-d828313958bf/1200/1200/False/demon-slayer-kimetsu-no-yaiba-vol-1.jpg", title: "Demon Slayer", badge: "Award Winner", badgeColor: "red", type: "comic" }
            ]
        }
    ]
};

// Preferências de conteúdo por perfil
const perfilPreferencias = {
    "Luís": {
        filmes: [0, 2],
        series: [0],
        livros: [0, 3, 4],
        quadrinhos: [0, 2]
    },
    "Ronaldo": {
        filmes: [2, 3],
        series: [0, 1, 3],
        livros: [1, 2],
        quadrinhos: [1, 3]
    },
    "Adelmário": {
        filmes: [1, 3],
        series: [2, 3],
        livros: [2, 3],
        quadrinhos: [2, 4]
    },
    "Enaldo": {
        filmes: [1],
        series: [1, 2],
        livros: [1, 3, 4],
        quadrinhos: [1, 3, 4]
    }
};

// Função para obter categorias filtradas por perfil
export function getCategories(profileName) {
    console.log('getCategories chamado com:', profileName);
    const preferencias = perfilPreferencias[profileName];
    
    if (!preferencias) {
        console.log('Preferências não encontradas, retornando allCategories');
        return allCategories;
    }

    const filtered = {};
    
    Object.keys(allCategories).forEach(tipo => {
        filtered[tipo] = allCategories[tipo].filter((_, index) => 
            preferencias[tipo].includes(index)
        );
    });

    console.log('Categorias filtradas:', filtered);
    return filtered;
}

// Exportar categorias padrão (sem filtro de perfil)
export const categories = allCategories;
