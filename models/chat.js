module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "chat",
        {
            user: {
                type: DataTypes.STRING(20),
                allowNull: false,
                // unique: false,
            },
            chat: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: false,
            },
        },
        {
            timestamps: true, // creating data, modifying date
            paranoid: true, // to recover, it wil be save deleting date
            charset: "utf8",
            collate: "utf8_general_ci",
        }
    );
};