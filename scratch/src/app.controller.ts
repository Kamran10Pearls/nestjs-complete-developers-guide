import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/")
  getRootRoute() {
    return "Hello World";
  }

  @Get("/hello")
  getHelloRoute() {
    return "Hello There";
  }

  @Get("/hi")
  getHiRoute() {
    return "Hi World";
  }
}
