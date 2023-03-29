const Sequelize = require('sequelize');

const directorModel = require('./models/directors');
const genreModel = require('./models/genre');
const memberModel = require('./models/members'); //08/03/23
const actorModel = require('./models/actor');
const movieModel = require('./models/movie');
const movieActorModel = require('./models/movieActor');//15/03/23
const copyModel = require('./models/copies');
const bookModel = require('./models/bookings');
// 1) Nombre de la base de datos
// 2) Usuario de la base de datos
// 3) Contraseña de la base de datos
// 4) Objeto de configuracion del ORM

const sequelize = new Sequelize('video-club', 
'root','MysqlDataBase1.',{
    host:'127.0.0.1',
    dialect:'mysql'
});

const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Actor = actorModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const MovieActor = movieActorModel(sequelize, Sequelize);
const Copy = copyModel(sequelize,Sequelize);
const Book = bookModel(sequelize, Sequelize);

// Un genero ouede tener muchas peliculas
Genre.hasMany(Movie, {as:'movies'});//Un genero tiene muchas peliculas
// Una pelicula puede tener un genero
Movie.belongsTo(Genre, {as:'genre'});//Peliculas pertenecen a genero
//Un director puede tener muchas peliculas
Director.hasMany(Movie, {as:'movies'})
// Una pelicula puede tener un director
Movie.belongsTo(Director, {as:'director'});
//un Actor participa en muchas peliculas
MovieActor.belongsTo(Movie,{foreignKey: 'movieId'});
//Una pelicula participan muchos actores
MovieActor.belongsTo(Actor, {foreignKey: 'actorId'});
//Una pelicula puede tener varias copias
Copy.hasMany(Movie, {as: 'movies'});
//Un libro puede tener varias copias
Book.hasMany(Copy, {as: 'copies'});

Book.belongsToMany(Copy, {
    foreignKey: 'copyId',
    as: 'books copy',
    through: 'bookings'
});

Book.belongsToMany(Copy, {
    foreignKey: 'memberId',
    as: 'books members',
    through: 'bookings'
});

Copy.belongsToMany(Movie, {
    foreignKey: 'movieId',
    as: 'movie copy',
    through: 'movies_actors'
});

Movie.belongsToMany(Actor, {
    foreignKey: 'actorId',
    as: 'actors',
    through: 'movies_actors'
});

Actor.belongsToMany(Movie, {
    foreignKey: 'movieId',
    as: 'movies',
    through: 'movies_actors'
})

sequelize.sync({
    force: true
    }).then(() =>{
        console.log("Base de datos actualizada");
    });

module.exports = {Director, Genre, Actor, Member, Movie};
