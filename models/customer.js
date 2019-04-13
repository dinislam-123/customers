
module.exports = (sequelize, DataTypes) => {
    var Customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            AUTO_INCREMENT: true
        },
        fname: {
            type: DataTypes.STRING,
            required: true
        },
        lname: {
            type: DataTypes.STRING,
            required: true

        },
        age: {
            type: DataTypes.INTEGER,
            required: true
        }
    });
      return Customer;
    }