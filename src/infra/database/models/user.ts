'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN
    },
    {}
  );
  return User;
};
