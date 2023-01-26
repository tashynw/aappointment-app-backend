import { Body, Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {} {
    return this.appService.getHello();
  }

  @Get('/:id')
  getSpecificHello(@Req() request: Request, @Res() response: Response): {} {
    return response.status(HttpStatus.BAD_REQUEST).send({
      message: "Post not found"
    });
  }
}
