import { Controller } from '@nestjs/common';
import { Delete, Get, Patch, Post } from '@nestjs/common/decorators';
import { User } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  register() {}

  @Post('login')
  login() {}

  @Get(':id')
  getUser() {}

  @Patch(':id')
  updateUser() {}

  @Delete(':id')
  deleteUser() {}
}
