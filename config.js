require('dotenv').config();
const USERNAME = process.env.root;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DB = process.env.DB;

var exports = module.exports = {USERNAME, PASSWORD, HOST, PORT, DB};
