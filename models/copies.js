//models/director.js
//Last update 03/03/23
module.exports = (sequelize, type) => {
    const Copy = sequelize.define('copies', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      number: type.INTEGER,
      format: {
       type: type.ENUM,
       values: ['DVD'] 
      },
      estatus: {
        type: type.ENUM,
        values: ['Disponible','No disponible'] 
       }
    });
    return Copy;
  };


