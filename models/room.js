module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "room",
        {
            title: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            max: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
            },
            owner: {
                type: DataTypes.STRING(20),
                allowNull: false,

            },
            password: {
                type: DataTypes.STRING(15),
                allowNull: false,
            }
        },
        {
            timestamps: true, // creating data, modifying date
            paranoid: true, // to recover, it wil be save deleting date
            charset: "utf8",
            collate: "utf8_general_ci",
        }
    );
};