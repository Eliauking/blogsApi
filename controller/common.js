const { Op } = require("sequelize");
const Sequelize = require("../config/sequelize");
class DatabaseUtils {
  constructor(Sequelize) {
    this.sequelize = Sequelize;
  }
  // 执行自定义查询并返回结果
  async query(sql, options) {
    try {
      const result = await this.sequelize.query(sql, options);
      return result;
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  }

  // 根据条件查询单个记录
  async findOne(model, conditions) {
    try {
      const record = await model.findOne({ where: conditions });
      return record;
    } catch (error) {
      console.error("Error finding record:", error);
      throw error;
    }
  }

  // 根据条件查询多个记录
  async findAll(model, conditions) {
    try {
      const records = await model.findAll({ where: conditions });
      return records;
    } catch (error) {
      console.error("Error finding records:", error);
      throw error;
    }
  }

  // 创建新记录
  async create(model, data) {
    try {
      const record = await model.create(data);
      return record;
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  }

  // 更新符合条件的记录
  async update(model, conditions, data) {
    try {
      const result = await model.update(data, { where: conditions });
      return result;
    } catch (error) {
      console.error("Error updating record:", error);
      throw error;
    }
  }

  // 删除符合条件的记录
  async remove(model, conditions) {
    try {
      const result = await model.destroy({ where: conditions });
      return result;
    } catch (error) {
      console.error("Error removing record:", error);
      throw error;
    }
  }

  // 分页查询符合条件的记录
  async paginate(model, conditions, page = 1, pageSize = 10, order = []) {
    try {
      const offset = (page - 1) * pageSize;
      const limit = pageSize;
      const result = await model.findAndCountAll({
        where: conditions,
        offset,
        limit,
        order,
      });
      return result;
    } catch (error) {
      console.error("Error paginating records:", error);
      throw error;
    }
  }

  // 构建查询条件对象，过滤掉值为 undefined 的属性
  buildCondition(conditions) {
    const builtConditions = {};
    for (const key in conditions) {
      if (conditions[key] !== undefined) {
        builtConditions[key] = conditions[key];
      }
    }
    return builtConditions;
  }

  // 构建排序规则
  buildOrder(orderBy, orderType = "ASC") {
    return [[orderBy, orderType]];
  }

  // 构建模糊查询条件
  buildLikeCondition(field, value) {
    return { [field]: { [Op.like]: `%${value}%` } };
  }
}

module.exports = new DatabaseUtils(Sequelize);
