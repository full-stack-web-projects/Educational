const mongoose = require("mongoose");
const { database, password, username } = require("./env.config").db_env;
const logger = require("winston");

if (!database || !password || !username) {
  logger.error("Missing database credentials in env.js");
  process.exit(1);
}
const connection_url = `mongodb+srv://${username}:${password}@cluster0.slsu9nk.mongodb.net/${database}`;
const retries = 5;

const connectDB = async () => {};

module.exports = connectDB;
