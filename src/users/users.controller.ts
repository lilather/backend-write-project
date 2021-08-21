import {
  Body,
  Controller, Get,
  HttpCode,
  HttpStatus, Post, UsePipes,
  ValidationPipe
} from '@nestjs/common';
////import { AuthGuard } from '@nestjs/passport';
//import { AuthorGuard } from '../auth/guards/author.guard';
import { createUserDto } from './dtos';
import { User } from './schemas/users.schema';
import { UsersService } from './users.service';
//@Injectable({ scope: Scope.REQUEST }) dont remember if i still need this if i do I need to inject it into my test 

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('all')
  @HttpCode(HttpStatus.OK)
  index(): Promise<User[]> {
    return this.userService.findAll();
  }

@Post('signup')
@HttpCode(HttpStatus.CREATED)
@UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
create(@Body() newUser: createUserDto): Promise<User> {
  return this.userService.create(newUser);
}
}