import Sequelize from "sequelize";
import config from "../config";

import Trips from "./Trips";

const sequelize = new Sequelize({
  ...config.postgres,
  operatorsAliases: Sequelize.Op
});

Trips.init(sequelize);

const { models } = sequelize;

for (const modelName in models) {
  const model = models[modelName];
  if ("associate" in model) {
    model.associate(models, sequelize);
  }
}

sequelize.sync({ logging: true, force: true });

export default sequelize;
