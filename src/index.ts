import Server from "./server";

console.log("server started");

export const server = new Server("test-server");


import './endpoints/security';
import './endpoints/private';
import './endpoints/public';

export const index = server.process;