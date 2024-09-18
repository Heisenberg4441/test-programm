import * as Rollbar from 'rollbar';
const { ROLLBAR_TOKEN } = process?.env;

var rollbar = new Rollbar({
    accessToken: ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: "production",
});

export const catchErrors = async (req: any, res: any, func: Function, funcName: string) => {
    try {
        return await func(req, res);
    } catch (e) {
        rollbar.error(e, {
            funcName
        });
        console.error(e);
        return {
            body: { status: "error" }
        }
    }
}
