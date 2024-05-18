import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<User> {
    return this.usersService.findByEmail(email);
  }
}
