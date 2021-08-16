

import { Body, Controller, Get, Delete, Param, Post, Put, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';

import { IUser } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor (
    private usersService: UsersService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  index() {
    //return this.usersService.findAll();
  }

  @Get('user')
  getUser(@Request() request) {
    return request.user;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id) {
    //return this.usersService.delete(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  create() {
   //return this.usersService.create(user);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update() {
  }

}
