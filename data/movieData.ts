export interface MovieData {
    id: string;
    title: string;
    director: string[];
    cast: string[];
    censor_rating: string;
    genre: string[];
    language: string;
    subtitle: string;
    duration: number;
    synopsys: string;
    posterUrl: string;
    trailerUrl: string;
    is_showing: number;
}

const movies: MovieData[] = [
    {
        id: '1',
        title: 'Inception',
        director: ['Christopher Nolan'],
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        censor_rating: 'PG-13',
        genre: ['Action', 'Sci-Fi'],
        language: 'English',
        subtitle: 'English',
        duration: 148,
        synopsys: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24014600.jpg?version=2',
        trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
        is_showing: 1,
    },
    {
        id: '2',
        title: 'Pulp Fiction',
        director: ['Quentin Tarantino'],
        cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        censor_rating: 'R',
        genre: ['Crime', 'Drama'],
        language: 'English',
        subtitle: 'English',
        duration: 154,
        synopsys: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24006500.jpg?version=2',
        trailerUrl: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
        is_showing: 1,
    },
    {
        id: '3',
        title: 'Forrest Gump',
        director: ['Robert Zemeckis'],
        cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        censor_rating: 'PG-13',
        genre: ['Drama', 'Romance'],
        language: 'English',
        subtitle: 'English',
        duration: 142,
        synopsys: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24010700.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
        is_showing: 1,
    },
    {
        id: '4',
        title: 'The Shawshank Redemption',
        director: ['Frank Darabont'],
        cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        censor_rating: 'R',
        genre: ['Drama'],
        language: 'English',
        subtitle: 'English',
        duration: 142,
        synopsys: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24013100.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
        is_showing: 1,
    },
    {
        id: '5',
        title: 'The Godfather',
        director: ['Francis Ford Coppola'],
        cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        censor_rating: 'R',
        genre: ['Crime', 'Drama'],
        language: 'English',
        subtitle: 'English',
        duration: 175,
        synopsys: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24013300.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=sY1S34973zA',
        is_showing: 1,
    },
    {
        id: '6',
        title: 'The Dark Knight',
        director: ['Christopher Nolan'],
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        censor_rating: 'PG-13',
        genre: ['Action', 'Crime', 'Drama'],
        language: 'English',
        subtitle: 'English',
        duration: 152,
        synopsys: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24012700.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
        is_showing: 1,
    },
    {
        id: '7',
        title: 'Schindler\'s List',
        director: ['Steven Spielberg'],
        cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
        censor_rating: 'R',
        genre: ['Biography', 'Drama', 'History'],
        language: 'English',
        subtitle: 'English',
        duration: 195,
        synopsys: 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24013000.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=gG22XNhtnoY',
        is_showing: 1,
    },
    {
        id: '8',
        title: 'Fight Club',
        director: ['David Fincher'],
        cast: ['Brad Pitt', 'Edward Norton', 'Meat Loaf'],
        censor_rating: 'R',
        genre: ['Drama'],
        language: 'English',
        subtitle: 'English',
        duration: 139,
        synopsys: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24013800.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=SUXWAEX2jlg',
        is_showing: 1,
    },
    {
        id: '9',
        title: 'Goodfellas',
        director: ['Martin Scorsese'],
        cast: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'],
        censor_rating: 'R',
        genre: ['Biography', 'Crime', 'Drama'],
        language: 'English',
        subtitle: 'English',
        duration: 146,
        synopsys: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24012300.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y',
        is_showing: 1,
    },
    {
        id: '10',
        title: 'The Matrix',
        director: ['Lana Wachowski', 'Lilly Wachowski'],
        cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        censor_rating: 'R',
        genre: ['Action', 'Sci-Fi'],
        language: 'English',
        subtitle: 'English',
        duration: 136,
        synopsys: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24011500.jpg?version=2',
        trailerUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
        is_showing: 1,
    },
    {
        id: '11',
        title: 'Forrest Gump',
        director: ['Robert Zemeckis'],
        cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        censor_rating: 'PG-13',
        genre: ['Drama', 'Romance'],
        language: 'English',
        subtitle: 'English',
        duration: 142,
        synopsys: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24012100.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
        is_showing: 1,
    },
    {
        id: '12',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        director: ['Peter Jackson'],
        cast: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
        censor_rating: 'PG-13',
        genre: ['Action', 'Adventure', 'Drama'],
        language: 'English',
        subtitle: 'English',
        duration: 178,
        synopsys: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24003200.jpg?version=3g',
        trailerUrl: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
        is_showing: 1,
    },
    {
        id: '13',
        title: 'The Silence of the Lambs',
        director: ['Jonathan Demme'],
        cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
        censor_rating: 'R',
        genre: ['Crime', 'Drama', 'Thriller'],
        language: 'English',
        subtitle: 'English',
        duration: 118,
        synopsys: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24011900.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o',
        is_showing: 1,
    },
    {
        id: '14',
        title: 'Forrest Gump',
        director: ['Robert Zemeckis'],
        cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        censor_rating: 'PG-13',
        genre: ['Drama', 'Romance'],
        language: 'English',
        subtitle: 'English',
        duration: 142,
        synopsys: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/22024700.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
        is_showing: 1,
    },
    {
        id: '15',
        title: 'The Usual Suspects',
        director: ['Bryan Singer'],
        cast: ['Kevin Spacey', 'Gabriel Byrne', 'Chazz Palminteri'],
        censor_rating: 'R',
        genre: ['Crime', 'Drama', 'Mystery'],
        language: 'English',
        subtitle: 'English',
        duration: 106,
        synopsys: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24010900.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=oiXdPolca5w',
        is_showing: 1,
    },
    {
        id: '16',
        title: 'Se7en',
        director: ['David Fincher'],
        cast: ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey'],
        censor_rating: 'R',
        genre: ['Crime', 'Drama', 'Mystery'],
        language: 'English',
        subtitle: 'English',
        duration: 127,
        synopsys: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
        posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24011300.jpg?version=1',
        trailerUrl: 'https://www.youtube.com/watch?v=znmZoVkCjpI',
        is_showing: 1,
    },
];

export default movies;
