import "dotenv/config.js";
import express from "express";
import getImages from "./apiCall.js";
import cors from "cors";
const app = express();

app.use(cors({ origin: '*' }));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Giphy Practice';

app.get('/:query', async(request, response) => {
    const urls = await getImages(request.params.query);
    response.send(urls);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});