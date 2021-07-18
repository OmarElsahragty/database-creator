export default (connection, DataTypes) =>
  connection.define(
    "Cites",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      arabicName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      englishName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      connection,
      tableName: "Cites",
      timestamps: true,
      indexes: [
        {
          unique: { args: true },
          fields: ["arabicName", "englishName"],
        },
      ],
    }
  );
