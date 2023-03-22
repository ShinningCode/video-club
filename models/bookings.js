//models/actor.js
//Last update 15/03/23
module.exports = (sequelize, type) => {
    const Book = sequelize.define('bookings', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      date: type.DATE
    });
    return Book;
  };