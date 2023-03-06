//models/director.js
//Last update 03/03/23
module.exports = (sequelize, type) => {
  const Director = sequelize.define('directors', {
    id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
    name: type.STRING,
    lastName: type.STRING
  });
  return Director;
};