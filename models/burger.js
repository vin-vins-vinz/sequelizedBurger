module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("burgers", {
        burger_name: DataTypes.STRING,
        //    { type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};
