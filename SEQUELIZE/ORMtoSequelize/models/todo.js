/**
 * Created by hansel.tritama on 11/27/17.
 */
module.exports = function (sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Todo;
};