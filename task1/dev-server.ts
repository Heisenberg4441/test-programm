import * as express from 'express';
import { index } from './src/index'
import { Params } from './src/server'

//@ts-ignore
global.BUILD_MODE = "development"

const app = express();
const port = 3000;

app.use(express.json({ limit: '15mb' }));

app.use('/', async (req, res) => {
    const { body, headers, method, query } = req;
    const queryParams: Params = {};
    Object.keys(query).forEach(q => {
        if (query[q] && typeof query[q] === "string") {
            queryParams[q] = query[q] as string;
        }
    });
    queryParams["__path"] = req.path;
    let result = await index({
        body,
        headers,
        httpMethod: method,
        queryStringParameters: queryParams
    });
    if (result.statusCode) res.statusCode = result.statusCode;
    if (result.headers) {
        for (let key of Object.keys(result.headers)) {
            res.setHeader(key, result.headers[key]);
        }
    }
    res.send(result.body);

})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
