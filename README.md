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
