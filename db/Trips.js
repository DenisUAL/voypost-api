import Sequelize from "sequelize";

const { DataTypes, Model } = Sequelize;

export default class Trip extends Model {
  static init(sequelize) {
    this.db = sequelize;
    super.init(
      {
        fromName: { type: DataTypes.STRING },
        toName: { type: DataTypes.STRING },
        vehicle: { type: DataTypes.STRING },
        departAt: { type: DataTypes.DATE }
      },
      {
        sequelize,
        paranoid: true,
        tableName: "trips"
      }
    );
  }

  static list() {
    return this.findAll();
  }
}
