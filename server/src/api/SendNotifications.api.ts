'use strict';
import { Response } from 'express';
import { Service } from 'typedi';
import { JsonController, Get, Res } from 'routing-controllers';

@JsonController()
@Service()
export class AuthController {

  @Get('/login')
  public login(@Res() resp: Response) {
    return "sss";
  }
}