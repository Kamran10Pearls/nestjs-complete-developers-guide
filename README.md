# nestjs-complete-developers-guide

this is repo for training and practicing nestjs

# common Commands

## Generating Modules

nest new module messages

## Generating Controllers

nest generate controller messages/messages --flat

# Routes

- @Controller('namespace of your route')

* controllerClassName(){

  - @APIType @Get('Your route here/:id') @Post('Your route here') etc
    - RouteMethodName(@Body() body:type)
    - RouteMethodName(@Param('id') id:type)

}

# Pipes

- Nest js has its own pipes for validation known as validationPipe

### Usage

#### In main.ts file

- Import ValidationPipe from "@nestjs/common"

* In Bootstrap function
  - app.useGlobalPipes(
    new ValidationPipe()
    )
## About Package.json Dependencies

```
    "@nestjs/common": "^7.6.17",
    "@nestjs/core": "^7.6.17",
    "@nestjs/platform-express": "^7.6.17",
    "reflect-metadata": "^0.1.13",
    "typescript": "^4.3.2"
```

### @nestjs/core

contains majority of functions classes

### @nestjs/platform-express

Adapter between Express and NestJs
NestJs will use Express behind the scene to handle all the http requests

### reflect-metadata

Library tied to decorators

### Typescript

Nestjs applications are mostly written with typescript
It is a typescript compiler
