import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname + "hello")
const app = express();
app.use(bodyParser.json())
// console.log(path.join(__dirname, '../public'))
app.use(express.static('./public'))
// 
export default app;