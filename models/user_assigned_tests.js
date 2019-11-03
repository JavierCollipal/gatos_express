
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user_assigned_tests",
    {
      userId: {
        type: DataTypes.STRING,
        field: "userId"
      },
      testId: {
        type: DataTypes.STRING,
        field: "testId"
      },
      state: {
        type: DataTypes.STRING,
        field: "state"
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );
};