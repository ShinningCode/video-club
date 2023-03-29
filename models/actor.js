//models/actor.js
//Last update 15/03/23
module.exports = (sequelize, type) => {
    const Actor = sequelize.define('actors', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      name: type.STRING,
      lastName: type.STRING
    });
    return Actor;
  };