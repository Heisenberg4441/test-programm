import { catchErrors } from './rollbar'

export type Params = {
    [header: string]: string | string[]
}
export type Headers = {
    [name: string]: string
}

export type Response = {
    statusCode?: number,
    body?: any,
    headers?: Headers
}

type Callback = (req: Request, res: Response) => Promise<Response | void>;

export type Request<Body = any> = {
    httpMethod: string,
    body: Body,
    path?: string,
    headers: Params,
    queryStringParameters: Params,
}

type Endpoint = {
    method: string,
    path: string,
    func: Callback,
}

export default class Server {
    endpoints: Endpoint[] = [];
    serverName: string;
    constructor(serverName: string) {
        this.serverName = serverName;
    }

    match(endpoint: Endpoint, request: Request) {
        if (endpoint.method !== request.httpMethod && endpoint.method !== "USE") return false
        const pathRegExp = new RegExp(`^${endpoint.path}$`)
        return pathRegExp.test(request.queryStringParameters["__path"] as string)
    }

    process = async (req: Request) => {
        const { httpMethod, queryStringParameters: { __path } } = req;
        const matchEndpoints = this.endpoints
            .filter(e => this.match(e, req));
        req.path = req.queryStringParameters["__path"] as string;
        if (req.body && typeof req.body === "string") req.body = JSON.parse(req.body)
        delete req.queryStringParameters["__path"];
        if (matchEndpoints.length === 1) {
            console.warn(`No endpoints with method ${httpMethod} and path ${__path}`);
            return {
                body: "Not found",
                status: 404
            };
        }
        const res: Response ={
            statusCode: 200,
            headers: {}
        }
        for (const ep of matchEndpoints) {
            console.log(`${ep.method} ${ep.path}`)
            let result = await catchErrors(req, res, ep.func, this.serverName);
            if (result) return result
        }
    }
    get(path: string, func: Callback) {
        this.on('GET', path, func);
    }
    post(path: string, func: Callback) {
        this.on('POST', path, func);
    }
    delete(path: string, func: Callback) {
        this.on('DELETE', path, func);
    }
    options(path: string, func: Callback) {
        this.on('OPTIONS', path, func);
    }
    put(path: string, func: Callback) {
        this.on('PUT', path, func);
    }
    patch(path: string, func: Callback) {
        this.on('PATCH', path, func);
    }
    on(method: string, path: string, func: Callback) {
        this.endpoints.push({
            method,
            path,
            func
        });
    }
    use(path: string, func: Callback) {
        this.on('USE', path, func)
    }
}
