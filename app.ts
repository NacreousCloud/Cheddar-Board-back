import express from 'express';
import IndexRouter from './routes/indexRoutes.js';
import BoardRouter from './routes/boardRoutes.js';
import { InitDataBase } from './db';

const app = express();
const port = 8000;
InitDataBase();

// JSON 형식의 요청 본문을 파싱
app.use(express.json());

// URL-encoded 형식의 요청 본문을 파싱
app.use(express.urlencoded({ extended: true }));

app.get('/', IndexRouter);

app.all('/board', BoardRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
