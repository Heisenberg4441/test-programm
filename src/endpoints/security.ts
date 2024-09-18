import {server} from '..'


server.use(".*", async (req, res) => {
    res.headers['Access-Control-Allow-Origin'] = "*";
    res.headers['Access-Control-Allow-Headers'] = "auth,content-type,init-data";
})

server.options(".*", async (req, res) => {
    res.headers['Access-Control-Allow-Methods']
    res.headers['Access-Control-Allow-Origin'] = "*"
    res.headers['Access-Control-Request-Headers'] = "auth,content-type";
    res.headers['Access-Control-Allow-Headers'] = "auth,content-type";
    return res;
});