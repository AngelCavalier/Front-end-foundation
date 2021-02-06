// Mongoose 的一切始于 Schema。每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成。
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 定义数据结构
const DataSchmea = new Schema(
  {
    id: Number,
    message: String,
  },
  {
    timestamps: true,
  }
)

// 导出模型构造函数，返回Schema,便于通过Node.js使用
module.exports = mongoose.model('Data', DataSchmea)
