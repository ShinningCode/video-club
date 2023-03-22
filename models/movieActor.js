//models/director.js
//Last update 03/03/23
module.exports = (sequelize, type) => {
    const MovieActor = sequelize.define('movies_actors', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      movieId: type.INTEGER,
      acorId: type.INTEGER
    });
    return MovieActor;
  };