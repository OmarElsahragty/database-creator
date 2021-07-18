export default (connection, DataTypes) =>
  connection.define(
    "Regions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cites",
          key: "id",
        },
      },
      arabicName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      englishName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      float: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      dateTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      string: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      connection,
      tableName: "Regions",
      timestamps: true,
      indexes: [
        {
          unique: { args: true },
          fields: ["arabicName", "englishName", "cityId"],
        },
      ],
    }
  );
