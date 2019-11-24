/// <reference path="node_modules/@types/es4x.d.ts" />
// @ts-check
import {id} from "./id"
vertx
  .createHttpServer()
  .requestHandler(function (req) {
    req.response().end(id.createNameWithSpaces("DalongRongAppDemo"));
  })
  .listen(8080);

console.log('Server listening at: http://localhost:8080/');